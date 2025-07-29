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
    const { word } = await request.json()

    if (!word || !word.trim()) {
      return NextResponse.json(
        { error: 'Слово не вказано' },
        { status: 400 }
      )
    }

    const cleanWord = word.trim()

    const prompt = `Створи приклад речення англійською мовою з використанням слова "${cleanWord}". 

Вимоги:
- Речення повинно бути простим та зрозумілим
- Показувати правильне використання слова в контексті
- Бути корисним для вивчення англійської мови
- Довжина: 5-12 слів

Потім переклади це речення українською мовою.

Формат відповіді:
Приклад: [англійське речення]
Переклад: [український переклад]`

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    // Використовуємо retry функцію для API виклику
    const result = await retryWithBackoff(async () => {
      return await model.generateContent(prompt)
    })
    
    const response = await result.response
    const text = response.text().trim()

    // Парсимо відповідь
    const lines = text.split('\n').filter(line => line.trim())
    let example = ''
    let translation = ''

    for (const line of lines) {
      if (line.toLowerCase().includes('приклад:')) {
        example = line.replace(/приклад:/i, '').trim()
      } else if (line.toLowerCase().includes('переклад:')) {
        translation = line.replace(/переклад:/i, '').trim()
      }
    }

    // Якщо не вдалося розпарсити, використовуємо весь текст як приклад
    if (!example) {
      example = lines[0] || text
    }
    if (!translation) {
      translation = lines[1] || 'Переклад не знайдено'
    }

    return NextResponse.json({ 
      example: example,
      translation: translation,
      word: cleanWord
    })
  } catch (error) {
    console.error('Помилка генерації прикладу:', error)
    
    // Обробка різних типів помилок API
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
      { error: 'Помилка генерації прикладу. Спробуйте ще раз.' },
      { status: 500 }
    )
  }
}