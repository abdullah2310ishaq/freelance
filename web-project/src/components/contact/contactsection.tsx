import React, { useState } from 'react';
import emailIcon from '../../assets/contact/email.svg';
import phoneIcon from '../../assets/contact/phone.svg';
import officeIcon from '../../assets/contact/office.svg';

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        agreeToPolicy: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
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
                                <a href="mailto:info@allianceaccountingcpa.ca" className="text-[#1F3864] font-bold text-sm hover:underline">
                                    info@allianceaccountingcpa.ca
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
                                <a href="tel:306-515-1386" className="text-[#1F3864] font-bold text-sm hover:underline">
                                    306-515-1386
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

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-700">First name</label>
                                <input
                                    type="text"
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-base md:text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-700">Last name</label>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-base md:text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="you@company.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-base md:text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-700">Phone number</label>
                            <div className="flex border border-neutral-200 rounded-lg overflow-hidden focus-within:border-neutral-400">
                                <div className="flex items-center gap-1.5 px-3 bg-transparent border-r border-neutral-200 text-base md:text-sm text-gray-700 cursor-pointer select-none">
                                    <span>US</span>
                                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    className="w-full px-3.5 py-2.5 text-base md:text-sm text-gray-900 placeholder-neutral-300 focus:outline-none font-serif"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-700">Message</label>
                            <textarea
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
                                className="w-full py-2.5 bg-[#FABE00] hover:bg-[#E0AB00] text-gray-900 font-bold text-sm tracking-wide rounded-full transition-colors duration-200 shadow-sm active:scale-[0.99]"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;