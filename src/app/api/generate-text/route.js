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
    const { topic, level, length } = await request.json()

    if (!level || !length) {
      return NextResponse.json(
        { error: 'Відсутні обов\'язкові параметри' },
        { status: 400 }
      )
    }

    // Список случайных тем для генерации
    const randomTopics = [
      'Travel and Adventure',
      'Technology and Innovation',
      'Environmental Protection',
      'Health and Fitness',
      'Food and Cooking',
      'Art and Culture',
      'Sports and Recreation',
      'Education and Learning',
      'Science and Discovery',
      'Music and Entertainment',
      'History and Traditions',
      'Animals and Nature',
      'Space and Astronomy',
      'Books and Literature',
      'Fashion and Style'
    ]

    // Выбираем случайную тему, если тема не указана
    const actualTopic = topic && topic.trim() ? topic.trim() : randomTopics[Math.floor(Math.random() * randomTopics.length)]

    // Определяем параметры для генерации на основе настроек
    const levelDescriptions = {
      'A1': 'початковий рівень (A1) - використовуйте прості слова та короткі речення',
      'A2': 'елементарний рівень (A2) - використовуйте базову лексику та прості граматичні конструкції',
      'B1': 'середній рівень (B1) - використовуйте різноманітну лексику та складніші граматичні структури',
      'B2': 'вище середнього рівень (B2) - використовуйте просунуту лексику та складні граматичні конструкції',
      'C1': 'просунутий рівень (C1) - використовуйте складну лексику та різноманітні стилістичні прийоми',
      'C2': 'професійний рівень (C2) - використовуйте найскладнішу лексику та досконалі граматичні структури'
    }

    const lengthDescriptions = {
      'короткі': '150-250 слів',
      'середні': '300-500 слів',
      'довгі': '600-800 слів'
    }

    const prompt = `Створи освітній текст англійською мовою на тему "${actualTopic}" для рівня ${levelDescriptions[level]}. 

Вимоги:
- Довжина тексту: ${lengthDescriptions[length]}
- Текст повинен бути цікавим та пізнавальним
- Використовуй лексику та граматику відповідно до рівня ${level}
- Розділи текст на 3-5 абзаців для кращої читабельності
- Кожен абзац повинен містити 3-5 речень
- Між абзацами залишай порожній рядок
- Не додавай заголовки або додаткові пояснення
- Текст повинен бути готовим для читання

Текст:`

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    // Використовуємо retry функцію для API виклику
    const result = await retryWithBackoff(async () => {
      return await model.generateContent(prompt)
    })
    
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ content: text.trim(), actualTopic })
  } catch (error) {
    console.error('Помилка генерації тексту:', error)
    
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
      { error: 'Помилка при генерації тексту. Спробуйте ще раз.' },
      { status: 500 }
    )
  }
}