export interface OpenRouterMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface OpenRouterResponse {
  choices: {
    message: {
      content: string;
      role: string;
    };
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class OpenRouterClient {
  private apiKey: string;
  private baseUrl = 'https://openrouter.ai/api/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async chat({
    messages,
    model = 'meta-llama/llama-3.2-3b-instruct:free',
    temperature = 0.7,
    maxTokens = 1000,
  }: {
    messages: OpenRouterMessage[];
    model?: string;
    temperature?: number;
    maxTokens?: number;
  }): Promise<OpenRouterResponse> {
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'English Learning App',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens: maxTokens,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`OpenRouter API error: ${response.status} - ${error}`);
    }

    return response.json();
  }

  async generateText({
    prompt,
    context,
    model = 'meta-llama/llama-3.2-3b-instruct:free',
    temperature = 0.7,
    maxTokens = 1000,
  }: {
    prompt: string;
    context?: string;
    model?: string;
    temperature?: number;
    maxTokens?: number;
  }): Promise<string> {
    const messages: OpenRouterMessage[] = [
      {
        role: 'system',
        content: context || 'You are a helpful English learning assistant.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ];

    const response = await this.chat({ messages, model, temperature, maxTokens });
    return response.choices[0]?.message?.content || '';
  }
}

// Create a singleton instance
export const openRouterClient = new OpenRouterClient(
  process.env.OPENROUTER_API_KEY || ''
);