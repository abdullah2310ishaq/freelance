import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, FileText, Link2, ClipboardList } from 'lucide-react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const ClientQueries: React.FC = () => {
    // Accordion open/close state logic (null matlab sab closed hain)
    const [openFaqId, setOpenFaqId] = useState<number | null>(1);

    const faqs: FAQItem[] = [
        {
            id: 1,
            question: "What services do you offer?",
            answer: "We offer complete corporate and personal tax preparation, GST/HST registration and filing, full-cycle bookkeeping, payroll services (T4/T5), and professional business incorporation advisory services across Alberta and Saskatchewan."
        },
        {
            id: 2,
            question: "Do you help with tax filing in Canada?",
            answer: "Yes, we specialize in Canadian tax compliance. Our team prepares accurate corporate income tax returns (T2), personal returns (T1), and handles all necessary communication and dispute resolution directly with the CRA."
        },
        {
            id: 3,
            question: "Are your services suitable for small businesses?",
            answer: "Absolutely. We tailor our accounting systems specifically for small to mid-sized businesses, startups, and self-employed professionals (including ride-share drivers and home daycares) to maximize deductions efficiently."
        },
        {
            id: 4,
            question: "Do you offer consultation before onboarding?",
            answer: "Yes, we provide an initial strategic consultation to analyze your financial landscape, assess your compliance requirements, and build a structured service roadmap that fits your business schedule."
        }
    ];

    const toggleFaq = (id: number) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    return (
        <section className="w-full bg-[#FFFFFF] py-16 lg:py-24 select-none">
            <div className="max-w-none w-full pl-6 pr-4 sm:pl-12 sm:pr-6 lg:pl-36 lg:pr-6 mx-auto">

                {/* Main split grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* LEFT COLUMN: FAQ Accordions (Occupies 6 columns) */}
                    <div className="lg:col-span-6 flex flex-col w-full">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3864] font-serif mb-8 tracking-wide">
                            Client Inquiries
                        </h2>

                        <div className="border-t border-gray-100 divide-y divide-gray-100">
                            {faqs.map((faq) => {
                                const isOpen = openFaqId === faq.id;
                                return (
                                    <div key={faq.id} className="py-4">
                                        {/* Accordion Header Trigger */}
                                        <button
                                            onClick={() => toggleFaq(faq.id)}
                                            className="w-full flex items-center justify-between text-left group"
                                        >
                                            <span className={`text-[15px] sm:text-base font-bold tracking-wide transition-colors duration-200
                        ${isOpen ? 'text-[#c90a14]' : 'text-gray-800 group-hover:text-[#1F3864]'}`}
                                            >
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`h-4 w-4 text-gray-400 transform transition-transform duration-300 flex-shrink-0 ml-4
                          ${isOpen ? 'rotate-180 text-[#c90a14]' : ''}`}
                                            />
                                        </button>

                                        {/* Accordion Content Body */}
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out text-gray-600 text-xs sm:text-sm leading-relaxed
                        ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 overflow-hidden'}`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="pb-1 text-gray-600 font-medium">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Red Resource Box Widget (Occupies 6 columns) */}
                    <div className="lg:col-span-6 w-full pt-2">
                        {/* Title outside in blue above */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#1F3864] font-serif mb-8 tracking-wide">
                            Helpful Resources
                        </h3>
                        <div className="bg-[#c90a14] rounded-[28px] p-6 sm:p-10 text-white shadow-md flex flex-col relative overflow-hidden">

                            {/* Subtle background ring flare for premium depth */}
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />

                            <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-8 font-medium">
                                Access our curated list of financial guides, checklists, and official links to assist in your administrative preparation.
                            </p>

                            {/* Resource Bullet List Links */}
                            <div className="space-y-5 mb-8">
                                <a href="#" className="flex items-center space-x-3.5 group text-white/90 hover:text-white transition-colors">
                                    <FileText className="h-4 w-4 text-white/80 group-hover:scale-110 transition-transform flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-semibold tracking-wide border-b border-transparent group-hover:border-white/40 pb-0.5">
                                        Annual Corporate Tax Guides
                                    </span>
                                </a>

                                <a href="#" className="flex items-center space-x-3.5 group text-white/90 hover:text-white transition-colors">
                                    <Link2 className="h-4 w-4 text-white/80 group-hover:scale-110 transition-transform flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-semibold tracking-wide border-b border-transparent group-hover:border-white/40 pb-0.5">
                                        CRA (Canada Revenue Agency) Official Resources
                                    </span>
                                </a>

                                <a href="#" className="flex items-center space-x-3.5 group text-white/90 hover:text-white transition-colors">
                                    <ClipboardList className="h-4 w-4 text-white/80 group-hover:scale-110 transition-transform flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-semibold tracking-wide border-b border-transparent group-hover:border-white/40 pb-0.5">
                                        New Client Document Checklists
                                    </span>
                                </a>
                            </div>

                            {/* CTA Action Yellow Button */}
                            <div className="w-full">
                                <Link to="/resources" className="w-full sm:w-auto bg-[#fab802] hover:bg-[#e0a400] text-black font-bold px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all text-sm sm:text-base active:scale-[0.98] text-center inline-block">
                                    Access Client Resources
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ClientQueries;