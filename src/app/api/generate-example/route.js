// Простые примеры предложений для демонстрации
const exampleTemplates = [
  "I {word} every day.",
  "She likes to {word}.",
  "The {word} is very important.",
  "We need to {word} this.",
  "He can {word} well.",
  "This {word} is beautiful.",
  "They {word} together.",
  "My {word} is here.",
  "The {word} works perfectly.",
  "I want to {word} more."
]

const nounTemplates = [
  "The {word} is on the table.",
  "I bought a new {word}.",
  "This {word} is very useful.",
  "My {word} is broken.",
  "The {word} looks amazing."
]

const adjectiveTemplates = [
  "The weather is {word} today.",
  "She looks very {word}.",
  "This book is {word}.",
  "The movie was {word}.",
  "I feel {word} about this."
]

export async function POST(request) {
  try {
    const { word } = await request.json()

    if (!word) {
      return Response.json({ error: 'Слово не вказано' }, { status: 400 })
    }

    // Выбираем случайный шаблон
    const templates = [...exampleTemplates, ...nounTemplates, ...adjectiveTemplates]
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)]
    
    // Заменяем {word} на актуальное слово
    const example = randomTemplate.replace('{word}', word.toLowerCase())
    
    // Простые переводы шаблонов
    const translations = {
      "I {word} every day.": "Я {word} каждый день.",
      "She likes to {word}.": "Ей нравится {word}.",
      "The {word} is very important.": "{word} очень важно.",
      "We need to {word} this.": "Нам нужно {word} это.",
      "He can {word} well.": "Он может хорошо {word}.",
      "This {word} is beautiful.": "Этот {word} красивый.",
      "They {word} together.": "Они {word} вместе.",
      "My {word} is here.": "Мой {word} здесь.",
      "The {word} works perfectly.": "{word} работает отлично.",
      "I want to {word} more.": "Я хочу {word} больше.",
      "The {word} is on the table.": "{word} на столе.",
      "I bought a new {word}.": "Я купил новый {word}.",
      "This {word} is very useful.": "Этот {word} очень полезен.",
      "My {word} is broken.": "Мой {word} сломан.",
      "The {word} looks amazing.": "{word} выглядит потрясающе.",
      "The weather is {word} today.": "Погода сегодня {word}.",
      "She looks very {word}.": "Она выглядит очень {word}.",
      "This book is {word}.": "Эта книга {word}.",
      "The movie was {word}.": "Фильм был {word}.",
      "I feel {word} about this.": "Я чувствую себя {word} по этому поводу."
    }
    
    // Получаем перевод шаблона
    const translationTemplate = translations[randomTemplate] || "Перевод не найден."
    const translation = translationTemplate.replace('{word}', word.toLowerCase())

    return Response.json({ 
      example: example,
      translation: translation,
      word: word
    })
  } catch (error) {
    console.error('Помилка генерації прикладу:', error)
    return Response.json({ error: 'Помилка генерації прикладу' }, { status: 500 })
  }
}