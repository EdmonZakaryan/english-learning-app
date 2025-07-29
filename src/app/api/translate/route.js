import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

// Функція для повторних спроб з exponential backoff
async function retryWithBackoff(fn, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      const isRetryableError = error.message && (
        error.message.includes('503') || 
        error.message.includes('overloaded') ||
        error.message.includes('Service Unavailable')
      )
      
      if (attempt === maxRetries || !isRetryableError) {
        throw error
      }
      
      const delay = baseDelay * Math.pow(2, attempt - 1) + Math.random() * 1000
      console.log(`Спроба ${attempt} невдала, повторюємо через ${Math.round(delay)}мс...`)
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
}

export async function POST(request) {
  try {
    const { text, isPhrase } = await request.json()

    if (!text || !text.trim()) {
      return NextResponse.json(
        { error: 'Текст для перевода не предоставлен' },
        { status: 400 }
      )
    }

    const cleanText = text.trim()

    let prompt
    if (isPhrase) {
      // Для фраз и предложений
      prompt = `Переведи следующий английский текст на украинский язык. Дай только перевод без дополнительных объяснений:

"${cleanText}"`
    } else {
      // Для отдельных слов
      prompt = `Переведи английское слово "${cleanText}" на украинский язык. Дай только перевод одним словом или короткой фразой без дополнительных объяснений.`
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    // Використовуємо retry функцію для API виклику
    const result = await retryWithBackoff(async () => {
      return await model.generateContent(prompt)
    })
    
    const response = await result.response
    const translation = response.text().trim()

    return NextResponse.json({ 
      translation,
      originalText: cleanText,
      isPhrase 
    })
  } catch (error) {
    console.error('Ошибка перевода:', error)
    
    // Проверяем различные типы ошибок API
    if (error.message && (error.message.includes('429') || error.message.includes('quota'))) {
      return NextResponse.json(
        { error: 'Превышена дневная квота API. Попробуйте завтра или обновите план.' },
        { status: 429 }
      )
    }
    
    if (error.message && (error.message.includes('503') || error.message.includes('overloaded'))) {
      return NextResponse.json(
        { error: 'Сервіс тимчасово перевантажений. Спробуйте через кілька хвилин.' },
        { status: 503 }
      )
    }
    
    if (error.message && error.message.includes('401')) {
      return NextResponse.json(
        { error: 'Невірний API ключ. Перевірте налаштування.' },
        { status: 401 }
      )
    }
    
    return NextResponse.json(
      { error: 'Ошибка при переводе текста' },
      { status: 500 }
    )
  }
}