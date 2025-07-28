import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ response: text });
  } catch (error) {
    console.error('Помилка API чату:', error);
    
    // Проверяем, является ли это ошибкой превышения квоты
    if (error.message && (error.message.includes('429') || error.message.includes('quota'))) {
      return Response.json(
        { error: 'Превышена дневная квота API. Попробуйте завтра или обновите план.' },
        { status: 429 }
      );
    }
    
    return Response.json(
      { error: 'Помилка при обробці запиту' },
      { status: 500 }
    );
  }
}