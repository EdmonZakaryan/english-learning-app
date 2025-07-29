import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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
    const { message, lessonTitle, lessonContent } = await request.json();

    if (!message) {
      return Response.json(
        { error: 'Повідомлення обов\'язкове' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Создаем контекст урока для более релевантных ответов
    const context = lessonTitle && lessonContent 
      ? `Контекст уроку: "${lessonTitle}". Зміст уроку: ${lessonContent.substring(0, 500)}...`
      : 'Загальні питання з англійської мови';

    const prompt = `Ти - AI асистент для вивчення англійської мови. ${context}

Відповідай українською мовою, будь корисним та дружелюбним. Якщо питання стосується уроку, використовуй контекст для надання більш точних відповідей.

Питання користувача: ${message}`;

    // Використовуємо retry функцію для API виклику
    const result = await retryWithBackoff(async () => {
      return await model.generateContent(prompt)
    });
    
    const response = await result.response;
    const text = response.text();

    return Response.json({ response: text });
  } catch (error) {
    console.error('Помилка API чату:', error);
    
    // Обробка різних типів помилок API
    if (error.message && (error.message.includes('429') || error.message.includes('quota'))) {
      return Response.json(
        { error: 'Превышена дневная квота API. Попробуйте завтра или обновите план.' },
        { status: 429 }
      );
    }
    
    if (error.message && (error.message.includes('503') || error.message.includes('overloaded'))) {
      return Response.json(
        { error: 'Сервіс тимчасово перевантажений. Спробуйте через кілька хвилин.' },
        { status: 503 }
      );
    }
    
    if (error.message && error.message.includes('401')) {
      return Response.json(
        { error: 'Невірний API ключ. Перевірте налаштування.' },
        { status: 401 }
      );
    }
    
    return Response.json(
      { error: 'Помилка при обробці запиту' },
      { status: 500 }
    );
  }
}