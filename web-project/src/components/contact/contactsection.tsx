import React, { useState } from 'react';

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
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24 select-none">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* Left Side: Contact Info */}
                <div className="lg:col-span-4 flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F3864] leading-tight">
                            We’d love to hear from you
                        </h2>
                        <p className="text-neutral-400 text-sm md:text-base font-normal max-w-md leading-relaxed">
                            Need something cleared up? Here are our most frequently asked questions.
                        </p>
                    </div>

                    {/* Info Details Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                        {/* Email Contact */}
                        <div className="flex flex-col gap-3">
                            <div className="w-11 h-11 bg-[#FFF5F5] rounded-xl flex items-center justify-center border border-[#FFE3E3]">
                                <svg className="w-5 h-5 text-[#EF4444]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
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
                            <div className="w-11 h-11 bg-[#FFF5F5] rounded-xl flex items-center justify-center border border-[#FFE3E3]">
                                <svg className="w-5 h-5 text-[#EF4444]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.147-7.147c-.154-.441.012-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.107a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-gray-900 font-bold text-lg mb-1">Phone</h3>
                                <p className="text-neutral-400 text-sm mb-2">Mon-Fri from 8am to 5pm.</p>
                                <a href="tel:306-515-1386" className="text-[#1F3864] font-bold text-sm hover:underline">
                                    306-515-1386
                                </a>
                            </div>
                        </div>

                        {/* Office Contact */}
                        <div className="flex flex-col gap-3 col-span-2">
                            <div className="w-11 h-11 bg-[#FFF5F5] rounded-xl flex items-center justify-center border border-[#FFE3E3]">
                                <svg className="w-5 h-5 text-[#EF4444]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
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
                <div className="lg:col-span-5 lg:col-start-8 bg-white flex flex-col gap-6 w-full">
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
                                    className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-gray-700">Last name</label>
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif"
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
                                className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-700">Phone number</label>
                            <div className="flex border border-neutral-200 rounded-lg overflow-hidden focus-within:border-neutral-400">
                                <div className="flex items-center gap-1.5 px-3 bg-transparent border-r border-neutral-200 text-sm text-gray-700 cursor-pointer select-none">
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
                                    className="w-full px-3.5 py-2.5 text-sm text-gray-900 placeholder-neutral-300 focus:outline-none font-serif"
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
                                className="w-full px-3.5 py-2.5 border border-neutral-200 rounded-lg text-sm text-gray-900 placeholder-neutral-300 focus:outline-none focus:border-neutral-400 font-serif resize-none"
                            />
                        </div>

                        {/* Privacy Policy Checkbox */}
                        <div className="flex items-center gap-3 mt-1">
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