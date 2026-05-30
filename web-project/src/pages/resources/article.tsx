import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, ArrowLeft, Calendar, User, BookOpen } from 'lucide-react';
import resourceHeroImg from '../../assets/resources/resourceshero.jpg';
import { companyEmail, companyPhone } from '../../config/companyContact';

interface ArticleData {
    title: string;
    date: string;
    author: string;
    tag: string;
    readTime: string;
    paragraphs: string[];
    keyPointsTitle: string;
    keyPoints: string[];
}

const articles: Record<string, ArticleData> = {
    "1": {
        title: "Year-End Tax Planning Strategies for Alberta Corporations",
        date: "Sep 12, 2026",
        author: "Analytic Alliance Tax Team",
        tag: "Corporate Tax Planning",
        readTime: "5 min read",
        paragraphs: [
            "As the fiscal year-end approaches, corporate directors and business owners in Alberta must take proactive steps to evaluate their tax positions. Corporate tax planning is not merely an exercise in filling out forms at tax season; rather, it is a strategic discipline that can significantly minimize liabilities, improve working capital, and build solid compliance history with the Canada Revenue Agency (CRA).",
            "A primary strategy involves optimizing the salary-dividend mix for owner-managers. Salaries are tax-deductible for the corporation but are subject to payroll deductions such as CPP and personal tax rates. On the other hand, dividends are paid out of the corporation's after-tax income and benefit from the dividend tax credit. Balancing these distributions effectively allows business owners to keep more of their hard-earned money.",
            "Additionally, corporations declaring bonuses at year-end must pay them out within 180 days of the fiscal year-end to qualify for deduction in the current year. Shareholder loans should also be carefully managed and repaid within one year of the end of the taxation year in which they were borrowed, preventing the CRA from classifying the loan as personal income. Finally, buying business equipment, vehicles, or IT hardware before the year-end allows you to claim depreciation (Capital Cost Allowance) early under immediate expensing rules."
        ],
        keyPointsTitle: "Essential Corporate Tax Actions",
        keyPoints: [
            "Assess the salary vs. dividend mix to optimize combined corporate and personal tax rates.",
            "Accrue bonuses at year-end and ensure they are paid out within the 180-day CRA limit.",
            "Review outstanding shareholder loans to prevent unexpected personal income inclusions.",
            "Accelerate capital asset purchases before year-end to take advantage of CCA tax depreciation rules."
        ]
    },
    "2": {
        title: "Understanding Notice to Reader Financial Statements",
        date: "Sep 8, 2026",
        author: "Analytic Alliance Accounting Team",
        tag: "Financial Reporting",
        readTime: "4 min read",
        paragraphs: [
            "For small and medium-sized business owners across Canada, the terms 'Notice to Reader' or 'Compilation Engagement' are frequently mentioned during fiscal year-ends. With the implementation of the new Canadian Standard on Related Services (CSRS 4200), the framework for compiled financial statements has evolved to bring more consistency, structure, and professional insight to business owners.",
            "Under the CSRS 4200 standard, a compilation is a professional engagement where a Chartered Professional Accountant (CPA) assists in assembling raw financial data into structured balance sheets and income statements. While it does not offer review or audit assurance regarding the accuracy of the records, the new standard requires CPAs to gain a comprehensive understanding of the business, verify accounting policies, and ask clarifying questions if figures look incomplete.",
            "Notice to Reader statements are the standard requirement for filing corporate income tax returns (T2) with the CRA. They are also widely accepted by financial institutions, lenders, and potential business investors when reviewing credit lines, evaluating cash flow health, or preparing for strategic growth advisory sessions. They provide small business owners with a clear, structured picture of their financial standing at a cost-effective rate."
        ],
        keyPointsTitle: "Key Compilation Engagement Benefits",
        keyPoints: [
            "Provides a clean, structured set of financial statements that complies with CRA corporate tax requirements.",
            "Prepares your business records for financing reviews with banks and small business lenders.",
            "Ensures your accounting policies are properly organized under the modern CSRS 4200 Canadian standards.",
            "Delivers clear financial insights at a cost-effective scale compared to audit or review engagements."
        ]
    },
    "3": {
        title: "Navigating CRA Audits: What You Need to Know",
        date: "Aug 28, 2026",
        author: "Analytic Alliance Audit Representation",
        tag: "CRA Audit Support",
        readTime: "6 min read",
        paragraphs: [
            "Receiving an official notice or audit letter from the Canada Revenue Agency (CRA) regarding personal or corporate tax returns is a source of concern for most taxpayers. However, understanding how audits are selected, keeping records organized, and responding professionally can help you manage the process smoothly and mitigate potential penalties.",
            "The CRA selects files for audit using automated risk-assessment software, which compares business expenses, profit margins, and personal income profiles against industry averages in your province. Common audit triggers include consistently high promotional and travel expenses, substantial changes in shareholder loan accounts, and mismatches between GST/HST filings and reported corporate revenues.",
            "Under Canadian tax law, both businesses and individuals must keep all invoices, receipts, logs, bank statements, and tax support files for a minimum of six years from the end of the taxation year. When selected for an audit, promptness and clarity are key. Working alongside a CPA ensures that communications with CRA auditors are handled professionally, technical points are explained accurately, and your rights as a taxpayer are fully protected."
        ],
        keyPointsTitle: "CRA Audit Best Practices",
        keyPoints: [
            "Keep all invoices, expense receipts, and motor vehicle logs for at least six years as legally required.",
            "Respond promptly to all CRA correspondence to prevent automatic assessments and penalty interest accumulation.",
            "Ensure that corporate revenues and expenses match your GST/HST filings to avoid automated discrepancies.",
            "Obtain CPA representation to handle communications with CRA auditors and explain accounting methods technicalities."
        ]
    }
};

export const ArticlePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const article = id ? articles[id] : null;

    if (!article) {
        return (
            <div className="w-full bg-[#f8fafc] py-20 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-3xl font-serif font-bold text-[#1F3864] mb-4">Article Not Found</h1>
                <p className="text-gray-500 mb-8 max-w-sm">The resource or insight article you are looking for does not exist or has been relocated.</p>
                <Link to="/resources" className="bg-[#1F3864] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#1a2e5a] transition-colors text-sm">
                    Back to Resources
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full bg-[#f8fafc] select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            
            {/* HERO BANNER SECTION (Compact Mobile, standard Desktop) */}
            <section className="relative w-full h-[35vh] min-h-[250px] max-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
                <img
                    src={resourceHeroImg}
                    alt="Article Header Banner"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/45 backdrop-blur-[0.5px]" />
                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center gap-3">
                    <span className="text-[10px] sm:text-xs font-bold bg-[#c90a14] px-4 py-1.5 rounded-full tracking-wider uppercase">
                        {article.tag}
                    </span>
                    <h1 className="text-2xl md:text-4xl font-serif font-bold tracking-tight leading-tight max-w-3xl drop-shadow-md text-white mt-2">
                        {article.title}
                    </h1>
                </div>
            </section>

            {/* BREADCRUMB ROW */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-8">
                <Link to="/" className="inline-flex items-center space-x-2 text-neutral-500 hover:text-[#1F3864] font-bold text-xs sm:text-sm transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Homepage</span>
                </Link>
            </div>

            {/* MAIN CONTENT SPLIT GRID */}
            <section className="max-w-[85rem] mx-auto px-6 md:px-12 lg:px-24 py-8 pb-16 md:pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    
                    {/* Left Column: Article content (8 columns) */}
                    <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-100/80 shadow-sm">
                        
                        {/* Meta Tags Row */}
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 border-b border-neutral-100 pb-6 mb-8 font-semibold">
                            <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-neutral-300" />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <User className="h-4 w-4 text-neutral-300" />
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <BookOpen className="h-4 w-4 text-neutral-300" />
                                <span>{article.readTime}</span>
                            </div>
                        </div>

                        {/* Article Paragraphs */}
                        <div className="space-y-6 text-gray-600 text-sm sm:text-base leading-relaxed antialiased font-normal">
                            {article.paragraphs.map((para, index) => (
                                <p key={index}>{para}</p>
                            ))}
                        </div>

                        {/* Highlight Key Takeaways Block */}
                        <div className="mt-10 bg-[#fcfcfc] border border-neutral-200/50 rounded-2xl p-6 sm:p-8">
                            <h4 className="text-[#1F3864] font-serif font-bold text-lg mb-4 tracking-wide border-b border-neutral-200/40 pb-2">
                                {article.keyPointsTitle}
                            </h4>
                            <ul className="space-y-3.5">
                                {article.keyPoints.map((point, index) => (
                                    <li key={index} className="flex items-start text-xs sm:text-[14.5px] font-semibold text-neutral-800 leading-relaxed">
                                        <span className="text-[#c90a14] mr-3 mt-1.5 flex-shrink-0 text-[10px]">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Right Column: Sticky Contact Widget (3 columns, shifted further right) */}
                    <div className="lg:col-span-3 lg:col-start-10 lg:sticky lg:top-8 space-y-6">
                        
                        {/* Help Widget Box */}
                        <div className="bg-[#1F3864] text-white rounded-3xl p-6 sm:p-8 border border-white/5 shadow-sm text-center flex flex-col items-center">
                            <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-wide mb-3">
                                Need Professional CPA Help?
                            </h3>
                            <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6 font-medium max-w-xs mx-auto">
                                Our chartered professional accountants are licensed to support corporate and personal tax filings across Alberta and Saskatchewan.
                            </p>
                            
                            {/* Action contacts details */}
                            <div className="w-full space-y-4 mb-8 text-left text-xs sm:text-[13px] font-semibold text-white/90">
                                <a href={`tel:${companyPhone.tel}`} className="flex items-center space-x-3 hover:text-[#fab802] transition-colors p-3 bg-white/[0.04] rounded-xl border border-white/5">
                                    <Phone className="h-4 w-4 text-[#fab802] flex-shrink-0" />
                                    <span>Call: {companyPhone.display}</span>
                                </a>
                                <a href={`mailto:${companyEmail}`} className="flex items-center space-x-3 hover:text-[#fab802] transition-colors p-3 bg-white/[0.04] rounded-xl border border-white/5">
                                    <Mail className="h-4 w-4 text-[#fab802] flex-shrink-0 break-all" />
                                    <span className="break-all">Email: {companyEmail}</span>
                                </a>
                            </div>

                            <Link to="/contact" className="w-full bg-[#fab802] hover:bg-[#e0a400] text-black font-bold py-3 rounded-full text-sm tracking-wide shadow-md transition-all active:scale-[0.98]">
                                Contact Our Team
                            </Link>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default ArticlePage;
