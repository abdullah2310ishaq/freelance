import { chatbotCompany } from './config';
import type { ChatMessage } from './types';

const MAX_WHATSAPP_TEXT = 1500;

export interface VisitorInfo {
    name: string;
    fullPhone: string;
}

export function buildChatSummary(visitor: VisitorInfo, messages: ChatMessage[]): string {
    const chatLines = messages
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .map((m) => {
            const label = m.role === 'user' ? 'Visitor' : 'Assistant';
            const text = m.content.replace(/\s+/g, ' ').trim();
            return `${label}: ${text}`;
        });

    const lines = [
        `New chat inquiry — ${chatbotCompany.name}`,
        '',
        `Name: ${visitor.name}`,
        `Phone: ${visitor.fullPhone}`,
        '',
        'Conversation:',
        ...chatLines,
    ];

    let text = lines.join('\n');
    if (text.length > MAX_WHATSAPP_TEXT) {
        text = `${text.slice(0, MAX_WHATSAPP_TEXT - 20).trim()}… (truncated)`;
    }
    return text;
}

export function buildWhatsAppUrl(waNumber: string, text: string): string {
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
}
