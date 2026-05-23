import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { MessageCircle, Send, X, Sparkles } from 'lucide-react';
import {
    chatbotCompany,
    chatbotWelcomeMessage,
    createMessage,
    isChatbotConfigured,
    pickChatSuggestions,
    sendChatMessage,
} from '../../services/chatbot/api';
import type { ChatMessage } from '../../services/chatbot/types';

const TypingIndicator: React.FC = () => (
    <div className="chatbot-msg-in flex items-end gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1F3864] text-[#fab802]">
            <Sparkles className="h-4 w-4" />
        </div>
        <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm ring-1 ring-neutral-200/80">
            <div className="flex gap-1.5">
                <span className="chatbot-typing-dot h-2 w-2 rounded-full bg-[#1F3864]/40" />
                <span className="chatbot-typing-dot h-2 w-2 rounded-full bg-[#1F3864]/40 [animation-delay:0.15s]" />
                <span className="chatbot-typing-dot h-2 w-2 rounded-full bg-[#1F3864]/40 [animation-delay:0.3s]" />
            </div>
        </div>
    </div>
);

const ChatBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <div
            className={`chatbot-msg-in flex items-end gap-2 ${isUser ? 'flex-row-reverse' : ''}`}
            style={{ animationDelay: '0.02s' }}
        >
            {!isUser && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1F3864] text-[#fab802]">
                    <Sparkles className="h-4 w-4" />
                </div>
            )}
            <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                    isUser
                        ? 'rounded-br-md bg-[#fab802] text-[#1a2e5a] font-medium'
                        : 'rounded-bl-md bg-white text-neutral-700 ring-1 ring-neutral-200/80'
                }`}
            >
                {message.content}
            </div>
        </div>
    );
};

const ChatbotWidget: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>(() => pickChatSuggestions());
    const listRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const aiEnabled = isChatbotConfigured();

    useEffect(() => {
        if (open && messages.length === 0) {
            setMessages([createMessage('assistant', chatbotWelcomeMessage)]);
            setSuggestions(pickChatSuggestions());
        }
    }, [open, messages.length]);

    useEffect(() => {
        if (open) {
            listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, isTyping, open]);

    useEffect(() => {
        if (open) {
            const t = window.setTimeout(() => inputRef.current?.focus(), 280);
            return () => window.clearTimeout(t);
        }
    }, [open]);

    const handleSend = async (text?: string) => {
        const content = (text ?? input).trim();
        if (!content || isTyping) return;

        setError('');
        setInput('');
        const userMsg = createMessage('user', content);
        const history = messages.filter((m) => m.role === 'user' || m.role === 'assistant');
        const askedSoFar = [
            ...history.filter((m) => m.role === 'user').map((m) => m.content),
            content,
        ];
        setMessages((prev) => [...prev, userMsg]);
        setIsTyping(true);

        try {
            const reply = await sendChatMessage(content, history);
            setMessages((prev) => [...prev, createMessage('assistant', reply)]);
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
            setError(msg);
        } finally {
            setIsTyping(false);
            setSuggestions(pickChatSuggestions(askedSoFar));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            void handleSend();
        }
    };

    const widget = (
        <div className="chatbot-root" aria-live="polite">
            {/* Floating launcher — always visible on every page */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
                className={`chatbot-fab fixed flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                    open
                        ? 'bg-[#1F3864] text-white'
                        : 'bg-[#fab802] text-[#1F3864] chatbot-pulse'
                }`}
            >
                {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
            </button>

            {/* Chat panel */}
            <div
                role="dialog"
                aria-label="Chat assistant"
                aria-hidden={!open}
                className={`chatbot-panel fixed flex w-[min(100vw-2rem,400px)] flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-2xl transition-all duration-300 origin-bottom-right ${
                    open
                        ? 'chatbot-panel-in pointer-events-auto scale-100 opacity-100'
                        : 'pointer-events-none scale-95 opacity-0 translate-y-4'
                }`}
                style={{ maxHeight: 'min(72vh, 640px)' }}
            >
                {/* Header */}
                <div className="flex items-center gap-3 bg-[#1F3864] px-4 py-3.5 text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#fab802]">
                        <Sparkles className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-sm">{chatbotCompany.name}</p>
                        <p className="text-[11px] text-white/70">
                            {aiEnabled ? 'AI assistant · Online' : 'Site assistant · Online'}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-lg p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
                        aria-label="Close chat"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Messages */}
                <div
                    ref={listRef}
                    className="flex flex-1 flex-col gap-3 overflow-y-auto px-3 py-4"
                    style={{ minHeight: '280px', maxHeight: 'calc(min(72vh, 640px) - 168px)' }}
                >
                    {messages.map((msg) => (
                        <ChatBubble key={msg.id} message={msg} />
                    ))}
                    {isTyping && <TypingIndicator />}
                </div>

                {/* Suggested questions — always 4 options, rotate after each reply */}
                {!isTyping && suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-2 border-t border-neutral-200/80 bg-white/60 px-3 py-2.5">
                        {suggestions.map((q) => (
                            <button
                                key={q}
                                type="button"
                                onClick={() => void handleSend(q)}
                                className="rounded-full border border-[#1F3864]/15 bg-white px-3 py-1 text-[11px] font-medium text-[#1F3864] transition hover:border-[#fab802] hover:bg-[#fab802]/10 active:scale-[0.98]"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                )}

                {error && (
                    <p className="px-4 pb-1 text-xs text-red-600" role="alert">
                        {error}
                    </p>
                )}

                {/* Input */}
                <div className="border-t border-neutral-200/80 bg-white p-3">
                    <div className="flex items-end gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-2 py-1.5 focus-within:border-[#1F3864]/40 focus-within:ring-2 focus-within:ring-[#1F3864]/10">
                        <textarea
                            ref={inputRef}
                            rows={1}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask about our services…"
                            disabled={isTyping}
                            className="max-h-24 min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 disabled:opacity-60"
                        />
                        <button
                            type="button"
                            onClick={() => void handleSend()}
                            disabled={!input.trim() || isTyping}
                            aria-label="Send message"
                            className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1F3864] text-[#fab802] transition hover:bg-[#162d52] disabled:cursor-not-allowed disabled:opacity-40 active:scale-95"
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                    <p className="mt-2 text-center text-[10px] text-neutral-400">
                        General info only ·{' '}
                        <Link to="/contact" className="text-[#1F3864] underline-offset-2 hover:underline">
                            Contact us
                        </Link>{' '}
                        for advice
                    </p>
                </div>
            </div>
        </div>
    );

    return createPortal(widget, document.body);
};

export default ChatbotWidget;
