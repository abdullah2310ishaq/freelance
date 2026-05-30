import React, { useEffect, useRef, useState } from 'react';
import emailIcon from '../../assets/contact/email.svg';
import phoneIcon from '../../assets/contact/phone.svg';
import officeIcon from '../../assets/contact/office.svg';
import { countries, defaultCountry, type Country } from './countries';
import { companyEmail, companyPhone } from '../../config/companyContact';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        agreeToPolicy: false,
    });
    const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
    const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState('');
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredCountries = countries.filter(
        (c) =>
            c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
            c.dialCode.includes(countrySearch) ||
            c.code.toLowerCase().includes(countrySearch.toLowerCase()),
    );

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setCountryDropdownOpen(false);
                setCountrySearch('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
            agreeToPolicy: false,
        });
        setSelectedCountry(defaultCountry);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');

        if (!formData.firstName.trim() || !formData.lastName.trim()) {
            setErrorMessage('Please enter your first and last name.');
            return;
        }
        if (!formData.email.trim()) {
            setErrorMessage('Please enter your email address.');
            return;
        }
        if (!formData.agreeToPolicy) {
            setErrorMessage('Please agree to the privacy policy before submitting.');
            return;
        }
        if (!WEB3FORMS_ACCESS_KEY) {
            setErrorMessage('Form is not configured. Please contact us directly by email or phone.');
            setFormStatus('error');
            return;
        }

        setFormStatus('submitting');

        const fullPhone = formData.phoneNumber.trim()
            ? `${selectedCountry.dialCode} ${formData.phoneNumber.trim()}`
            : 'Not provided';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: 'New contact form submission — Alliance Accounting',
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: fullPhone,
                    country: selectedCountry.name,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setFormStatus('success');
                resetForm();
            } else {
                setFormStatus('error');
                setErrorMessage(result.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setFormStatus('error');
            setErrorMessage('Network error. Please check your connection and try again.');
        }
    };

    const selectCountry = (country: Country) => {
        setSelectedCountry(country);
        setCountryDropdownOpen(false);
        setCountrySearch('');
    };

    return (
        <section className="w-full bg-white py-16 md:py-24 pl-4 md:pl-8 lg:pl-16 pr-6 md:pr-12 lg:pr-24 select-none">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* Left Side: Contact Info */}
                <div className="lg:col-span-5 flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F3864] leading-tight">
                            We’d love to hear from you
                        </h2>
                        <p className="text-neutral-400 text-sm md:text-base font-normal max-w-md leading-relaxed">
                            Need something cleared up? Here are our most frequently asked questions.
                        </p>
                    </div>

                    {/* Info Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-32 gap-y-8">
                        {/* Email Contact */}
                        <div className="flex flex-col gap-3">
                            <img
                                src={emailIcon}
                                alt="Email Icon"
                                className="w-11 h-11 shrink-0 object-contain"
                            />
                            <div>
                                <h3 className="text-gray-900 font-bold text-lg mb-1">Email</h3>
                                <p className="text-neutral-400 text-sm mb-2">Our friendly team is here to help.</p>
                                <a href={`mailto:${companyEmail}`} className="text-[#1F3864] font-bold text-sm hover:underline">
                                    {companyEmail}
                                </a>
                            </div>
                        </div>

                        {/* Phone Contact */}
                        <div className="flex flex-col gap-3">
                            <img
                                src={phoneIcon}
                                alt="Phone Icon"
                                className="w-11 h-11 shrink-0 object-contain"
                            />
                            <div>
                                <h3 className="text-gray-900 font-bold text-lg mb-1">Phone</h3>
                                <p className="text-neutral-400 text-sm mb-2">Mon-Fri from 8am to 5pm.</p>
                                <a href={`tel:${companyPhone.tel}`} className="text-[#1F3864] font-bold text-sm hover:underline">
                                    {companyPhone.display}
                                </a>
                            </div>
                        </div>

                        {/* Office Contact */}
                        <div className="flex flex-col gap-3 col-span-1 md:col-span-2">
                            <img
                                src={officeIcon}
                                alt="Office Icon"
                                className="w-11 h-11 shrink-0 object-contain"
                            />
                            <div>
                                <h3 className="text-gray-900 font-bold text-lg mb-1">Office</h3>
                                <p className="text-neutral-400 text-sm mb-2">Come say hello at our office HQ.</p>
                                <a
                                    href="https://maps.google.com/?q=7618+10th+Ave+NW,+Edmonton,+AB+T6K2T6"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#1F3864] font-bold text-sm hover:underline"
                                >
                                    7618 10th Ave NW, Edmonton, AB T6K2T6
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="lg:col-span-6 lg:col-start-7 bg-white flex flex-col gap-6 w-full">
                    <div className="flex flex-col gap-1.5">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1F3864] tracking-tight">
                            Get in touch
                        </h2>
                        <p className="text-neutral-400 text-xs md:text-sm font-normal">
                            We’d love to hear from you. Please fill out this form.
                        </p>
                    </div>

                    {formStatus === 'success' && (
                        <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
                            Thank you! Your message has been sent. We&apos;ll get back to you soon.
                        </div>
                    )}

                    {formStatus === 'error' && errorMessage && (
                        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="first-name" className="text-xs font-semibold text-gray-700">First name</label>
                                <input
                                    id="first-name"
                                    type="text"
                                    placeholder="First name"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-base md:text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="last-name" className="text-xs font-semibold text-gray-700">Last name</label>
                                <input
                                    id="last-name"
                                    type="text"
                                    placeholder="Last name"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-base md:text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-xs font-semibold text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@company.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-base md:text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="phone-number" className="text-xs font-semibold text-gray-700">Phone number</label>
                            <div className="flex border border-neutral-200 rounded-lg overflow-visible focus-within:border-neutral-400 relative">
                                <div ref={dropdownRef} className="relative shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => setCountryDropdownOpen((open) => !open)}
                                        className="flex items-center gap-1.5 px-3 h-full min-h-[42px] bg-transparent border-r border-neutral-200 text-base md:text-sm text-gray-700 hover:bg-neutral-50 transition-colors"
                                        aria-expanded={countryDropdownOpen}
                                        aria-haspopup="listbox"
                                    >
                                        <span className="text-base leading-none">{selectedCountry.flag}</span>
                                        <span className="font-medium">{selectedCountry.dialCode}</span>
                                        <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>

                                    {countryDropdownOpen && (
                                        <div className="absolute top-full left-0 z-50 mt-1 w-72 bg-white border border-neutral-200 rounded-lg shadow-lg overflow-hidden">
                                            <div className="p-2 border-b border-neutral-100">
                                                <input
                                                    type="text"
                                                    placeholder="Search country..."
                                                    value={countrySearch}
                                                    onChange={(e) => setCountrySearch(e.target.value)}
                                                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-md focus:outline-none focus:border-neutral-400 font-serif"
                                                    autoFocus
                                                />
                                            </div>
                                            <ul
                                                role="listbox"
                                                className="max-h-52 overflow-y-auto py-1"
                                            >
                                                {filteredCountries.length === 0 ? (
                                                    <li className="px-3 py-2 text-sm text-neutral-400">No countries found</li>
                                                ) : (
                                                    filteredCountries.map((country) => (
                                                        <li key={country.code} role="option" aria-selected={selectedCountry.code === country.code}>
                                                            <button
                                                                type="button"
                                                                onClick={() => selectCountry(country)}
                                                                className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-neutral-50 transition-colors ${
                                                                    selectedCountry.code === country.code ? 'bg-neutral-50 font-semibold' : ''
                                                                }`}
                                                            >
                                                                <span className="text-base leading-none">{country.flag}</span>
                                                                <span className="flex-1 truncate">{country.name}</span>
                                                                <span className="text-neutral-400 shrink-0">{country.dialCode}</span>
                                                            </button>
                                                        </li>
                                                    ))
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <input
                                    id="phone-number"
                                    type="tel"
                                    placeholder="(555) 000-0000"
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    className="w-full px-3.5 py-2.5 text-base md:text-sm text-gray-900 placeholder-neutral-300 focus:outline-none font-serif"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-xs font-semibold text-gray-700">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Leave us a message..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-base md:text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif resize-none"
                            />
                        </div>

                        {/* Privacy Policy Checkbox */}
                        <div className="flex items-start md:items-center gap-3 mt-1 pt-0.5 md:pt-0">
                            <input
                                type="checkbox"
                                id="privacy-policy"
                                checked={formData.agreeToPolicy}
                                onChange={(e) => setFormData({ ...formData, agreeToPolicy: e.target.checked })}
                                className="w-4 h-4 rounded border-gray-300 text-[#FABE00] focus:ring-0 cursor-pointer accent-[#FABE00]"
                            />
                            <label htmlFor="privacy-policy" className="text-xs md:text-sm font-semibold text-gray-700 cursor-pointer select-none">
                                You agree to our friendly privacy policy.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-2">
                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full py-2.5 bg-[#FABE00] hover:bg-[#E0AB00] disabled:opacity-60 disabled:cursor-not-allowed text-gray-900 font-bold text-sm tracking-wide rounded-full transition-colors duration-200 shadow-sm active:scale-[0.99]"
                            >
                                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;