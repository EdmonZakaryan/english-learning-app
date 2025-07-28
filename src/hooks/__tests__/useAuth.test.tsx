import { renderHook, act, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuth } from '../useAuth';
import { ReactNode } from 'react';

// Mock Supabase
const mockAuth = {
  getSession: jest.fn(),
  onAuthStateChange: jest.fn(() => ({ data: { subscription: { unsubscribe: jest.fn() } } })),
  signInWithPassword: jest.fn(),
  signUp: jest.fn(),
  signOut: jest.fn(),
};

const mockSupabaseClient = {
  auth: mockAuth,
  from: jest.fn(() => ({
    select: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn(),
    order: jest.fn().mockReturnThis(),
  })),
};

jest.mock('@/lib/supabase/client', () => ({
  supabase: mockSupabaseClient,
  createClient: jest.fn(() => mockSupabaseClient),
}));

import { supabase } from '@/lib/supabase/client';

// Create a wrapper for React Query
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useAuth Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Setup default mocks
    mockAuth.getSession.mockResolvedValue({
      data: { session: null },
      error: null,
    });
    
    mockAuth.onAuthStateChange.mockReturnValue({
      data: {
        subscription: {
          unsubscribe: jest.fn(),
        },
      },
    });
  });

  it('should initialize with no user when no session exists', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.user).toBeNull();
      expect(result.current.loading).toBe(false);
    });
  });

  it('should set user when session exists', async () => {
    const mockUser = {
      id: '123',
      email: 'test@example.com',
      user_metadata: { display_name: 'Test User' },
    };

    mockAuth.getSession.mockResolvedValue({
      data: {
        session: {
          user: mockUser,
          access_token: 'token',
          refresh_token: 'refresh',
          expires_at: Date.now() + 3600000,
          expires_in: 3600,
          token_type: 'bearer',
        },
      },
      error: null,
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.user).toEqual(mockUser);
      expect(result.current.loading).toBe(false);
    });
  });

  it('should handle sign in', async () => {
    mockAuth.signInWithPassword.mockResolvedValue({
      data: {
        user: {
          id: '123',
          email: 'test@example.com',
          user_metadata: { display_name: 'Test User' },
        },
        session: null,
      },
      error: null,
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      await result.current.signIn('test@example.com', 'password123');
    });

    expect(mockAuth.signInWithPassword).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('should handle sign up', async () => {
    mockAuth.signUp.mockResolvedValue({
      data: {
        user: {
          id: '123',
          email: 'test@example.com',
          user_metadata: { display_name: 'Test User' },
        },
        session: null,
      },
      error: null,
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      await result.current.signUp('test@example.com', 'password123', 'Test User');
    });

    expect(mockAuth.signUp).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
      options: {
        data: {
          display_name: 'Test User',
        },
      },
    });
  });

  it('should handle sign out', async () => {
    mockAuth.signOut.mockResolvedValue({
      error: null,
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      await result.current.signOut();
    });

    expect(mockAuth.signOut).toHaveBeenCalled();
  });

  it('should handle authentication errors', async () => {
    const mockError = { message: 'Invalid credentials' };
    mockAuth.signInWithPassword.mockResolvedValue({
      data: { user: null, session: null },
      error: mockError,
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      try {
        await result.current.signIn('test@example.com', 'wrongpassword');
      } catch (error) {
        expect(error).toEqual(mockError);
      }
    });
  });
});