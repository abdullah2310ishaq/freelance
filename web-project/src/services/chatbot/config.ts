import type { ChatbotKnowledgeEntry } from './types';

/** Company facts — edit here to keep the assistant aligned with your site. */
export const chatbotCompany = {
    name: 'Analytic Alliance CPA',
    legalName: 'Analytic Alliance Chartered Professional Accountant Corporation',
    tagline: 'Professional accounting, tax, and advisory services across Alberta.',
    address: '7618 10th Ave NW, Edmonton, AB T6K 2T6, Canada',
    email: 'info@analyticalliance.ca',
    phone: '306-515-1386',
    hours: 'Monday–Friday, 9:00 AM – 5:00 PM MST',
    websitePaths: {
        home: '/',
        about: '/about',
        services: '/services',
        team: '/team',
        resources: '/resources',
        contact: '/contact',
    },
    services: [
        'Personal Tax Services (T1 returns, planning, CRA support)',
        'Corporate & Business Services (T2, GST/HST, payroll, bookkeeping)',
        'Advisory & Planning (estate planning, CRA disputes, new immigrant tax)',
    ],
};

/**
 * Q&A knowledge base — add or edit entries here.
 * The assistant uses these as the primary source of truth for answers.
 */
export const chatbotKnowledgeBase: ChatbotKnowledgeEntry[] = [
    {
        question: 'What services do you offer?',
        answer:
            'We offer personal tax (T1), corporate tax and bookkeeping (T2, GST/HST, payroll), and advisory services including tax planning, CRA representation, and business incorporation guidance. Visit our Services page for full details.',
    },
    {
        question: 'Where is your office located?',
        answer:
            'Our office is at 7618 10th Ave NW, Edmonton, AB T6K 2T6, Canada. You can also book virtual meetings across Canada.',
    },
    {
        question: 'How can I contact you?',
        answer:
            'Call us at 306-515-1386, email info@analyticalliance.ca, or use the contact form on our Contact page. We typically reply to emails within 24 hours.',
    },
    {
        question: 'What are your business hours?',
        answer: 'We are open Monday through Friday, 9:00 AM to 5:00 PM MST.',
    },
    {
        question: 'Do you help with CRA audits?',
        answer:
            'Yes. We provide CRA audit support and representation for both personal and corporate clients, including correspondence and dispute resolution.',
    },
    {
        question: 'Do you prepare corporate tax returns?',
        answer:
            'Yes. We prepare T2 corporate tax returns, financial statements, GST/HST filings, payroll (T4/T4A/T5), and ongoing bookkeeping.',
    },
    {
        question: 'Do you work with self-employed clients?',
        answer:
            'Yes. We support self-employed individuals including rideshare, taxi, home daycare, and other sole proprietorships with T1 filing and tax planning.',
    },
    {
        question: 'Who founded Analytic Alliance CPA?',
        answer:
            'Mohammad Atiqul Islam is the founder and CEO of Analytic Alliance CPA, leading the firm with a focus on accuracy and client-focused service.',
    },
    // Short phrasing (matches suggestion chips)
    {
        question: 'Where is your office?',
        answer:
            'Our office is at 7618 10th Ave NW, Edmonton, AB T6K 2T6, Canada. You can also book virtual meetings across Canada.',
    },
    {
        question: 'Who founded the firm?',
        answer:
            'Mohammad Atiqul Islam is the founder and CEO of Analytic Alliance CPA, leading the firm with a focus on accuracy and client-focused service.',
    },
];

/** Pool of quick-reply chips — 3–4 are shown at a time and rotate after each message. */
export const chatbotSuggestionPool: string[] = [
    'What services do you offer?',
    'Where is your office?',
    'How can I contact you?',
    'What are your business hours?',
    'Do you help with CRA audits?',
    'Do you prepare corporate tax returns?',
    'Do you work with self-employed clients?',
    'Who founded the firm?',
];

const SUGGESTION_COUNT = 4;

function normalizeSuggestion(text: string): string {
    return text.trim().toLowerCase();
}

/** Pick 4 suggestions, skipping questions the user already asked. */
export function pickChatSuggestions(exclude: string[] = []): string[] {
    const excludeSet = new Set(exclude.map(normalizeSuggestion));
    const available = chatbotSuggestionPool.filter((q) => !excludeSet.has(normalizeSuggestion(q)));

    const pool = available.length >= SUGGESTION_COUNT ? available : [...chatbotSuggestionPool];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, SUGGESTION_COUNT);
}

export const chatbotWelcomeMessage = `Hi! I'm the ${chatbotCompany.name} assistant. Ask me about our services, location, hours, or how to get in touch.`;

export const chatbotModel = 'gemini-2.5-flash';
