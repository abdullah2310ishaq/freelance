import { chatbotModel } from './config';
import type { ChatMessage } from './types';

interface GeminiPart {
    text: string;
}

interface GeminiContent {
    role: 'user' | 'model';
    parts: GeminiPart[];
}

interface GeminiResponse {
    candidates?: Array<{
        content?: {
            parts?: Array<{ text?: string }>;
        };
    }>;
    error?: { message?: string };
}

function toGeminiHistory(messages: ChatMessage[]): GeminiContent[] {
    const conversational = messages.filter((m) => m.role === 'user' || m.role === 'assistant');

    // Gemini requires the first message to be from the user (not the welcome bubble)
    let start = 0;
    while (start < conversational.length && conversational[start].role === 'assistant') {
        start += 1;
    }

    return conversational.slice(start).map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
    }));
}

export async function generateGeminiReply(
    apiKey: string,
    systemPrompt: string,
    history: ChatMessage[],
    userMessage: string,
): Promise<string> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${chatbotModel}:generateContent?key=${encodeURIComponent(apiKey)}`;

    const contents: GeminiContent[] = [
        ...toGeminiHistory(history),
        { role: 'user', parts: [{ text: userMessage }] },
    ];

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            systemInstruction: {
                parts: [{ text: systemPrompt }],
            },
            contents,
            generationConfig: {
                temperature: 0.35,
                maxOutputTokens: 512,
            },
        }),
    });

    const data = (await response.json()) as GeminiResponse;

    if (!response.ok) {
        const message = data.error?.message ?? `Gemini request failed (${response.status})`;
        throw new Error(message);
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!text) {
        throw new Error('No response from Gemini.');
    }

    return text;
}
