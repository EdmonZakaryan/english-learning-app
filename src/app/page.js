'use client'

import { useState, useEffect } from 'react'
import { BlurFade } from '../components/ui/blur-fade'
import { ScratchToReveal } from '../components/ui/scratch-to-reveal'



const lessons = [
  {
    id: 1,
    title: "Основи англійського алфавіту",
    description: "Вивчіть англійський алфавіт та правильну вимову літер",
    level: "Beginner",
    duration: "15 хв",
    category: "Основи",
    content: {
      article: `# Англійський алфавіт: Основи для початківців

Англійський алфавіт складається з **26 літер**, які є основою для вивчення англійської мови. Кожна літера має свою унікальну вимову та може звучати по-різному в залежності від контексту.

## Літери алфавіту

Англійський алфавіт включає:
- **5 голосних літер**: A, E, I, O, U
- **21 приголосну літеру**: B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z

### Голосні літери

Голосні літери є основою складів і слів. Вони можуть мати різну вимову:

**A** [eɪ] - як у слові "name" (ім'я)  
**E** [iː] - як у слові "see" (бачити)  
**I** [aɪ] - як у слові "time" (час)  
**O** [əʊ] - як у слові "home" (дім)  
**U** [juː] - як у слові "use" (використовувати)

### Приголосні літери

Приголосні літери створюють звуки, які поєднуються з голосними для формування слів. Деякі важливі приголосні:

**B** [biː] - як у слові "book" (книга)  
**C** [siː] - може звучати як [k] або [s]  
**D** [diː] - як у слові "dog" (собака)  
**F** [ef] - як у слові "fish" (риба)  
**G** [dʒiː] - може звучати як [g] або [dʒ]

## Поради для запам'ятовування

1. **Співайте алфавіт** - традиційна пісенька допомагає запам'ятати порядок літер
2. **Практикуйте щодня** - повторюйте літери вголос кожен день
3. **Використовуйте асоціації** - пов'язуйте літери зі знайомими словами
4. **Пишіть літери** - моторна пам'ять допомагає краще запам'ятати

## Вправи

### Вправа 1: Впізнавання літер
Подивіться на ці літери та назвіть їх вголос:
A, M, S, T, R, E, N, O, I, L

### Вправа 2: Порядок алфавіту
Продовжте послідовність:
A, B, C, D, ?, ?, G, H, ?, J

### Вправа 3: Голосні та приголосні
Розділіть ці літери на голосні та приголосні:
B, A, T, E, R, I, N, O, M, U

## Висновок

Вивчення англійського алфавіту - це перший крок до оволодіння англійською мовою. Регулярна практика та повторення допоможуть вам швидко запам'ятати всі літери та їх вимову. Пам'ятайте, що кожна літера може мати різні звуки в різних словах, тому важливо продовжувати вивчення та практику.`
    },
    test: {
      questions: [
        {
          id: 1,
          question: "Скільки літер в англійському алфавіті?",
          options: ["24", "25", "26", "27"],
          correct: 2
        },
        {
          id: 2,
          question: "Які літери є голосними в англійському алфавіті?",
          options: ["A, E, I, O, U", "A, E, I, O, Y", "A, E, I, U, W", "E, I, O, U, Y"],
          correct: 0
        },
        {
          id: 3,
          question: "Скільки приголосних літер в англійському алфавіті?",
          options: ["20", "21", "22", "23"],
          correct: 1
        },
        {
          id: 4,
          question: "Яка літера може звучати як [k] або [s]?",
          options: ["B", "C", "D", "G"],
          correct: 1
        },
        {
          id: 5,
          question: "Що допомагає краще запам'ятати літери згідно з уроком?",
          options: ["Тільки читання", "Моторна пам'ять (письмо)", "Тільки слухання", "Тільки перегляд"],
          correct: 1
        }
      ]
    }
  },
  {
    id: 2,
    title: "Привітання та знайомство",
    description: "Навчіться вітатися та представлятися англійською мовою",
    level: "Beginner",
    duration: "20 хв",
    category: "Розмова"
  },
  {
    id: 3,
    title: "Числа від 1 до 100",
    description: "Вивчіть числа та навчіться їх правильно вимовляти",
    level: "Beginner",
    duration: "25 хв",
    category: "Числа"
  },
  {
    id: 4,
    title: "Кольори та форми",
    description: "Вивчіть назви кольорів та основних геометричних форм",
    level: "Beginner",
    duration: "18 хв",
    category: "Словник"
  },
  {
    id: 5,
    title: "Сім'я та родичі",
    description: "Вивчіть слова для позначення членів сім'ї",
    level: "Beginner",
    duration: "22 хв",
    category: "Сім'я"
  },
  {
    id: 6,
    title: "Час та дні тижня",
    description: "Навчіться говорити час та назви днів тижня",
    level: "Intermediate",
    duration: "30 хв",
    category: "Час"
  },
  {
    id: 7,
    title: "Їжа та напої",
    description: "Вивчіть назви популярних страв та напоїв",
    level: "Beginner",
    duration: "28 хв",
    category: "Їжа"
  },
  {
    id: 8,
    title: "Професії та робота",
    description: "Вивчіть назви різних професій",
    level: "Intermediate",
    duration: "35 хв",
    category: "Робота"
  },
  {
    id: 9,
    title: "Подорожі та транспорт",
    description: "Корисні фрази для подорожей та види транспорту",
    level: "Intermediate",
    duration: "40 хв",
    category: "Подорожі"
  },
  {
    id: 10,
    title: "Погода та пори року",
    description: "Навчіться описувати погоду та пори року",
    level: "Beginner",
    duration: "20 хв",
    category: "Природа"
  },
  {
    id: 11,
    title: "Дім та меблі",
    description: "Вивчіть назви кімнат та предметів меблів",
    level: "Beginner",
    duration: "25 хв",
    category: "Дім"
  },
  {
    id: 12,
    title: "Одяг та аксесуари",
    description: "Вивчіть назви предметів одягу та аксесуарів",
    level: "Beginner",
    duration: "23 хв",
    category: "Одяг"
  },
  {
    id: 13,
    title: "Хобі та захоплення",
    description: "Навчіться розповідати про свої хобі та інтереси",
    level: "Intermediate",
    duration: "32 хв",
    category: "Хобі"
  },
  {
    id: 14,
    title: "Здоров'я та частини тіла",
    description: "Вивчіть назви частин тіла та медичну лексику",
    level: "Intermediate",
    duration: "38 хв",
    category: "Здоров'я"
  },
  {
    id: 15,
    title: "Покупки та магазини",
    description: "Корисні фрази для походів по магазинах",
    level: "Intermediate",
    duration: "35 хв",
    category: "Покупки"
  },
  {
    id: 16,
    title: "Емоції та почуття",
    description: "Навчіться виражати свої емоції та почуття",
    level: "Intermediate",
    duration: "30 хв",
    category: "Емоції"
  },
  {
    id: 17,
    title: "Бізнес англійська",
    description: "Основи ділового спілкування англійською мовою",
    level: "Advanced",
    duration: "45 хв",
    category: "Бізнес"
  },
  {
    id: 18,
    title: "Неправильні дієслова",
    description: "Вивчіть найважливіші неправильні дієслова",
    level: "Intermediate",
    duration: "40 хв",
    category: "Граматика"
  },
  {
    id: 19,
    title: "Умовні речення",
    description: "Опануйте конструкції умовних речень",
    level: "Advanced",
    duration: "50 хв",
    category: "Граматика"
  },
  {
    id: 20,
    title: "Ідіоми та фразеологізми",
    description: "Вивчіть популярні англійські ідіоми",
    level: "Advanced",
    duration: "42 хв",
    category: "Ідіоми"
  }
]

function getLevelColor(level) {
  switch (level) {
    case 'Beginner':
      return 'bg-green-100 text-green-800'
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800'
    case 'Advanced':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function LessonsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)
  const [activePage, setActivePage] = useState('grammar')
  const [currentView, setCurrentView] = useState('main') // 'main', 'collection-detail', або 'lesson'
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [wordsSearchTerm, setWordsSearchTerm] = useState('')
  const [showCreatePopup, setShowCreatePopup] = useState(false)
  const [newCollectionName, setNewCollectionName] = useState('')
  const [wordCollections, setWordCollections] = useState([
    {
      id: 1,
      name: "Неправильні дієслова",
      wordCount: 150,
      description: "Основні неправильні дієслова англійської мови",
      isIrregularVerbs: true,
      words: [
        { 
          infinitive: "go", 
          infinitiveTranscription: "/ɡəʊ/",
          pastSimple: "went", 
          pastSimpleTranscription: "/went/",
          pastParticiple: "gone", 
          pastParticipleTranscription: "/ɡɒn/",
          translation: "йти",
          learned: true,
          example: "I go to school every day. Yesterday I went to the cinema. I have gone there many times.",
          exampleTranslation: "Я ходжу до школи щодня. Вчора я ходив до кінотеатру. Я ходив туди багато разів."
        },
        { 
          infinitive: "come", 
          infinitiveTranscription: "/kʌm/",
          pastSimple: "came", 
          pastSimpleTranscription: "/keɪm/",
          pastParticiple: "come", 
          pastParticipleTranscription: "/kʌm/",
          translation: "приходити",
          learned: true,
          example: "Please come to my party. She came late yesterday. They have come from London.",
          exampleTranslation: "Будь ласка, приходь на мою вечірку. Вона прийшла пізно вчора. Вони приїхали з Лондона."
        },
        { 
          infinitive: "see", 
          infinitiveTranscription: "/siː/",
          pastSimple: "saw", 
          pastSimpleTranscription: "/sɔː/",
          pastParticiple: "seen", 
          pastParticipleTranscription: "/siːn/",
          translation: "бачити",
          example: "I can see the mountains. I saw a beautiful sunset yesterday. Have you seen this movie?",
          exampleTranslation: "Я можу бачити гори. Я бачив красивий захід сонця вчора. Ти бачив цей фільм?"
        },
        { 
          infinitive: "take", 
          infinitiveTranscription: "/teɪk/",
          pastSimple: "took", 
          pastSimpleTranscription: "/tʊk/",
          pastParticiple: "taken", 
          pastParticipleTranscription: "/ˈteɪkən/",
          translation: "брати",
          example: "Take your umbrella. I took the bus to work. The book has been taken from the library.",
          exampleTranslation: "Візьми свою парасольку. Я їздив на роботу автобусом. Книгу взяли з бібліотеки."
        },
        { 
          infinitive: "give", 
          infinitiveTranscription: "/ɡɪv/",
          pastSimple: "gave", 
          pastSimpleTranscription: "/ɡeɪv/",
          pastParticiple: "given", 
          pastParticipleTranscription: "/ˈɡɪvən/",
          translation: "давати",
          example: "Give me your hand. She gave me a present. I have given him my phone number.",
          exampleTranslation: "Дай мені свою руку. Вона дала мені подарунок. Я дав йому свій номер телефону."
        }
      ]
    },
    {
      id: 2,
      name: "Базова лексика",
      wordCount: 50,
      description: "Основні слова для початківців",
      words: [
        { 
          word: "hello", 
          transcription: "/həˈləʊ/", 
          translation: "привіт",
          example: "Hello! How are you today? I always say hello to my neighbors.",
          exampleTranslation: "Привіт! Як справи сьогодні? Я завжди вітаюся зі своїми сусідами."
        },
        { 
          word: "world", 
          transcription: "/wɜːld/", 
          translation: "світ",
          example: "The world is beautiful. I want to travel around the world. This is the best coffee in the world.",
          exampleTranslation: "Світ прекрасний. Я хочу подорожувати по всьому світу. Це найкраща кава у світі."
        }
      ]
    }
  ])
  const [readingLevel, setReadingLevel] = useState('B1')
  const [readingLength, setReadingLength] = useState('середні')
  const [readingTopic, setReadingTopic] = useState('')
  const [createdTexts, setCreatedTexts] = useState([
    {
      id: 1,
      text: "Learning English is an exciting journey that opens doors to new opportunities. Every day brings new words, phrases, and grammar rules to discover. The key to success is consistent practice and patience with yourself. Start with simple conversations, read books at your level, and don't be afraid to make mistakes. Remember, even native speakers continue learning throughout their lives. With dedication and the right approach, you can achieve fluency in English.",
      translation: "Вивчення англійської мови - це захоплююча подорож, яка відкриває двері до нових можливостей. Кожен день приносить нові слова, фрази та граматичні правила для вивчення. Ключ до успіху - це постійна практика та терпіння до себе. Почніть з простих розмов, читайте книги відповідно до вашого рівня і не бійтеся робити помилки. Пам'ятайте, навіть носії мови продовжують вчитися протягом усього життя. З відданістю та правильним підходом ви можете досягти вільного володіння англійською мовою.",
      level: "B1",
      topic: "Learning English",
      length: "середні",
      createdAt: new Date().toISOString()
    }
  ])
  const [selectedCollection, setSelectedCollection] = useState(null)
  const [collectionWords, setCollectionWords] = useState([])
  const [wordStatuses, setWordStatuses] = useState({}) // Статуси слів: 'not-learned', 'learned', 'repeat'
  const [viewMode, setViewMode] = useState('table') // 'table' або 'cards'
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isAddingWord, setIsAddingWord] = useState(false)
  const [newWord, setNewWord] = useState({ word: '', transcription: '', translation: '' })
  const [tooltip, setTooltip] = useState({
    visible: false,
    word: '',
    translation: '',
    x: 0,
    y: 0
  })
  const [showLearnPopup, setShowLearnPopup] = useState(false)
  const [wordToLearn, setWordToLearn] = useState({ word: '', translation: '' })
  const [selectedCollectionForWord, setSelectedCollectionForWord] = useState('')
  const [newCollectionForWord, setNewCollectionForWord] = useState('')
  const [isCreatingNewCollection, setIsCreatingNewCollection] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [hoveredWordIndex, setHoveredWordIndex] = useState(-1)
  const [wordTooltip, setWordTooltip] = useState({
    visible: false,
    word: '',
    example: '',
    translation: '',
    x: 0,
    y: 0,
    loading: false
  })
  
  // Стани для чату
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [chatInput, setChatInput] = useState('')
  const [isChatLoading, setIsChatLoading] = useState(false)
  
  // Стани для анімації друкування тексту
  const [typingTexts, setTypingTexts] = useState(new Map()) // Map для відстеження анімації кожного тексту
  const [typingIntervals, setTypingIntervals] = useState(new Map()) // Map для зберігання інтервалів
  
  // Стан для відстеження пройдених уроків
  const [completedLessons, setCompletedLessons] = useState(new Set()) // Изначально нет завершенных уроков
  
  // Стани для тесту
  const [showTest, setShowTest] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [testCompleted, setTestCompleted] = useState(false)
  const [testScore, setTestScore] = useState(0)

  // Функция для озвучки слова
  const speakWord = (word) => {
    if ('speechSynthesis' in window) {
      // Останавливаем предыдущую озвучку
      window.speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'en-US'
      utterance.rate = 0.8
      utterance.pitch = 1
      
      window.speechSynthesis.speak(utterance)
    } else {
      alert('Ваш браузер не поддерживает озвучку')
    }
  }
  
  // Функції для роботи з тестом
  const startTest = () => {
    setShowTest(true)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setTestCompleted(false)
    setTestScore(0)
  }
  
  const selectAnswer = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }))
  }
  
  const nextQuestion = () => {
    if (currentQuestion < selectedLesson?.test?.questions?.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      finishTest()
    }
  }
  
  const finishTest = () => {
    const questions = selectedLesson?.test?.questions || []
    let score = 0
    
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correct) {
        score++
      }
    })
    
    setTestScore(score)
    setTestCompleted(true)
  }
  
  const resetTest = () => {
    setShowTest(false)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setTestCompleted(false)
    setTestScore(0)
  }

  // Функція для анімації друкування тексту
  const startTypingAnimation = (textId, content) => {
    const words = content.split(' ')
    let currentWordIndex = 0
    
    // Ініціалізуємо порожній текст
    setTypingTexts(prev => new Map(prev.set(textId, '')))
    
    const interval = setInterval(() => {
      if (currentWordIndex < words.length) {
        const currentText = words.slice(0, currentWordIndex + 1).join(' ')
        setTypingTexts(prev => new Map(prev.set(textId, currentText)))
        currentWordIndex++
      } else {
        // Анімація завершена
        clearInterval(interval)
        setTypingIntervals(prev => {
          const newMap = new Map(prev)
          newMap.delete(textId)
          return newMap
        })
      }
    }, 100) // Швидкість друкування - 100мс на слово
    
    // Зберігаємо інтервал для можливості його очищення
    setTypingIntervals(prev => new Map(prev.set(textId, interval)))
  }

  // Очищення інтервалів при розмонтуванні компонента
  useEffect(() => {
    return () => {
      // Очищаємо всі активні інтервали
      typingIntervals.forEach(interval => clearInterval(interval))
    }
  }, [])

  // Функция для генерации текста через API
  const generateText = async () => {
    setIsGenerating(true)
    
    try {
      const topicToUse = readingTopic.trim() || 'Learning English'
      
      // Створюємо карточку одразу з порожнім контентом
      const textId = Date.now().toString()
      const newText = {
        id: textId,
        level: readingLevel,
        length: readingLength,
        topic: topicToUse,
        content: '',
        createdAt: new Date().toLocaleString(),
        isGenerating: true
      }
      
      setCreatedTexts(prev => [newText, ...prev])
      setReadingTopic('')
      
      // Викликаємо API для генерації тексту
      const response = await fetch('/api/generate-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: topicToUse,
          level: readingLevel,
          length: readingLength
        }),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Помилка при генерації тексту')
      }
      
      const data = await response.json()
      const generatedText = data.content
      
      // Отримуємо переклад тексту
      const translationResponse = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          text: generatedText,
          isPhrase: true 
        }),
      })
      
      let translation = 'Переклад недоступний'
      if (translationResponse.ok) {
        const translationData = await translationResponse.json()
        translation = translationData.translation
      }
      
      // Оновлюємо карточку з згенерованими даними
      const updatedText = {
        id: textId,
        text: generatedText,
        translation: translation,
        level: readingLevel,
        length: readingLength,
        topic: topicToUse,
        createdAt: new Date().toLocaleString(),
        isGenerating: false
      }
      
      setCreatedTexts(prev => prev.map(text => 
        text.id === textId ? updatedText : text
      ))
      
      // Запускаємо анімацію друкування
      startTypingAnimation(textId, generatedText)
      
    } catch (error) {
      console.error('Помилка генерації тексту:', error)
      const errorMessage = error.message.includes('квота') || error.message.includes('quota') 
        ? error.message 
        : 'Помилка при генерації тексту. Спробуйте ще раз.'
      alert(errorMessage)
      // Видаляємо карточку у випадку помилки
      setCreatedTexts(prev => prev.filter(text => !text.isGenerating))
    } finally {
      setIsGenerating(false)
    }
  }

  // Функция для получения перевода слова через API
  const getTranslation = async (word) => {
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          text: word,
          isPhrase: false 
        }),
      })
      
      if (!response.ok) {
        throw new Error('Помилка перекладу')
      }
      
      const data = await response.json()
      return data.translation || 'переклад не знайдено'
    } catch (error) {
      console.error('Помилка отримання перекладу:', error)
      return 'помилка перекладу'
    }
  }

  // Функция для получения перевода фразы или предложения через API
  const getPhraseTranslation = async (phrase) => {
    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          text: phrase,
          isPhrase: true 
        }),
      })
      
      if (!response.ok) {
        throw new Error('Помилка перекладу фрази')
      }
      
      const data = await response.json()
      return data.translation || 'переклад фрази не знайдено'
    } catch (error) {
      console.error('Помилка отримання перекладу фрази:', error)
      return 'помилка перекладу фрази'
    }
  }

  // Функция для обработки выделения текста
  const handleTextSelection = (event) => {
    setTimeout(async () => {
      const selection = window.getSelection()
      const selectedText = selection.toString().trim()
      
      if (selectedText) {
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        
        // Показываем тултип с индикатором загрузки
        setTooltip({
          visible: true,
          word: selectedText,
          translation: 'Переводится...',
          x: rect.left + rect.width / 2,
          y: rect.top - 10
        })
        
        // Определяем, одно слово или фраза
        const wordCount = selectedText.split(' ').length
        let translation
        
        try {
          if (wordCount === 1) {
            // Одно слово - используем функцию для слов
            const cleanWord = selectedText.replace(/[.,!?;:"'()\[\]{}]/g, '')
            translation = await getTranslation(cleanWord)
          } else {
            // Несколько слов - используем функцию для фраз
            translation = await getPhraseTranslation(selectedText)
          }
          
          // Обновляем тултип с переводом
          setTooltip({
            visible: true,
            word: selectedText,
            translation: translation,
            x: rect.left + rect.width / 2,
            y: rect.top - 10
          })
        } catch (error) {
          console.error('Ошибка при получении перевода:', error)
          setTooltip({
            visible: true,
            word: selectedText,
            translation: 'Ошибка перевода',
            x: rect.left + rect.width / 2,
            y: rect.top - 10
          })
        }
      } else {
        setTooltip(prev => ({ ...prev, visible: false }))
      }
    }, 100)
  }

  // Функция для скрытия тултипа
  const hideTooltip = () => {
    setTooltip(prev => ({ ...prev, visible: false }))
  }

  // Функция для генерации примера предложения с переводом через API
  const generateExampleSentence = async (word) => {
    try {
      const response = await fetch('/api/generate-example', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word }),
      })
      
      if (!response.ok) {
        throw new Error('Помилка генерації прикладу')
      }
      
      const data = await response.json()
      return {
        example: data.example || `This is an example sentence with the word "${word}".`,
        translation: data.translation || `Це приклад речення зі словом "${word}".`
      }
    } catch (error) {
      console.error('Помилка генерації прикладу:', error)
      return {
        example: `This is an example sentence with the word "${word}".`,
        translation: `Це приклад речення зі словом "${word}".`
      }
    }
  }

  // Функция для обработки клика по слову
  const handleWordClick = async (event, word) => {
    event.preventDefault()
    const rect = event.target.getBoundingClientRect()
    
    // Показываем тултип с индикатором загрузки
    setWordTooltip({
      visible: true,
      word: word,
      example: '',
      translation: '',
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      loading: true
    })
    
    // Генерируем пример предложения с переводом
    const result = await generateExampleSentence(word)
    
    // Обновляем тултип с примером и переводом
    setWordTooltip({
      visible: true,
      word: word,
      example: result.example,
      translation: result.translation,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      loading: false
    })
  }

  // Функция для скрытия тултипа слова
  const hideWordTooltip = () => {
    setWordTooltip(prev => ({ ...prev, visible: false }))
  }

  // Функція для відправки повідомлення в чат
  const sendChatMessage = async () => {
    if (!chatInput.trim() || isChatLoading) return
    
    const userMessage = { role: 'user', content: chatInput }
    setChatMessages(prev => [...prev, userMessage])
    setChatInput('')
    setIsChatLoading(true)
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: chatInput,
          lessonTitle: selectedLesson?.title,
          lessonContent: selectedLesson?.content
        }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        const aiMessage = { role: 'assistant', content: data.response }
        setChatMessages(prev => [...prev, aiMessage])
      } else {
        let errorContent = 'Вибачте, сталася помилка. Спробуйте ще раз.'
        if (response.status === 429) {
          errorContent = 'Превышена дневная квота API. Попробуйте завтра или обновите план.'
        } else if (response.status === 503) {
          errorContent = 'Сервіс тимчасово перевантажений. Спробуйте через кілька хвилин.'
        } else if (response.status === 401) {
          errorContent = 'Помилка автентифікації API. Перевірте налаштування.'
        }
        const errorMessage = { role: 'assistant', content: errorContent }
        setChatMessages(prev => [...prev, errorMessage])
      }
    } catch (error) {
      console.error('Помилка чату:', error)
      const errorMessage = { role: 'assistant', content: 'Вибачте, сталася помилка. Спробуйте ще раз.' }
      setChatMessages(prev => [...prev, errorMessage])
    } finally {
      setIsChatLoading(false)
    }
  }

  const filteredLessons = lessons.filter(lesson =>
    (lesson.title && lesson.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (lesson.description && lesson.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (lesson.category && lesson.category.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div 
      className="min-h-screen bg-[#F8F8FA] flex"
      onClick={(e) => {
        // Закрываем тултип при клике вне его
        if (wordTooltip.visible && !e.target.closest('.word-tooltip')) {
          hideWordTooltip()
        }
      }}
    >
      {/* Sidebar */}
      <div className={`${isMenuCollapsed ? 'w-16' : 'w-48'} transition-all duration-300 bg-[#F8F8FA]`}>
        <div className="p-4">
          <div className="space-y-2">
            {/* Toggle Button */}
            <div className={`flex items-center ${isMenuCollapsed ? 'justify-center' : 'space-x-3'} p-3 rounded-lg hover:bg-white hover:shadow-sm cursor-pointer transition-all`} onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}>
              <span className={`text-lg transform transition-transform ${isMenuCollapsed ? 'rotate-180' : ''}`}>
                «
              </span>
              {!isMenuCollapsed && <span className="font-medium">Згорнути</span>}
            </div>
            <div 
              className={`flex items-center ${isMenuCollapsed ? 'justify-center' : 'space-x-3'} p-3 rounded-lg cursor-pointer transition-all ${
                activePage === 'home' 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-white hover:shadow-sm'
              }`}
              onClick={() => {
                setActivePage('home')
                setCurrentView('main')
              }}
            >
              <span className="text-lg">🏠</span>
              {!isMenuCollapsed && (
                <span className={`font-medium ${
                  activePage === 'home' ? 'text-[#2757FF]' : ''
                }`}>Головна</span>
              )}
            </div>
            <div 
              className={`flex items-center ${isMenuCollapsed ? 'justify-center' : 'space-x-3'} p-3 rounded-lg cursor-pointer transition-all ${
                activePage === 'grammar' 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-white hover:shadow-sm'
              }`}
              onClick={() => {
                setActivePage('grammar')
                setCurrentView('main')
              }}
            >
              <span className="text-lg">📝</span>
              {!isMenuCollapsed && (
                <span className={`font-medium ${
                  activePage === 'grammar' ? 'text-[#2757FF]' : ''
                }`}>Граматика</span>
              )}
            </div>
            <div 
              className={`flex items-center ${isMenuCollapsed ? 'justify-center' : 'space-x-3'} p-3 rounded-lg cursor-pointer transition-all ${
                activePage === 'words' 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-white hover:shadow-sm'
              }`}
              onClick={() => {
                setActivePage('words')
                setCurrentView('main')
              }}
            >
              <span className="text-lg">📚</span>
              {!isMenuCollapsed && (
                <span className={`font-medium ${
                  activePage === 'words' ? 'text-[#2757FF]' : ''
                }`}>Слова</span>
              )}
            </div>
            <div 
              className={`flex items-center ${isMenuCollapsed ? 'justify-center' : 'space-x-3'} p-3 rounded-lg cursor-pointer transition-all ${
                activePage === 'reading' 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-white hover:shadow-sm'
              }`}
              onClick={() => {
                setActivePage('reading')
                setCurrentView('main')
              }}
            >
              <span className="text-lg">📖</span>
              {!isMenuCollapsed && (
                <span className={`font-medium ${
                  activePage === 'reading' ? 'text-[#2757FF]' : ''
                }`}>Читання</span>
              )}
            </div>
            <div 
              className={`flex items-center ${isMenuCollapsed ? 'justify-center' : 'space-x-3'} p-3 rounded-lg cursor-pointer transition-all ${
                activePage === 'speaking' 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-white hover:shadow-sm'
              }`}
              onClick={() => {
                setActivePage('speaking')
                setCurrentView('main')
              }}
            >
              <span className="text-lg">🎤</span>
              {!isMenuCollapsed && (
                <span className={`font-medium ${
                  activePage === 'speaking' ? 'text-[#2757FF]' : ''
                }`}>Мовлення</span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {activePage === 'home' && (
            <BlurFade key="home" delay={0.1}>
              <div>
                {/* Welcome Card */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 mb-8 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      {/* Avatar */}
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-3xl">👨‍🎓</span>
                      </div>
                      
                      {/* Welcome Text */}
                      <div>
                        <h1 className="text-3xl font-bold mb-2">Ласкаво просимо, Edmon!</h1>
                        <p className="text-blue-100 text-lg">Продовжуйте вивчати англійську мову</p>
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold">{completedLessons.size}</div>
                        <div className="text-blue-100 text-sm">Уроків пройдено</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">{wordCollections.reduce((total, collection) => total + (collection.words ? collection.words.filter(word => word.learned).length : 0), 0)}</div>
                        <div className="text-blue-100 text-sm">Слів вивчено</div>
                      </div>
                    </div>
                  </div>
                </div>
                

                
                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                  <div 
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
                    onClick={() => setActivePage('grammar')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <span className="text-2xl">📝</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Вивчати граматику</h3>
                        <p className="text-gray-600 text-sm">Покращуйте знання граматики</p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
                    onClick={() => setActivePage('words')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 rounded-lg p-3">
                        <span className="text-2xl">📚</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Вивчати слова</h3>
                        <p className="text-gray-600 text-sm">Розширюйте словниковий запас</p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
                    onClick={() => setActivePage('reading')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-100 rounded-lg p-3">
                        <span className="text-2xl">📖</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Читання</h3>
                        <p className="text-gray-600 text-sm">Практикуйте читання текстів</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Останні уроки граматики</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {lessons.slice(0, 3).map((lesson, index) => {
                       const isCompleted = completedLessons.has(lesson.id)
                       return (
                         <div 
                           key={lesson.id}
                           className={`border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-all cursor-pointer relative ${
                             isCompleted ? 'ring-2 ring-green-200 bg-green-50' : ''
                           }`}
                         >
                           <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-bl-lg rounded-tr-lg">
                              {index + 1}
                            </div>
                           
                            <div 
                              className="ml-0"
                              onClick={() => {
                                setActivePage('grammar')
                                setSelectedLesson(lesson)
                                setCurrentView('lesson')
                              }}
                            >
                             <div className="flex items-center justify-start mb-2">
                               {/* Интерактивный круг для отметки урока */}
                               <div 
                                 className={`w-5 h-5 rounded-full cursor-pointer transition-all z-10 mr-2 flex items-center justify-center ${
                                   isCompleted 
                                     ? 'bg-green-500 text-white' 
                                     : 'bg-gray-200 hover:bg-green-400'
                                 }`}
                                 onClick={(e) => {
                                   e.stopPropagation()
                                   const newCompleted = new Set(completedLessons)
                                   if (isCompleted) {
                                     newCompleted.delete(lesson.id)
                                   } else {
                                     newCompleted.add(lesson.id)
                                   }
                                   setCompletedLessons(newCompleted)
                                 }}
                               >
                                 <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                 </svg>
                               </div>
                               
                               <span className={`px-2 py-1 rounded text-xs font-medium ${
                                 lesson.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                                 lesson.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                 'bg-red-100 text-red-800'
                               }`}>
                                 {lesson.level}
                               </span>
                             </div>
                             <h3 className={`font-medium mb-1 ${
                               isCompleted ? 'text-green-800' : 'text-gray-900'
                             }`}>{lesson.title}</h3>
                             <p className="text-gray-600 text-sm">{lesson.description}</p>
                           </div>
                         </div>
                       )
                     })}
                  </div>
                </div>
                
                {/* Recent Word Collections */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Останні колекції слів</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {wordCollections.slice(0, 3).map((collection) => (
                      <div 
                        key={collection.id}
                        className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => {
                          setActivePage('words')
                          setSelectedCollection(collection)
                          setCurrentView('collection-detail')
                          setCollectionWords(collection.words || [])
                        }}
                      >
                        <div className="flex justify-start gap-2 mb-2">
                          <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            {collection.words ? collection.words.length : 0} слів
                          </span>
                          <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                            {collection.words ? collection.words.filter(word => word.learned).length : 0} вивчено
                          </span>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-1">{collection.name}</h3>
                        <p className="text-gray-600 text-sm">{collection.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFade>
          )}
          
          {activePage === 'grammar' && currentView === 'main' && (
            <BlurFade key="grammar" delay={0.1}>
              <div>
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">Граматика</h1>
                    <div className="relative w-80">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Пошук уроків..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                      />
                    </div>
                  </div>
                  <p className="text-lg text-gray-600">Оберіть урок граматики для вивчення</p>
                </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filteredLessons.map((lesson, index) => {
                  const isCompleted = completedLessons.has(lesson.id)
                  return (
                    <div
                      key={lesson.id}
                      className={`bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer relative ${
                        isCompleted ? 'ring-2 ring-green-200 bg-green-50' : ''
                      }`}
                    >
                      <div className={`absolute top-0 right-0 text-xs font-medium px-2 py-1 rounded-bl-lg rounded-tr-lg ${
                        isCompleted ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                          {index + 1}
                        </div>
                      
                       <div 
                         className="ml-0"
                         onClick={() => {
                           setSelectedLesson(lesson)
                           setCurrentView('lesson')
                         }}
                       >
                        <div className="flex items-center justify-start mb-2">
                          {/* Интерактивный круг для отметки урока */}
                          <div 
                            className={`w-5 h-5 rounded-full cursor-pointer transition-all z-10 mr-2 flex items-center justify-center ${
                              isCompleted 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-200 hover:bg-green-400'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation()
                              const newCompleted = new Set(completedLessons)
                              if (isCompleted) {
                                newCompleted.delete(lesson.id)
                              } else {
                                newCompleted.add(lesson.id)
                              }
                              setCompletedLessons(newCompleted)
                            }}
                          >
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            lesson.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                            lesson.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {lesson.level}
                          </span>
                        </div>
                        <h3 className={`text-lg font-semibold mb-3 ${
                          isCompleted ? 'text-green-800' : 'text-gray-900'
                        }`}>{lesson.title}</h3>
                        <p className="text-gray-600 text-sm">{lesson.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

                {filteredLessons.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">Уроки не знайдено</p>
                  </div>
                )}
              </div>
            </BlurFade>
          )}
          
          {activePage === 'words' && currentView === 'main' && (
            <BlurFade key="words" delay={0.1}>
              <div>
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">Вивчення слів</h1>
                  <div className="flex items-center space-x-4">
                    <div className="relative w-80">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="пошук колекцій..."
                        value={wordsSearchTerm}
                        onChange={(e) => setWordsSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                      />
                    </div>
                    <button
                      onClick={() => setShowCreatePopup(true)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all font-medium transform hover:scale-105"
                    >
                      Створити
                    </button>
                  </div>
                </div>
                <p className="text-lg text-gray-600">Розширюйте свій словниковий запас</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {wordCollections
                  .filter(collection => 
                    collection.name.toLowerCase().includes(wordsSearchTerm.toLowerCase())
                  )
                  .map((collection) => (
                  <div
                    key={collection.id}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      setSelectedCollection(collection)
                      setCurrentView('collection-detail')
                      // Загружаем слова из коллекции
                      setCollectionWords(collection.words || [])
                    }}
                  >
                    <div className="flex justify-start gap-2 mb-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        {collection.words ? collection.words.length : 0} слів
                      </span>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        {collection.words ? collection.words.filter(word => word.learned).length : 0} вивчено
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{collection.name}</h3>
                    <p className="text-gray-600 text-sm">{collection.description}</p>
                  </div>
                ))}
              </div>

              {wordCollections.filter(collection => 
                collection.name.toLowerCase().includes(wordsSearchTerm.toLowerCase())
              ).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Колекції не знайдено</p>
                </div>
              )}

            </div>
          </BlurFade>
          )}
          
          {/* Create Collection Popup */}
          {showCreatePopup && (
            <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Створити колекцію</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Назва колекції
                  </label>
                  <input
                    type="text"
                    value={newCollectionName}
                    onChange={(e) => setNewCollectionName(e.target.value)}
                    placeholder="Введіть назву..."
                    className="w-full px-3 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      if (newCollectionName.trim()) {
                        const newCollection = {
                          id: Date.now(),
                          name: newCollectionName.trim(),
                          wordCount: 0,
                          description: "Користувацька колекція слів",
                          words: []
                        }
                        setWordCollections([...wordCollections, newCollection])
                        setNewCollectionName('')
                        setShowCreatePopup(false)
                      }
                    }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all font-medium transform hover:scale-105"
                  >
                    Створити
                  </button>
                  <button
                    onClick={() => {
                      setShowCreatePopup(false)
                      setNewCollectionName('')
                    }}
                    className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                  >
                    Скасувати
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Word Collection Detail Page */}
          {activePage === 'words' && currentView === 'collection-detail' && selectedCollection && (
          <BlurFade key="words-collection-detail" delay={0.1}>
            <div className="relative">
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <button
                    onClick={() => {
                      setSelectedCollection(null)
                      setCollectionWords([])
                      setCurrentView('main')
                      setCurrentCardIndex(0)
                    }}
                    className="mr-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h1 className="text-3xl font-bold text-gray-900">{selectedCollection.name}</h1>
                </div>
              </div>
              
              {/* View Mode Tabs and Add Button */}
              <div className="flex justify-between items-center mb-6">
                <div className="bg-gray-100 rounded-lg p-1 flex">
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'table'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Таблиця
                  </button>
                  <button
                    onClick={() => {
                      setViewMode('cards')
                      setCurrentCardIndex(0)
                    }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'cards'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Картки
                  </button>
                </div>
                
                {/* Add Word Button */}
                {viewMode === 'table' && !selectedCollection?.isIrregularVerbs && (
                  <button
                    onClick={() => setIsAddingWord(true)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all font-medium transform hover:scale-105"
                  >
                    Добавить
                  </button>
                )}
              </div>
              
              {/* Words Table */}
              {viewMode === 'table' && (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full table-fixed">
                    <thead className="bg-gray-50">
                      <tr>
                        {selectedCollection?.isIrregularVerbs ? (
                          <>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/5">Інфінітив</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/5">Past Simple</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/5">Past Participle</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/5">Переклад</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/5">Статус</th>
                          </>
                        ) : (
                          <>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-2/5">Слово</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-2/5">Переклад</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/5">Статус</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Add Word Row */}
                      {isAddingWord && !selectedCollection?.isIrregularVerbs && (
                        <tr className="bg-blue-50">
                          {selectedCollection?.isIrregularVerbs ? (
                            <>
                              <td className="px-6 py-4 w-1/5">
                                <div className="flex flex-col gap-1">
                                  <input
                                    type="text"
                                    value={newWord.infinitive || ''}
                                    onChange={(e) => setNewWord(prev => ({ ...prev, infinitive: e.target.value }))}
                                    placeholder="Інфінітив..."
                                    className="w-32 px-2 py-1 bg-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                                    autoFocus
                                  />
                                  <input
                                    type="text"
                                    value={newWord.infinitiveTranscription || ''}
                                    onChange={(e) => setNewWord(prev => ({ ...prev, infinitiveTranscription: e.target.value }))}
                                    placeholder="/транскрипція/"
                                    className="w-32 px-2 py-1 bg-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs font-mono text-gray-600"
                                  />
                                </div>
                              </td>
                              <td className="px-6 py-4 w-1/5">
                                <div className="flex flex-col gap-1">
                                  <input
                                    type="text"
                                    value={newWord.pastSimple || ''}
                                    onChange={(e) => setNewWord(prev => ({ ...prev, pastSimple: e.target.value }))}
                                    placeholder="Past Simple..."
                                    className="w-32 px-2 py-1 bg-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                                  />
                                  <input
                                    type="text"
                                    value={newWord.pastSimpleTranscription || ''}
                                    onChange={(e) => setNewWord(prev => ({ ...prev, pastSimpleTranscription: e.target.value }))}
                                    placeholder="/транскрипція/"
                                    className="w-32 px-2 py-1 bg-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs font-mono text-gray-600"
                                  />
                                </div>
                              </td>
                              <td className="px-6 py-4 w-1/5">
                                <div className="flex flex-col gap-1">
                                  <input
                                    type="text"
                                    value={newWord.pastParticiple || ''}
                                    onChange={(e) => setNewWord(prev => ({ ...prev, pastParticiple: e.target.value }))}
                                    placeholder="Past Participle..."
                                    className="w-32 px-2 py-1 bg-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                                  />
                                  <input
                                    type="text"
                                    value={newWord.pastParticipleTranscription || ''}
                                    onChange={(e) => setNewWord(prev => ({ ...prev, pastParticipleTranscription: e.target.value }))}
                                    placeholder="/транскрипція/"
                                    className="w-32 px-2 py-1 bg-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs font-mono text-gray-600"
                                  />
                                </div>
                              </td>
                              <td className="px-6 py-4 w-1/5">
                                <input
                                  type="text"
                                  value={newWord.translation || ''}
                                  onChange={(e) => setNewWord(prev => ({ ...prev, translation: e.target.value }))}
                                  placeholder="Переклад..."
                                  className="w-24 px-2 py-1 bg-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                                />
                              </td>
                              <td className="px-6 py-4 w-1/5">
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => {
                                      if (newWord.infinitive?.trim() && newWord.pastSimple?.trim() && newWord.pastParticiple?.trim() && newWord.translation?.trim()) {
                                        const newWordEntry = {
                                          id: Date.now(),
                                          infinitive: newWord.infinitive.trim(),
                                          infinitiveTranscription: newWord.infinitiveTranscription?.trim() || '',
                                          pastSimple: newWord.pastSimple.trim(),
                                          pastSimpleTranscription: newWord.pastSimpleTranscription?.trim() || '',
                                          pastParticiple: newWord.pastParticiple.trim(),
                                          pastParticipleTranscription: newWord.pastParticipleTranscription?.trim() || '',
                                          translation: newWord.translation.trim()
                                        }
                                        setCollectionWords(prev => [newWordEntry, ...prev])
                                        setNewWord({ infinitive: '', infinitiveTranscription: '', pastSimple: '', pastSimpleTranscription: '', pastParticiple: '', pastParticipleTranscription: '', translation: '' })
                                        setIsAddingWord(false)
                                      }
                                    }}
                                    className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
                                  >
                                    ✓
                                  </button>
                                  <button
                                    onClick={() => {
                                      setNewWord({ infinitive: '', infinitiveTranscription: '', pastSimple: '', pastSimpleTranscription: '', pastParticiple: '', pastParticipleTranscription: '', translation: '' })
                                      setIsAddingWord(false)
                                    }}
                                    className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
                                  >
                                    ✕
                                  </button>
                                </div>
                              </td>
                            </>
                          ) : (
                            <>
                              <td className="px-6 py-4 w-2/5">
                                <div className="flex flex-col gap-1">
                                  <input
                                    type="text"
                                    value={newWord.word || ''}
                                    onChange={(e) => setNewWord(prev => ({ ...prev, word: e.target.value }))}
                                    placeholder="Слово..."
                                    className="w-32 px-2 py-1 bg-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                                    autoFocus
                                  />
                                  <input
                                    type="text"
                                    value={newWord.transcription || ''}
                                    onChange={(e) => setNewWord(prev => ({ ...prev, transcription: e.target.value }))}
                                    placeholder="/транскрипція/"
                                    className="w-32 px-2 py-1 bg-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs font-mono text-gray-600"
                                  />
                                </div>
                              </td>
                              <td className="px-6 py-4 w-2/5">
                                <input
                                  type="text"
                                  value={newWord.translation || ''}
                                  onChange={(e) => setNewWord(prev => ({ ...prev, translation: e.target.value }))}
                                  placeholder="Перевод..."
                                  className="w-24 px-2 py-1 bg-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                                />
                              </td>
                              <td className="px-6 py-4 w-1/5">
                                <div className="flex space-x-2">
                                  <button
                                    onClick={() => {
                                      if (newWord.word?.trim() && newWord.translation?.trim()) {
                                        const newWordEntry = {
                                          id: Date.now(),
                                          word: newWord.word.trim(),
                                          transcription: newWord.transcription?.trim() || '',
                                          translation: newWord.translation.trim()
                                        }
                                        setCollectionWords(prev => [newWordEntry, ...prev])
                                        setNewWord({ word: '', transcription: '', translation: '' })
                                        setIsAddingWord(false)
                                      }
                                    }}
                                    className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
                                  >
                                    ✓
                                  </button>
                                  <button
                                    onClick={() => {
                                      setNewWord({ word: '', transcription: '', translation: '' })
                                      setIsAddingWord(false)
                                    }}
                                    className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-colors"
                                  >
                                    ✕
                                  </button>
                                </div>
                              </td>
                            </>
                          )}
                        </tr>
                      )}
                      {collectionWords.map((word, index) => {
                        const wordKey = `${selectedCollection.id}-${index}`
                        const status = wordStatuses[wordKey] || 'not-learned'
                        const isLearned = status === 'learned'
                        const isRepeat = status === 'repeat'
                        
                        let textColor = 'text-gray-900'
                        let transcriptionColor = 'text-gray-600'
                        let translationColor = 'text-gray-700'
                        
                        if (isLearned) {
                          textColor = 'text-green-600'
                          transcriptionColor = 'text-green-500'
                          translationColor = 'text-green-600'
                        } else if (isRepeat) {
                          textColor = 'text-orange-600'
                          transcriptionColor = 'text-orange-500'
                          translationColor = 'text-orange-600'
                        }
                        
                        return (
                          <tr key={`${word.infinitive || word.word}-${index}`} className="hover:bg-gray-50 transition-colors">
                            {selectedCollection?.isIrregularVerbs ? (
                              <>
                                <td className={`px-6 py-4 text-sm font-medium ${textColor} w-1/5`}>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          speakWord(word.infinitive)
                                        }}
                                        className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                        title="Озвучить інфінітив"
                                      >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                        </svg>
                                      </button>
                                      <span 
                                        className="font-medium cursor-pointer hover:text-blue-600 hover:underline transition-colors"
                                        onClick={(e) => handleWordClick(e, word.infinitive)}
                                        title="Натисніть для прикладу використання"
                                      >
                                        {word.infinitive}
                                      </span>
                                    </div>
                                    {word.infinitiveTranscription && (
                                      <span className={`text-xs font-mono ${transcriptionColor}`}>{word.infinitiveTranscription}</span>
                                    )}
                                  </div>
                                </td>
                                <td className={`px-6 py-4 text-sm font-medium ${textColor} w-1/5`}>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          speakWord(word.pastSimple)
                                        }}
                                        className="p-1 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                                        title="Озвучить Past Simple"
                                      >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                        </svg>
                                      </button>
                                      <span 
                                        className="font-medium cursor-pointer hover:text-blue-600 hover:underline transition-colors"
                                        onClick={(e) => handleWordClick(e, word.pastSimple)}
                                        title="Натисніть для прикладу використання"
                                      >
                                        {word.pastSimple}
                                      </span>
                                    </div>
                                    {word.pastSimpleTranscription && (
                                      <span className={`text-xs font-mono ${transcriptionColor}`}>{word.pastSimpleTranscription}</span>
                                    )}
                                  </div>
                                </td>
                                <td className={`px-6 py-4 text-sm font-medium ${textColor} w-1/5`}>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          speakWord(word.pastParticiple)
                                        }}
                                        className="p-1 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors"
                                        title="Озвучить Past Participle"
                                      >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                        </svg>
                                      </button>
                                      <span 
                                        className="font-medium cursor-pointer hover:text-blue-600 hover:underline transition-colors"
                                        onClick={(e) => handleWordClick(e, word.pastParticiple)}
                                        title="Натисніть для прикладу використання"
                                      >
                                        {word.pastParticiple}
                                      </span>
                                    </div>
                                    {word.pastParticipleTranscription && (
                                      <span className={`text-xs font-mono ${transcriptionColor}`}>{word.pastParticipleTranscription}</span>
                                    )}
                                  </div>
                                </td>
                                <td className={`px-6 py-4 text-sm ${translationColor} w-1/5`}>{word.translation}</td>
                                <td className="px-6 py-4 text-sm w-1/5">
                                  <div className="flex items-center space-x-2">
                                    <select
                                      value={status}
                                      onChange={(e) => {
                                        setWordStatuses(prev => ({
                                          ...prev,
                                          [wordKey]: e.target.value
                                        }))
                                      }}
                                      className="px-3 py-1 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    >
                                      <option value="not-learned">Не вивчено</option>
                                      <option value="learned">Вивчено</option>
                                      <option value="repeat">Повторити</option>
                                    </select>
                                    {!selectedCollection?.isIrregularVerbs && (
                                      <button
                                        onClick={() => {
                                          setCollectionWords(prev => prev.filter((_, i) => i !== index))
                                          // Удаляем статус слова
                                          setWordStatuses(prev => {
                                            const newStatuses = { ...prev }
                                            delete newStatuses[wordKey]
                                            return newStatuses
                                          })
                                        }}
                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Видалити слово"
                                      >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </>
                            ) : (
                              <>
                                <td className={`px-6 py-4 text-sm font-medium ${textColor} w-2/5`}>
                                  <div className="flex items-start gap-2">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        speakWord(word.word)
                                      }}
                                      className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors mt-0.5"
                                      title="Озвучить слово"
                                    >
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                      </svg>
                                    </button>
                                    <div className="flex flex-col">
                                      <span 
                                        className="font-medium cursor-pointer hover:text-blue-600 hover:underline transition-colors"
                                        onClick={(e) => handleWordClick(e, word.word)}
                                        title="Натисніть для прикладу використання"
                                      >
                                        {word.word}
                                      </span>
                                      {word.transcription && (
                                        <span className={`text-xs font-mono ${transcriptionColor} mt-0.5`}>{word.transcription}</span>
                                      )}
                                    </div>
                                  </div>
                                </td>
                                <td className={`px-6 py-4 text-sm ${translationColor} w-2/5`}>{word.translation}</td>
                                <td className="px-6 py-4 text-sm w-1/5">
                                  <div className="flex items-center space-x-2">
                                    <select
                                      value={status}
                                      onChange={(e) => {
                                        setWordStatuses(prev => ({
                                          ...prev,
                                          [wordKey]: e.target.value
                                        }))
                                      }}
                                      className="px-3 py-1 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    >
                                      <option value="not-learned">Не вивчено</option>
                                      <option value="learned">Вивчено</option>
                                      <option value="repeat">Повторити</option>
                                    </select>
                                    {!selectedCollection?.isIrregularVerbs && (
                                      <button
                                        onClick={() => {
                                          setCollectionWords(prev => prev.filter((_, i) => i !== index))
                                          // Удаляем статус слова
                                          setWordStatuses(prev => {
                                            const newStatuses = { ...prev }
                                            delete newStatuses[wordKey]
                                            return newStatuses
                                          })
                                        }}
                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Видалити слово"
                                      >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </>
                            )}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                
                  {collectionWords.length === 0 && (
                    <div className="text-center py-12">
                      <div className="mb-4">
                        <svg className="w-12 h-12 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-gray-500">У цій колекції поки немає слів</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Cards View */}
              {viewMode === 'cards' && (
                <>
                  {collectionWords.length > 0 ? (
                    <div className="max-w-md mx-auto">
                      {/* Card Counter */}
                      <div className="text-center mb-4">
                        <span className="text-sm text-gray-500">
                          {currentCardIndex + 1} з {collectionWords.length}
                        </span>
                      </div>
                      
                      {/* Word Card */}
                      <div 
                        className="bg-white rounded-xl p-8 text-center min-h-[400px] flex flex-col justify-center space-y-6 touch-pan-y shadow-lg border border-gray-100"
                        onTouchStart={(e) => {
                          const touch = e.touches[0]
                          e.currentTarget.startX = touch.clientX
                        }}
                        onTouchEnd={(e) => {
                          const touch = e.changedTouches[0]
                          const startX = e.currentTarget.startX
                          const endX = touch.clientX
                          const diff = startX - endX
                          
                          if (Math.abs(diff) > 50) {
                            const wordKey = `${selectedCollection.id}-${currentCardIndex}`
                            if (diff > 0) {
                              // Swipe left - mark as learned
                              setWordStatuses(prev => ({
                                ...prev,
                                [wordKey]: 'learned'
                              }))
                            } else {
                              // Swipe right - mark as repeat
                              setWordStatuses(prev => ({
                                ...prev,
                                [wordKey]: 'repeat'
                              }))
                            }
                            
                            // Move to next card
                            if (currentCardIndex < collectionWords.length - 1) {
                              setCurrentCardIndex(prev => prev + 1)
                            }
                          }
                        }}
                      >
                        <div>
                          {selectedCollection?.isIrregularVerbs ? (
                            <>
                              <div className="text-center mb-4">
                                <h2 className="text-2xl font-bold text-gray-900">Неправильний дієслово</h2>
                              </div>
                              <div className="space-y-3">
                                <div className="text-center">
                                  <p className="text-sm text-gray-500 mb-1">Інфінітив</p>
                                  <div className="flex flex-col items-center gap-2">
                                    <div className="flex items-center justify-center gap-3">
                                      <button
                                        onClick={() => speakWord(collectionWords[currentCardIndex]?.infinitive)}
                                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        title="Озвучить інфінітив"
                                      >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                        </svg>
                                      </button>
                                      <p 
                                        className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-800 hover:underline transition-colors"
                                        onClick={(e) => handleWordClick(e, collectionWords[currentCardIndex]?.infinitive)}
                                        title="Натисніть для прикладу використання"
                                      >
                                        {collectionWords[currentCardIndex]?.infinitive}
                                      </p>
                                    </div>
                                    {collectionWords[currentCardIndex]?.infinitiveTranscription && (
                                      <p className="text-sm text-gray-600 font-mono">{collectionWords[currentCardIndex]?.infinitiveTranscription}</p>
                                    )}
                                  </div>
                                </div>
                                <div className="text-center">
                                  <p className="text-sm text-gray-500 mb-1">Past Simple</p>
                                  <div className="flex flex-col items-center gap-2">
                                    <div className="flex items-center justify-center gap-3">
                                      <button
                                        onClick={() => speakWord(collectionWords[currentCardIndex]?.pastSimple)}
                                        className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                        title="Озвучить Past Simple"
                                      >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                        </svg>
                                      </button>
                                      <p 
                                        className="text-2xl font-bold text-green-600 cursor-pointer hover:text-green-800 hover:underline transition-colors"
                                        onClick={(e) => handleWordClick(e, collectionWords[currentCardIndex]?.pastSimple)}
                                        title="Натисніть для прикладу використання"
                                      >
                                        {collectionWords[currentCardIndex]?.pastSimple}
                                      </p>
                                    </div>
                                    {collectionWords[currentCardIndex]?.pastSimpleTranscription && (
                                      <p className="text-sm text-gray-600 font-mono">{collectionWords[currentCardIndex]?.pastSimpleTranscription}</p>
                                    )}
                                  </div>
                                </div>
                                <div className="text-center">
                                  <p className="text-sm text-gray-500 mb-1">Past Participle</p>
                                  <div className="flex flex-col items-center gap-2">
                                    <div className="flex items-center justify-center gap-3">
                                      <button
                                        onClick={() => speakWord(collectionWords[currentCardIndex]?.pastParticiple)}
                                        className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                                        title="Озвучить Past Participle"
                                      >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                        </svg>
                                      </button>
                                      <p 
                                        className="text-2xl font-bold text-purple-600 cursor-pointer hover:text-purple-800 hover:underline transition-colors"
                                        onClick={(e) => handleWordClick(e, collectionWords[currentCardIndex]?.pastParticiple)}
                                        title="Натисніть для прикладу використання"
                                      >
                                        {collectionWords[currentCardIndex]?.pastParticiple}
                                      </p>
                                    </div>
                                    {collectionWords[currentCardIndex]?.pastParticipleTranscription && (
                                      <p className="text-sm text-gray-600 font-mono">{collectionWords[currentCardIndex]?.pastParticipleTranscription}</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center justify-center gap-3 mb-2">
                                <button
                                  onClick={() => speakWord(collectionWords[currentCardIndex]?.word)}
                                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                  title="Озвучить слово"
                                >
                                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                                  </svg>
                                </button>
                                <div className="text-center">
                                  <h2 
                                    className="text-3xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 hover:underline transition-colors"
                                    onClick={(e) => handleWordClick(e, collectionWords[currentCardIndex]?.word)}
                                    title="Натисніть для прикладу використання"
                                  >
                                    {collectionWords[currentCardIndex]?.word}
                                  </h2>
                                  <p className="text-lg text-gray-600 font-mono">
                                    {collectionWords[currentCardIndex]?.transcription}
                                  </p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="text-gray-700">
                          <p className="text-base leading-relaxed">
                            {collectionWords[currentCardIndex]?.example || 'Приклад використання слова в реченні.'}
                          </p>
                        </div>
                        
                        <ScratchToReveal 
                          className="bg-gray-100 rounded-lg p-4"
                          scratchColor="#e5e7eb"
                          brushSize={25}
                          revealThreshold={30}
                        >
                          <p className="text-lg font-medium text-gray-900">
                            {collectionWords[currentCardIndex]?.translation}
                          </p>
                        </ScratchToReveal>
                        
                        <div className="flex space-x-4 justify-center">
                          <button
                            onClick={() => {
                              const wordKey = `${selectedCollection.id}-${currentCardIndex}`
                              setWordStatuses(prev => ({
                                ...prev,
                                [wordKey]: 'repeat'
                              }))
                              if (currentCardIndex < collectionWords.length - 1) {
                                setCurrentCardIndex(prev => prev + 1)
                              }
                            }}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                          >
                            Повторити
                          </button>
                          <button
                            onClick={() => {
                              const wordKey = `${selectedCollection.id}-${currentCardIndex}`
                              setWordStatuses(prev => ({
                                ...prev,
                                [wordKey]: 'learned'
                              }))
                              if (currentCardIndex < collectionWords.length - 1) {
                                setCurrentCardIndex(prev => prev + 1)
                              }
                            }}
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                          >
                            Вивчено
                          </button>
                        </div>
                      </div>
                      
                      {/* Navigation */}
                      <div className="flex justify-between items-center mt-6">
                        <button
                          onClick={() => {
                            if (currentCardIndex > 0) {
                              setCurrentCardIndex(prev => prev - 1)
                            }
                          }}
                          disabled={currentCardIndex === 0}
                          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                          <span>Попередня</span>
                        </button>
                        
                        <button
                          onClick={() => {
                            if (currentCardIndex < collectionWords.length - 1) {
                              setCurrentCardIndex(prev => prev + 1)
                            }
                          }}
                          disabled={currentCardIndex === collectionWords.length - 1}
                          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <span>Наступна</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mb-4">
                        <svg className="w-12 h-12 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-gray-500">У цій колекції поки немає слів</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </BlurFade>
          )}
          
          {activePage === 'reading' && currentView === 'main' && (
          <BlurFade key="reading" delay={0.1}>
            <div className="relative">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Читання</h1>
                <p className="text-lg text-gray-600">Покращуйте навички читання</p>
              </div>
              
              {/* Empty State */}
              {createdTexts.length === 0 && (
                <div className="text-center py-16 mb-8">
                  <div className="mb-4">
                    <svg className="w-16 h-16 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-lg">Ви ще не згенерували тексти</p>
                </div>
              )}

              {/* Created Texts */}
              {createdTexts.length > 0 && (
                <div className="mb-8 space-y-6">
                  {createdTexts.map((text, index) => (
                    <div key={`${text.topic}-${text.createdAt}-${index}`} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            {text.level}
                          </span>
                          <span className="text-xs text-gray-500">
                            {text.length}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/* Regenerate Button */}
                          <button
                            onClick={async () => {
                              setIsGenerating(true)
                              try {
                                const response = await fetch('/api/generate-text', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({
                                    topic: text.topic,
                                    level: text.level,
                                    length: text.length
                                  })
                                })
                                
                                if (!response.ok) {
                                  throw new Error('Помилка генерації тексту')
                                }
                                
                                const data = await response.json()
                                
                                // Перекладаємо згенерований текст
                                const translationResponse = await fetch('/api/translate', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({
                                    text: data.text
                                  })
                                })
                                
                                let translation = ''
                                if (translationResponse.ok) {
                                  const translationData = await translationResponse.json()
                                  translation = translationData.translation
                                }
                                
                                const newText = {
                                  level: text.level,
                                  length: text.length,
                                  topic: text.topic,
                                  content: data.text,
                                  translation: translation,
                                  createdAt: new Date().toLocaleString()
                                }
                                
                                const newTexts = [...createdTexts]
                                newTexts[index] = newText
                                setCreatedTexts(newTexts)
                              } catch (error) {
                                console.error('Помилка регенерації тексту:', error)
                                alert('Помилка при регенерації тексту. Спробуйте ще раз.')
                              } finally {
                                setIsGenerating(false)
                              }
                            }}
                            disabled={isGenerating}
                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Регенерувати текст"
                          >
                            {isGenerating ? (
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            ) : (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            )}
                          </button>
                          {/* Delete Button */}
                          <button
                            onClick={() => {
                              setCreatedTexts(prev => prev.filter((_, i) => i !== index))
                            }}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Видалити текст"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                        {text.topic}
                      </h3>
                      <div 
                        className="text-gray-700 leading-relaxed select-text cursor-text"
                        onMouseUp={handleTextSelection}
                      >
                        {text.isGenerating ? (
                          <div className="flex items-center space-x-2 py-8">
                            <svg className="w-5 h-5 animate-spin text-blue-600" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="text-gray-600">Генерую текст...</span>
                          </div>
                        ) : (
                          (typingTexts[text.id] ? typingTexts[text.id] : text.text).split('\n').map((paragraph, paragraphIndex) => {
                            if (paragraph.trim()) {
                              return <p key={`${text.id}-paragraph-${paragraphIndex}`} className="mb-4">{paragraph}</p>
                            }
                            return null
                          })
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
            </div>
          </BlurFade>
          )}
          
          {/* Floating Bottom Menu for Reading */}
          {activePage === 'reading' && currentView === 'main' && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 z-40 max-w-5xl w-auto">
              <div>
                <div className="flex items-center space-x-3">
                  {/* Level Dropdown */}
                   <div className="flex-shrink-0">
                     <select
                       value={readingLevel}
                       onChange={(e) => setReadingLevel(e.target.value)}
                       className="px-3 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                     >
                       <option value="A1">A1 - Початковий</option>
                       <option value="A2">A2 - Елементарний</option>
                       <option value="B1">B1 - Середній</option>
                       <option value="B2">B2 - Вище середнього</option>
                       <option value="C1">C1 - Просунутий</option>
                       <option value="C2">C2 - Професійний</option>
                     </select>
                   </div>
                  
                  {/* Length Dropdown */}
                   <div className="flex-shrink-0">
                     <select
                       value={readingLength}
                       onChange={(e) => setReadingLength(e.target.value)}
                       className="px-3 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                     >
                       <option value="короткі">Короткі</option>
                       <option value="середні">Середні</option>
                       <option value="довгі">Довгі</option>
                     </select>
                   </div>
                  
                  {/* Topic Input */}
                   <div className="flex-1">
                     <input
                       type="text"
                       value={readingTopic}
                       onChange={(e) => setReadingTopic(e.target.value)}
                       placeholder="Введіть тему для тексту..."
                       className="w-full px-3 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                     />
                   </div>
                  
                  {/* Create Button */}
                   <div className="flex-shrink-0">
                     <button
                       onClick={generateText}
                       disabled={isGenerating}
                       className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                    >
                      {isGenerating ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Генерую...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          <span>Створити</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activePage === 'speaking' && currentView === 'main' && (
          <BlurFade key="speaking" delay={0.1}>
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Мовлення</h1>
                <p className="text-lg text-gray-600">Практикуйте усне мовлення з AI-асистентом</p>
              </div>
              
              {/* Speaking Chat Interface */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🤖</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">AI Мовленнєвий Асистент</h3>
                      <p className="text-sm text-gray-600">Готовий допомогти вам практикувати англійську</p>
                    </div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {/* Welcome Message */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                      <p className="text-gray-800">Привіт! Я ваш AI-асистент для практики мовлення. Натисніть на мікрофон і почніть говорити англійською. Я допоможу вам покращити вимову та граматику!</p>
                    </div>
                  </div>
                  
                  {/* Example conversation starters */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">💡</span>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 max-w-md">
                      <p className="text-gray-800 font-medium mb-2">Спробуйте сказати:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• "Hello, my name is..."</li>
                        <li>• "I would like to practice English"</li>
                        <li>• "Can you help me with pronunciation?"</li>
                        <li>• "Let's have a conversation"</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Chat Input Area */}
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    {/* Voice Recording Button */}
                    <button className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full flex items-center justify-center hover:from-red-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {/* Text Input */}
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="Або введіть текст тут..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    {/* Send Button */}
                    <button className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Recording Status */}
                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500">Натисніть мікрофон для запису або введіть текст</p>
                  </div>
                </div>
              </div>
              
              {/* Speaking Tips */}
              <div className="mt-6">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🎯</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">Поради для практики</h3>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Говоріть повільно та чітко</li>
                    <li>• Не бійтеся робити помилки</li>
                    <li>• Практикуйтеся щодня</li>
                  </ul>
                </div>
              </div>
            </div>
          </BlurFade>
          )}
          
          {/* Lesson Page */}
          {activePage === 'grammar' && currentView === 'lesson' && selectedLesson && (
            <BlurFade key="lesson" delay={0.1}>
              <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => {
                        setSelectedLesson(null)
                        setCurrentView('main')
                      }}
                      className="mr-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">{selectedLesson.title}</h1>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedLesson.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      selectedLesson.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {selectedLesson.level}
                    </span>
                    <span className="text-gray-600 text-sm">{selectedLesson.duration}</span>
                    <span className="text-gray-600 text-sm">{selectedLesson.category}</span>
                  </div>
                  
                  <p className="text-lg text-gray-600">{selectedLesson.description}</p>
                </div>
                
                {/* Main Content with Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  {/* Article Content */}
                  <div className="lg:col-span-3">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                      <div className="prose prose-lg max-w-none">
                        {selectedLesson.content?.article ? (
                          selectedLesson.content.article.split('\n').map((paragraph, index) => {
                            if (paragraph.startsWith('# ')) {
                              return <h1 key={`${selectedLesson.id}-h1-${index}`} className="text-3xl font-bold text-gray-900 mb-6">{paragraph.slice(2)}</h1>
                            } else if (paragraph.startsWith('## ')) {
                              return <h2 key={`${selectedLesson.id}-h2-${index}`} className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{paragraph.slice(3)}</h2>
                            } else if (paragraph.startsWith('### ')) {
                              return <h3 key={`${selectedLesson.id}-h3-${index}`} className="text-xl font-semibold text-gray-900 mb-3 mt-6">{paragraph.slice(4)}</h3>
                            } else if (paragraph.startsWith('- ')) {
                              return <li key={`${selectedLesson.id}-li-${index}`} className="text-gray-700 mb-2 ml-4">{paragraph.slice(2)}</li>
                            } else if (paragraph.match(/^\d+\./)) {
                              return <li key={`${selectedLesson.id}-ol-${index}`} className="text-gray-700 mb-2 ml-4 list-decimal">{paragraph.replace(/^\d+\.\s*/, '')}</li>
                            } else if (paragraph.includes('**') && paragraph.includes('**')) {
                              const parts = paragraph.split('**')
                              return (
                                <p key={`${selectedLesson.id}-p-${index}`} className="text-gray-700 mb-4 leading-relaxed">
                                  {parts.map((part, partIndex) => 
                                    partIndex % 2 === 1 ? <strong key={`part-${selectedLesson.id}-${index}-${partIndex}`}>{part}</strong> : part
                                  )}
                                </p>
                              )
                            } else if (paragraph.trim()) {
                              return <p key={`${selectedLesson.id}-p-${index}`} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>
                            }
                            return null
                          })
                        ) : (
                          <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">Контент для цього уроку ще не доступний</p>
                            <p className="text-gray-400 text-sm mt-2">Будь ласка, оберіть інший урок</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Sidebar with Key Rules */}
                  <div className="lg:col-span-1">
                    <div className="space-y-3 sticky top-6">
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-gray-900 mb-2">26 літер</h4>
                        <p className="text-sm text-gray-600">Англійський алфавіт складається з 26 літер</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-gray-900 mb-2">5 голосних</h4>
                        <p className="text-sm text-gray-600">A, E, I, O, U - основні голосні звуки</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-gray-900 mb-2">21 приголосна</h4>
                        <p className="text-sm text-gray-600">Всі інші літери є приголосними</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-gray-900 mb-2">Великі та малі</h4>
                        <p className="text-sm text-gray-600">Кожна літера має велику та малу форму</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-gray-900 mb-2">Порядок важливий</h4>
                        <p className="text-sm text-gray-600">Алфавітний порядок використовується в словниках</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Test Section */}
                {selectedLesson?.test && (
                  <div className="mt-8">
                    {!showTest ? (
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 border border-blue-500">
                         <div className="flex items-center justify-between">
                           <div>
                             <h3 className="text-xl font-semibold text-white mb-2">Тест по уроку</h3>
                             <p className="text-blue-100">Перевірте свої знання з {selectedLesson.test.questions.length} питань</p>
                           </div>
                           <button
                             onClick={startTest}
                             className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center space-x-2"
                           >
                             <span>Почати тест</span>
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                             </svg>
                           </button>
                         </div>
                       </div>
                    ) : (
                      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                        {!testCompleted ? (
                          <div>
                            <div className="flex items-center justify-between mb-6">
                              <h3 className="text-xl font-semibold text-gray-900">Тест по уроку</h3>
                              <div className="text-sm text-gray-500">
                                Питання {currentQuestion + 1} з {selectedLesson.test.questions.length}
                              </div>
                            </div>
                            
                            <div className="mb-6">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${((currentQuestion + 1) / selectedLesson.test.questions.length) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            {selectedLesson.test.questions[currentQuestion] && (
                              <div>
                                <h4 className="text-lg font-medium text-gray-900 mb-4">
                                  {selectedLesson.test.questions[currentQuestion].question}
                                </h4>
                                
                                <div className="space-y-3 mb-6">
                                  {selectedLesson.test.questions[currentQuestion].options.map((option, index) => (
                                    <button
                                      key={index}
                                      onClick={() => selectAnswer(selectedLesson.test.questions[currentQuestion].id, index)}
                                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                                        selectedAnswers[selectedLesson.test.questions[currentQuestion].id] === index
                                          ? 'border-blue-500 bg-blue-50 text-blue-900'
                                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                      }`}
                                    >
                                      <div className="flex items-center space-x-3">
                                        <div className={`w-4 h-4 rounded-full border-2 ${
                                          selectedAnswers[selectedLesson.test.questions[currentQuestion].id] === index
                                            ? 'border-blue-500 bg-blue-500'
                                            : 'border-gray-300'
                                        }`}>
                                          {selectedAnswers[selectedLesson.test.questions[currentQuestion].id] === index && (
                                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                                          )}
                                        </div>
                                        <span>{option}</span>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                                
                                <div className="flex justify-between">
                                  <button
                                    onClick={resetTest}
                                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                  >
                                    Скасувати
                                  </button>
                                  <button
                                    onClick={nextQuestion}
                                    disabled={selectedAnswers[selectedLesson.test.questions[currentQuestion].id] === undefined}
                                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed transform hover:scale-105"
                                  >
                                    {currentQuestion < selectedLesson.test.questions.length - 1 ? 'Далі' : 'Завершити'}
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-center">
                            <div className="mb-6">
                              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl ${
                                testScore >= selectedLesson.test.questions.length * 0.8
                                  ? 'bg-green-100 text-green-600'
                                  : testScore >= selectedLesson.test.questions.length * 0.6
                                  ? 'bg-yellow-100 text-yellow-600'
                                  : 'bg-red-100 text-red-600'
                              }`}>
                                {testScore >= selectedLesson.test.questions.length * 0.8 ? '🎉' : 
                                 testScore >= selectedLesson.test.questions.length * 0.6 ? '👍' : '📚'}
                              </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Тест завершено!</h3>
                            <p className="text-lg text-gray-600 mb-4">
                              Ваш результат: {testScore} з {selectedLesson.test.questions.length}
                            </p>
                            <p className={`text-sm font-medium mb-6 ${
                              testScore >= selectedLesson.test.questions.length * 0.8
                                ? 'text-green-600'
                                : testScore >= selectedLesson.test.questions.length * 0.6
                                ? 'text-yellow-600'
                                : 'text-red-600'
                            }`}>
                              {testScore >= selectedLesson.test.questions.length * 0.8
                                ? 'Відмінно! Ви добре засвоїли матеріал.'
                                : testScore >= selectedLesson.test.questions.length * 0.6
                                ? 'Добре! Рекомендуємо повторити деякі моменти.'
                                : 'Потрібно більше практики. Перечитайте урок.'}
                            </p>
                            
                            <div className="flex justify-center space-x-4">
                              <button
                                onClick={resetTest}
                                className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                Закрити
                              </button>
                              <button
                                onClick={() => {
                                  setShowTest(true)
                                  setCurrentQuestion(0)
                                  setSelectedAnswers({})
                                  setTestCompleted(false)
                                  setTestScore(0)
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105"
                              >
                                Пройти знову
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                

              </div>
            </BlurFade>
          )}
        </div>
      </div>
      
      {/* Кнопка чату для сторінки уроку */}
      {activePage === 'grammar' && currentView === 'lesson' && selectedLesson && (
        <>
          <button
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center justify-center z-40 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
          
          {/* Інтерфейс чату */}
          {isChatOpen && (
            <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">
              {/* Заголовок чату */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#2757FF] text-white rounded-t-lg">
                <div>
                  <h3 className="font-semibold">AI Помічник</h3>
                  <p className="text-xs text-blue-100">Запитайте про урок: {selectedLesson.title}</p>
                </div>
                <button
                  onClick={() => {
                    setIsChatOpen(false)
                    setChatMessages([])
                  }}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Повідомлення чату */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatMessages.length === 0 && (
                  <div className="text-center text-gray-500 text-sm">
                    Привіт! Я можу допомогти вам з питаннями про цей урок. Просто напишіть своє запитання!
                  </div>
                )}
                {chatMessages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.role === 'user' 
                        ? 'bg-[#2757FF] text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      {message.content}
                    </div>
                  </div>
                ))}
                {isChatLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-900 p-3 rounded-lg text-sm flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                      <span>AI думає...</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Поле вводу */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                    placeholder="Напишіть ваше запитання..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    disabled={isChatLoading}
                  />
                  <button
                    onClick={sendChatMessage}
                    disabled={!chatInput.trim() || isChatLoading}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      
      {/* Tooltip для перевода слов */}
      {tooltip.visible && (
        <div 
          className="fixed z-50 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-sm pointer-events-auto transform -translate-x-1/2 -translate-y-full"
          style={{
            left: tooltip.x,
            top: tooltip.y
          }}
        >
          {/* Оригинальный текст с интерактивными словами */}
          <div className="font-medium mb-1">
            {tooltip.word.split(' ').map((word, index) => (
              <span
                key={`tooltip-word-${index}`}
                className={`cursor-pointer hover:bg-blue-600 px-1 rounded transition-colors ${
                  hoveredWordIndex === index ? 'bg-blue-600' : ''
                }`}
                onMouseEnter={() => setHoveredWordIndex(index)}
                onMouseLeave={() => setHoveredWordIndex(-1)}
              >
                {word}{index < tooltip.word.split(' ').length - 1 ? ' ' : ''}
              </span>
            ))}
          </div>
          
          {/* Перевод с интерактивными словами */}
          <div className="text-gray-300 text-xs mb-2">
            {tooltip.translation.split(' ').map((word, index) => (
              <span
                key={`tooltip-translation-${index}`}
                className={`cursor-pointer hover:bg-blue-600 px-1 rounded transition-colors ${
                  hoveredWordIndex === index ? 'bg-blue-600' : ''
                }`}
                onMouseEnter={() => setHoveredWordIndex(index)}
                onMouseLeave={() => setHoveredWordIndex(-1)}
              >
                {word}{index < tooltip.translation.split(' ').length - 1 ? ' ' : ''}
              </span>
            ))}
          </div>
          
          {/* Показываем кнопку "Выучить" только для одного слова */}
          {tooltip.word.split(' ').length === 1 && (
            <button
              onClick={() => {
                setShowLearnPopup(true)
                setWordToLearn({ word: tooltip.word, translation: tooltip.translation })
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs transition-colors"
            >
              Выучить
            </button>
          )}
          {/* Стрелка */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}

      {/* Tooltip для примеров использования слов */}
      {wordTooltip.visible && (
        <div 
          className="word-tooltip fixed z-50 bg-blue-900 text-white px-4 py-3 rounded-lg shadow-lg text-sm pointer-events-auto transform -translate-x-1/2 -translate-y-full max-w-sm"
          style={{
            left: wordTooltip.x,
            top: wordTooltip.y
          }}
          onClick={hideWordTooltip}
        >
          <div className="text-white text-sm leading-relaxed">
            {wordTooltip.loading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Генерую приклад...</span>
              </div>
            ) : (
              <div>
                <div className="mb-2">
                  <span className="text-blue-200 text-xs">Приклад:</span>
                  <div>{wordTooltip.example}</div>
                </div>
                <div>
                  <span className="text-blue-200 text-xs">Переклад:</span>
                  <div className="italic">{wordTooltip.translation}</div>
                </div>
              </div>
            )}
          </div>
          
          {/* Стрелка */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-900"></div>
        </div>
      )}

      {/* Попап для изучения слов */}
      {showLearnPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">Добавить слово для изучения</h3>
            
            <div className="mb-4">
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <div className="font-medium text-gray-900">{wordToLearn.word}</div>
                <div className="text-gray-600 text-sm">{wordToLearn.translation}</div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Выберите коллекцию:
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="collectionChoice"
                    checked={!isCreatingNewCollection}
                    onChange={() => setIsCreatingNewCollection(false)}
                    className="mr-2"
                  />
                  <span>Добавить в существующую коллекцию</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="collectionChoice"
                    checked={isCreatingNewCollection}
                    onChange={() => setIsCreatingNewCollection(true)}
                    className="mr-2"
                  />
                  <span>Создать новую коллекцию</span>
                </label>
              </div>
            </div>

            {!isCreatingNewCollection && (
              <div className="mb-4">
                <select
                  value={selectedCollectionForWord}
                  onChange={(e) => setSelectedCollectionForWord(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                >
                  <option value="" className="text-gray-900">Выберите коллекцию</option>
                  {wordCollections.map((collection, index) => (
                    <option key={`collection-option-${collection.id || index}`} value={collection.name} className="text-gray-900">
                      {collection.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {isCreatingNewCollection && (
              <div className="mb-4">
                <input
                  type="text"
                  value={newCollectionForWord}
                  onChange={(e) => setNewCollectionForWord(e.target.value)}
                  placeholder="Название новой коллекции"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowLearnPopup(false)
                  setWordToLearn({ word: '', translation: '' })
                  setSelectedCollectionForWord('')
                  setNewCollectionForWord('')
                  setIsCreatingNewCollection(false)
                }}
                className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Отмена
              </button>
              <button
                onClick={() => {
                  if (isCreatingNewCollection) {
                    if (newCollectionForWord.trim()) {
                      // Создаем новую коллекцию
                      const newCollection = {
                        name: newCollectionForWord.trim(),
                        words: [{
                          word: wordToLearn.word,
                          transcription: '',
                          translation: wordToLearn.translation
                        }]
                      }
                      setWordCollections(prev => [...prev, newCollection])
                    }
                  } else {
                    if (selectedCollectionForWord) {
                      // Добавляем в существующую коллекцию
                      setWordCollections(prev => prev.map(collection => {
                        if (collection.name === selectedCollectionForWord) {
                          return {
                            ...collection,
                            words: [...collection.words, {
                              word: wordToLearn.word,
                              transcription: '',
                              translation: wordToLearn.translation
                            }]
                          }
                        }
                        return collection
                      }))
                    }
                  }
                  
                  // Закрываем попап и очищаем состояния
                  setShowLearnPopup(false)
                  setWordToLearn({ word: '', translation: '' })
                  setSelectedCollectionForWord('')
                  setNewCollectionForWord('')
                  setIsCreatingNewCollection(false)
                  setTooltip(prev => ({ ...prev, visible: false }))
                }}
                disabled={(!isCreatingNewCollection && !selectedCollectionForWord) || (isCreatingNewCollection && !newCollectionForWord.trim())}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all transform hover:scale-105"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}