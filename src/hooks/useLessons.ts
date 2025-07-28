'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Lesson } from '@/types';
import { useAuth } from './useAuth';

export function useLessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async (filters?: {
    level?: string;
    category?: string;
    search?: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      let query = supabase
        .from('lessons')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters?.level) {
        query = query.eq('level', filters.level);
      }

      if (filters?.category) {
        query = query.eq('category', filters.category);
      }

      if (filters?.search) {
        query = query.or(
          `title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`
        );
      }

      const { data, error } = await query;

      if (error) throw error;

      setLessons(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch lessons');
    } finally {
      setLoading(false);
    }
  };

  const getLessonById = async (id: string): Promise<Lesson | null> => {
    try {
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch lesson');
      return null;
    }
  };

  const createLesson = async (lessonData: Omit<Lesson, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      if (!user) throw new Error('User must be authenticated');

      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('lessons')
        .insert([lessonData])
        .select()
        .single();

      if (error) throw error;

      setLessons(prev => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create lesson');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateLesson = async (id: string, updates: Partial<Lesson>) => {
    try {
      if (!user) throw new Error('User must be authenticated');

      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('lessons')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setLessons(prev => prev.map(lesson => 
        lesson.id === id ? data : lesson
      ));
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update lesson');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteLesson = async (id: string) => {
    try {
      if (!user) throw new Error('User must be authenticated');

      setLoading(true);
      setError(null);

      const { error } = await supabase
        .from('lessons')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setLessons(prev => prev.filter(lesson => lesson.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete lesson');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getLessonsByLevel = (level: string) => {
    return lessons.filter(lesson => lesson.level === level);
  };

  const getLessonsByCategory = (category: string) => {
    return lessons.filter(lesson => lesson.category === category);
  };

  const searchLessons = (query: string) => {
    const searchTerm = query.toLowerCase();
    return lessons.filter(lesson => 
      lesson.title.toLowerCase().includes(searchTerm) ||
      lesson.description.toLowerCase().includes(searchTerm) ||
      lesson.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm))
    );
  };

  return {
    lessons,
    loading,
    error,
    fetchLessons,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson,
    getLessonsByLevel,
    getLessonsByCategory,
    searchLessons,
  };
}