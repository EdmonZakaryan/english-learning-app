// User types
export interface User {
  id: string;
  email: string;
  profile: UserProfile;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  display_name: string;
  english_level: 'beginner' | 'intermediate' | 'advanced';
  learning_goals: string[];
  preferred_topics: string[];
}

// Lesson types
export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

// AI Chat types
export interface ChatMessage {
  id: string;
  user_id: string;
  lesson_id?: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

// Vocabulary types
export interface VocabularyList {
  id: string;
  user_id: string;
  title: string;
  description: string;
  words: VocabularyWord[];
  created_at: string;
}

export interface VocabularyWord {
  id: string;
  word: string;
  translation: string;
  definition: string;
  example_sentence: string;
  difficulty_level: number;
}

// Text Generation types
export interface GeneratedText {
  id: string;
  user_id: string;
  prompt: string;
  generated_content: string;
  topic: string;
  level: string;
  created_at: string;
}

// API Response types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
    details?: any;
  };
}

// Form types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;
}

export interface TextGenerationForm {
  topic: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  length: 'short' | 'medium' | 'long';
  type: 'story' | 'article' | 'dialogue' | 'exercise';
}

export interface VocabularyGenerationForm {
  topic: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  wordCount: number;
  includeExamples: boolean;
}