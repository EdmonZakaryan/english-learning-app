import { z } from 'zod';

// Auth validation schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
  displayName: z.string().min(2, 'Display name must be at least 2 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

// Profile validation schema
export const profileSchema = z.object({
  display_name: z.string().min(2, 'Display name must be at least 2 characters'),
  english_level: z.enum(['beginner', 'intermediate', 'advanced']),
  learning_goals: z.array(z.string()).optional(),
  preferred_topics: z.array(z.string()).optional(),
});

// Text generation validation schema
export const textGenerationSchema = z.object({
  topic: z.string().min(1, 'Topic is required'),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  length: z.enum(['short', 'medium', 'long']),
  type: z.enum(['story', 'article', 'dialogue', 'exercise']),
});

// Vocabulary generation validation schema
export const vocabularyGenerationSchema = z.object({
  topic: z.string().min(1, 'Topic is required'),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  wordCount: z.number().min(5).max(50),
  includeExamples: z.boolean(),
});

// Chat message validation schema
export const chatMessageSchema = z.object({
  content: z.string().min(1, 'Message cannot be empty'),
  lesson_id: z.string().uuid().optional(),
});

// Lesson validation schema
export const lessonSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).optional(),
});

// Vocabulary word validation schema
export const vocabularyWordSchema = z.object({
  word: z.string().min(1, 'Word is required'),
  translation: z.string().min(1, 'Translation is required'),
  definition: z.string().optional(),
  example_sentence: z.string().optional(),
  difficulty_level: z.number().min(1).max(5),
});

// Vocabulary list validation schema
export const vocabularyListSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  words: z.array(vocabularyWordSchema),
});

// Export types
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
export type TextGenerationFormData = z.infer<typeof textGenerationSchema>;
export type VocabularyGenerationFormData = z.infer<typeof vocabularyGenerationSchema>;
export type ChatMessageFormData = z.infer<typeof chatMessageSchema>;
export type LessonFormData = z.infer<typeof lessonSchema>;
export type VocabularyWordFormData = z.infer<typeof vocabularyWordSchema>;
export type VocabularyListFormData = z.infer<typeof vocabularyListSchema>;