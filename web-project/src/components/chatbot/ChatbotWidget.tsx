import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle, Phone, Send, Sparkles, X } from 'lucide-react';
import { countries, defaultCountry, type Country } from '../contact/countries';
import {
    chatbotCompany,
    chatbotWelcomeMessage,
    createMessage,
    isChatbotConfigured,
    pickChatSuggestions,
    sendChatMessage,
} from '../../services/chatbot/api';
import { chatbotWhatsApp } from '../../services/chatbot/config';
import { buildChatSummary, buildWhatsAppUrl, type VisitorInfo } from '../../services/chatbot/summary';
import type { ChatMessage } from '../../services/chatbot/types';

type ChatPhase = 'intake' | 'active' | 'ended';

const TypingIndicator: React.FC = () => (
    <div className="chatbot-msg-in flex items-end gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F3864] text-[#fab802]">
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
            className={`chatbot-msg-in flex items-end gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
            style={{ animationDelay: '0.02s' }}
        >
            {!isUser && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F3864] text-[#fab802]">
                    <Sparkles className="h-4 w-4" />
                </div>
            )}
            <div
                className={`max-w-[88%] break-words rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
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
    const [phase, setPhase] = useState<ChatPhase>('intake');
    const [visitorName, setVisitorName] = useState('');
    const [phoneDigits, setPhoneDigits] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState('');
    const [intakeError, setIntakeError] = useState('');
    const [visitor, setVisitor] = useState<VisitorInfo | null>(null);
    const [whatsappUrl, setWhatsappUrl] = useState('');

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>(() => pickChatSuggestions());

    const listRef = useRef<HTMLDivElement>(null);
    const intakeRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const countryPickerRef = useRef<HTMLDivElement>(null);
    const aiEnabled = isChatbotConfigured();

    const filteredCountries = countries.filter(
        (c) =>
            c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
            c.dialCode.includes(countrySearch) ||
            c.code.toLowerCase().includes(countrySearch.toLowerCase()),
    );

    const resetSession = () => {
        setPhase('intake');
        setVisitorName('');
        setPhoneDigits('');
        setSelectedCountry(defaultCountry);
        setCountryDropdownOpen(false);
        setCountrySearch('');
        setIntakeError('');
        setVisitor(null);
        setWhatsappUrl('');
        setInput('');
        setMessages([]);
        setError('');
        setIsTyping(false);
        setSuggestions(pickChatSuggestions());
    };

    const handleClose = () => {
        setOpen(false);
        resetSession();
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (countryPickerRef.current && !countryPickerRef.current.contains(e.target as Node)) {
                setCountryDropdownOpen(false);
                setCountrySearch('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (open && phase === 'active' && messages.length === 0) {
            setMessages([createMessage('assistant', chatbotWelcomeMessage)]);
            setSuggestions(pickChatSuggestions());
        }
    }, [open, phase, messages.length]);

    useEffect(() => {
        if (open) {
            listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, isTyping, open, phase]);

    useEffect(() => {
        if (open && phase === 'active') {
            const t = window.setTimeout(() => inputRef.current?.focus(), 280);
            return () => window.clearTimeout(t);
        }
    }, [open, phase]);

    const handleStartChat = () => {
        const name = visitorName.trim();
        const digits = phoneDigits.replace(/\D/g, '');

        if (!name) {
            setIntakeError('Please enter your name.');
            return;
        }
        if (digits.length < 6) {
            setIntakeError('Please enter a valid phone number.');
            return;
        }

        const fullPhone = `${selectedCountry.dialCode} ${phoneDigits.trim()}`;
        setVisitor({ name, fullPhone });
        setIntakeError('');
        setCountryDropdownOpen(false);
        setPhase('active');
    };

    const handleEndChat = () => {
        if (!visitor) return;

        const summary = buildChatSummary(visitor, messages);
        setWhatsappUrl(buildWhatsAppUrl(chatbotWhatsApp.waNumber, summary));
        setPhase('ended');
        setInput('');
        setError('');
        setSuggestions([]);
    };

    const handleSend = async (text?: string) => {
        const content = (text ?? input).trim();
        if (!content || isTyping || phase !== 'active') return;

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

    const selectCountry = (country: Country) => {
        setSelectedCountry(country);
        setCountryDropdownOpen(false);
        setCountrySearch('');
    };

    const widget = (
        <div className="chatbot-root" aria-live="polite">
            <button
                type="button"
                onClick={() => (open ? handleClose() : setOpen(true))}
                aria-expanded={open}
                aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
                className={`chatbot-fab fixed flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                    open
                        ? 'bg-[#1F3864] text-white'
                        : 'bg-[#fab802] text-[#1F3864] chatbot-pulse'
                }`}
            >
                {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
            </button>

            <div
                role="dialog"
                aria-label="Chat assistant"
                aria-hidden={!open}
                className={`chatbot-panel fixed flex flex-col rounded-2xl border border-neutral-200/80 bg-neutral-50 shadow-2xl transition-all duration-300 origin-bottom-right ${
                    open
                        ? 'chatbot-panel-in pointer-events-auto scale-100 opacity-100'
                        : 'pointer-events-none scale-95 opacity-0 translate-y-4'
                }`}
            >
                {/* Header */}
                <div className="flex shrink-0 items-center gap-2.5 border-b border-[#1F3864]/20 bg-[#1F3864] px-4 py-3.5 text-white sm:gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#fab802]">
                        <Sparkles className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold sm:text-base">{chatbotCompany.name}</p>
                        <p className="truncate text-[11px] text-white/70 sm:text-xs">
                            {phase === 'intake'
                                ? 'Start a conversation'
                                : phase === 'ended'
                                  ? 'Chat ended'
                                  : aiEnabled
                                    ? 'AI assistant · Online'
                                    : 'Site assistant · Online'}
                        </p>
                    </div>
                    {phase === 'active' && (
                        <button
                            type="button"
                            onClick={handleEndChat}
                            className="shrink-0 rounded-lg border border-white/25 px-2 py-1.5 text-[10px] font-semibold text-white transition hover:bg-white/10 sm:px-2.5 sm:text-[11px]"
                        >
                            End chat
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={handleClose}
                        className="shrink-0 rounded-lg p-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
                        aria-label="Close chat"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Intake */}
                {phase === 'intake' && (
                    <div ref={intakeRef} className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-5">
                        <div className="mb-1">
                            <h3 className="text-base font-semibold text-[#1F3864] sm:text-lg">Before we chat</h3>
                            <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                                Enter your name and phone number so we can follow up after your conversation.
                            </p>
                        </div>

                        <div className="mt-4 flex flex-col gap-1.5">
                            <label htmlFor="chatbot-name" className="text-xs font-semibold text-neutral-700 sm:text-sm">
                                Full name
                            </label>
                            <input
                                id="chatbot-name"
                                type="text"
                                value={visitorName}
                                onChange={(e) => setVisitorName(e.target.value)}
                                placeholder="Your name"
                                className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-3 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-[#1F3864]/40 focus:ring-2 focus:ring-[#1F3864]/10 sm:text-base"
                            />
                        </div>

                        <div className="mt-4 flex flex-col gap-1.5">
                            <label htmlFor="chatbot-phone" className="text-xs font-semibold text-neutral-700 sm:text-sm">
                                Phone number
                            </label>
                            <div ref={countryPickerRef} className="flex flex-col gap-2">
                                <div className="flex w-full min-w-0 rounded-xl border border-neutral-200 bg-white focus-within:border-[#1F3864]/40 focus-within:ring-2 focus-within:ring-[#1F3864]/10">
                                    <button
                                        type="button"
                                        onClick={() => setCountryDropdownOpen((v) => !v)}
                                        className="flex shrink-0 items-center gap-1.5 border-r border-neutral-200 px-3 py-3 text-sm text-neutral-700 hover:bg-neutral-50 sm:px-3.5"
                                        aria-expanded={countryDropdownOpen}
                                        aria-haspopup="listbox"
                                    >
                                        <span className="text-base leading-none">{selectedCountry.flag}</span>
                                        <span className="whitespace-nowrap font-medium">{selectedCountry.dialCode}</span>
                                        <ChevronDown
                                            className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    <input
                                        id="chatbot-phone"
                                        type="tel"
                                        value={phoneDigits}
                                        onChange={(e) => setPhoneDigits(e.target.value)}
                                        placeholder="Phone number"
                                        className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 sm:text-base"
                                    />
                                </div>

                                {countryDropdownOpen && (
                                    <div className="w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-md">
                                        <div className="border-b border-neutral-100 p-2.5">
                                            <input
                                                type="text"
                                                placeholder="Search country..."
                                                value={countrySearch}
                                                onChange={(e) => setCountrySearch(e.target.value)}
                                                className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm outline-none focus:border-[#1F3864]/40 sm:text-base"
                                                autoFocus
                                            />
                                        </div>
                                        <ul role="listbox" className="max-h-52 overflow-y-auto overscroll-contain py-1 sm:max-h-56">
                                            {filteredCountries.length === 0 ? (
                                                <li className="px-3 py-2.5 text-sm text-neutral-400">No countries found</li>
                                            ) : (
                                                filteredCountries.map((country) => (
                                                    <li key={country.code} role="option" aria-selected={selectedCountry.code === country.code}>
                                                        <button
                                                            type="button"
                                                            onClick={() => selectCountry(country)}
                                                            className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-sm hover:bg-neutral-50 sm:text-base ${
                                                                selectedCountry.code === country.code ? 'bg-neutral-50 font-semibold' : ''
                                                            }`}
                                                        >
                                                            <span className="shrink-0 text-base">{country.flag}</span>
                                                            <span className="min-w-0 flex-1 truncate">{country.name}</span>
                                                            <span className="shrink-0 text-neutral-400">{country.dialCode}</span>
                                                        </button>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {intakeError && (
                            <p className="mt-3 text-xs text-red-600 sm:text-sm" role="alert">
                                {intakeError}
                            </p>
                        )}

                        <div className="mt-5 pb-1">
                            <button
                                type="button"
                                onClick={handleStartChat}
                                className="w-full rounded-xl bg-[#1F3864] py-3.5 text-sm font-semibold text-[#fab802] transition hover:bg-[#162d52] active:scale-[0.99] sm:text-base"
                            >
                                Start chat
                            </button>
                        </div>
                    </div>
                )}

                {/* Ended */}
                {phase === 'ended' && (
                    <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-5 overflow-y-auto overscroll-contain px-5 py-8 text-center">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                            <Phone className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-[#1F3864] sm:text-lg">Thanks, {visitor?.name}!</h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                                Send your chat summary to us on WhatsApp at{' '}
                                <span className="font-semibold text-[#1F3864]">{chatbotWhatsApp.display}</span>.
                                We&apos;ll get back to you soon.
                            </p>
                        </div>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1fb855] active:scale-[0.99] sm:text-base"
                        >
                            Send on WhatsApp
                        </a>
                        <button
                            type="button"
                            onClick={resetSession}
                            className="text-xs font-medium text-[#1F3864] underline-offset-2 hover:underline sm:text-sm"
                        >
                            Start a new chat
                        </button>
                    </div>
                )}

                {/* Active chat */}
                {phase === 'active' && (
                    <>
                        <div
                            ref={listRef}
                            className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain px-3 py-4 sm:px-4"
                        >
                            {messages.map((msg) => (
                                <ChatBubble key={msg.id} message={msg} />
                            ))}
                            {isTyping && <TypingIndicator />}
                        </div>

                        {!isTyping && suggestions.length > 0 && (
                            <div className="flex max-h-28 shrink-0 flex-wrap gap-2 overflow-y-auto overscroll-contain border-t border-neutral-200/80 bg-white/80 px-3 py-2.5 sm:px-4">
                                {suggestions.map((q) => (
                                    <button
                                        key={q}
                                        type="button"
                                        onClick={() => void handleSend(q)}
                                        className="max-w-full truncate rounded-full border border-[#1F3864]/15 bg-white px-3 py-1.5 text-[11px] font-medium text-[#1F3864] transition hover:border-[#fab802] hover:bg-[#fab802]/10 active:scale-[0.98] sm:text-xs"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {error && (
                            <p className="shrink-0 px-4 pb-1 text-xs text-red-600 sm:text-sm" role="alert">
                                {error}
                            </p>
                        )}

                        <div className="shrink-0 border-t border-neutral-200/80 bg-white p-3 sm:p-4">
                            <div className="flex items-end gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-2 py-1.5 focus-within:border-[#1F3864]/40 focus-within:ring-2 focus-within:ring-[#1F3864]/10">
                                <textarea
                                    ref={inputRef}
                                    rows={1}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask about our services…"
                                    disabled={isTyping}
                                    className="max-h-28 min-h-[44px] flex-1 resize-none bg-transparent px-2 py-2.5 text-sm text-neutral-800 outline-none placeholder:text-neutral-400 disabled:opacity-60 sm:text-base"
                                />
                                <button
                                    type="button"
                                    onClick={() => void handleSend()}
                                    disabled={!input.trim() || isTyping}
                                    aria-label="Send message"
                                    className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1F3864] text-[#fab802] transition hover:bg-[#162d52] disabled:cursor-not-allowed disabled:opacity-40 active:scale-95"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                            <p className="mt-2 text-center text-[10px] text-neutral-400 sm:text-[11px]">
                                General info only ·{' '}
                                <Link to="/contact" className="text-[#1F3864] underline-offset-2 hover:underline">
                                    Contact us
                                </Link>{' '}
                                for advice
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );

    return createPortal(widget, document.body);
};

export default ChatbotWidget;
