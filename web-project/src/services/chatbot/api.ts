import {
    chatbotCompany,
    chatbotKnowledgeBase,
    chatbotWelcomeMessage,
    pickChatSuggestions,
} from './config';
import { generateGeminiReply } from './gemini';
import type { ChatMessage } from './types';

export { chatbotCompany, chatbotKnowledgeBase, chatbotWelcomeMessage, pickChatSuggestions };

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.trim();

const STOP_WORDS = new Set([
    'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
    'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'shall', 'can', 'need', 'dare',
    'ought', 'used', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by',
    'from', 'up', 'about', 'into', 'through', 'during', 'before', 'after',
    'above', 'below', 'between', 'out', 'off', 'over', 'under', 'again',
    'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why',
    'how', 'all', 'each', 'few', 'more', 'most', 'other', 'some', 'such',
    'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very',
    'just', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while',
    'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am',
    'i', 'you', 'your', 'our', 'we', 'they', 'them', 'their', 'my', 'me',
    'tell', 'please', 'know', 'want', 'like', 'get', 'give',
]);

function buildSystemPrompt(): string {
    const faqBlock = chatbotKnowledgeBase
        .map((entry, i) => `${i + 1}. Q: ${entry.question}\n   A: ${entry.answer}`)
        .join('\n\n');

    return `You are a helpful website assistant for ${chatbotCompany.name} (${chatbotCompany.legalName}).

RULES:
- Answer ONLY using the company facts and FAQ below. Do not invent prices, guarantees, or services not listed.
- Keep replies concise (2–4 short paragraphs max). Use plain, professional language.
- If the user asks something outside this knowledge, politely say you don't have that detail and direct them to call ${chatbotCompany.phone} or email ${chatbotCompany.email}, or visit the Contact page.
- Never claim to be a human CPA giving legal/tax advice; you are an informational assistant only.
- Format with short paragraphs. Use bullet lists only when listing services.

COMPANY FACTS:
- Name: ${chatbotCompany.name}
- Address: ${chatbotCompany.address}
- Phone: ${chatbotCompany.phone}
- Email: ${chatbotCompany.email}
- Hours: ${chatbotCompany.hours}
- Services: ${chatbotCompany.services.join('; ')}

FAQ KNOWLEDGE BASE:
${faqBlock}`;
}

function normalize(text: string): string {
    return text.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function tokenize(text: string): string[] {
    return normalize(text)
        .split(' ')
        .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

/** Score how well a FAQ entry matches the user message. */
function scoreFaqMatch(query: string, entry: { question: string; answer: string }): number {
    const queryNorm = normalize(query);
    const questionNorm = normalize(entry.question);

    if (queryNorm === questionNorm) return 1;
    if (queryNorm.includes(questionNorm) || questionNorm.includes(queryNorm)) return 0.95;

    const queryWords = tokenize(query);
    if (queryWords.length === 0) return 0;

    const haystack = normalize(`${entry.question} ${entry.answer}`);
    const matched = queryWords.filter((w) => haystack.includes(w)).length;
    const wordScore = matched / queryWords.length;

    const questionWords = tokenize(entry.question);
    const questionMatched = questionWords.filter((w) => queryNorm.includes(w)).length;
    const questionScore = questionWords.length > 0 ? questionMatched / questionWords.length : 0;

    return Math.max(wordScore, questionScore * 0.9);
}

/** Keyword shortcuts for common topics. */
function findKeywordAnswer(userMessage: string): string | null {
    const q = normalize(userMessage);

    if (/\b(service|services|offer|help with|what do you do)\b/.test(q)) {
        return chatbotKnowledgeBase.find((e) => e.question.includes('services'))?.answer ?? null;
    }
    if (/\b(office|location|address|where)\b/.test(q)) {
        return chatbotKnowledgeBase.find((e) => e.question.includes('office'))?.answer ?? null;
    }
    if (/\b(contact|phone|email|call|reach)\b/.test(q)) {
        return chatbotKnowledgeBase.find((e) => e.question.includes('contact'))?.answer ?? null;
    }
    if (/\b(hour|open|close|time|schedule)\b/.test(q)) {
        return chatbotKnowledgeBase.find((e) => e.question.includes('hours'))?.answer ?? null;
    }
    if (/\b(cra|audit|dispute)\b/.test(q)) {
        return chatbotKnowledgeBase.find((e) => e.question.includes('CRA'))?.answer ?? null;
    }
    if (/\b(corporate|t2|business tax)\b/.test(q)) {
        return chatbotKnowledgeBase.find((e) => e.question.includes('corporate'))?.answer ?? null;
    }
    if (/\b(self.?employ|rideshare|uber|lyft|sole prop)\b/.test(q)) {
        return chatbotKnowledgeBase.find((e) => e.question.includes('self-employed'))?.answer ?? null;
    }
    if (/\b(founder|founded|ceo|atiqul|who started)\b/.test(q)) {
        return chatbotKnowledgeBase.find((e) => e.question.includes('founded'))?.answer ?? null;
    }

    return null;
}

function findLocalAnswer(userMessage: string): string | null {
    const keyword = findKeywordAnswer(userMessage);
    if (keyword) return keyword;

    let best: { score: number; answer: string } | null = null;

    for (const entry of chatbotKnowledgeBase) {
        const score = scoreFaqMatch(userMessage, entry);
        if (score >= 0.2 && (!best || score > best.score)) {
            best = { score, answer: entry.answer };
        }
    }

    return best?.answer ?? null;
}

/** Always returns a helpful reply — never leaves the user with only an error. */
function buildFallbackAnswer(userMessage: string): string {
    const local = findLocalAnswer(userMessage);
    if (local) return local;

    return `Thanks for your question! I can help with our services, office location (${chatbotCompany.address}), business hours (${chatbotCompany.hours}), CRA support, corporate and personal tax, and self-employed filing. For anything more specific, please call ${chatbotCompany.phone} or email ${chatbotCompany.email} — our team will be happy to help.`;
}

export function isChatbotConfigured(): boolean {
    return Boolean(GEMINI_API_KEY);
}

export async function sendChatMessage(
    userMessage: string,
    history: ChatMessage[],
): Promise<string> {
    const trimmed = userMessage.trim();
    if (!trimmed) {
        throw new Error('Please enter a message.');
    }

    if (GEMINI_API_KEY) {
        try {
            return await generateGeminiReply(GEMINI_API_KEY, buildSystemPrompt(), history, trimmed);
        } catch {
            // API down, bad key, or quota — answer from FAQ instead of showing an error
            return buildFallbackAnswer(trimmed);
        }
    }

    return buildFallbackAnswer(trimmed);
}

export function createMessage(role: ChatMessage['role'], content: string): ChatMessage {
    return {
        id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        role,
        content,
        createdAt: Date.now(),
    };
}
