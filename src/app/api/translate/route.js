import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

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
    const result = await model.generateContent(prompt)
    const response = await result.response
    const translation = response.text().trim()

    return NextResponse.json({ 
      translation,
      originalText: cleanText,
      isPhrase 
    })
  } catch (error) {
    console.error('Ошибка перевода:', error)
    
    // Проверяем, является ли это ошибкой превышения квоты
    if (error.message && error.message.includes('429') || error.message.includes('quota')) {
      return NextResponse.json(
        { error: 'Превышена дневная квота API. Попробуйте завтра или обновите план.' },
        { status: 429 }
      )
    }
    
    return NextResponse.json(
      { error: 'Ошибка при переводе текста' },
      { status: 500 }
    )
  }
}