import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import yearEndTaxImg from '../../assets/homepage/year_end_tax.png';
import understandingNoticeImg from '../../assets/homepage/understanding_notice.png';
import navigatingImg from '../../assets/homepage/navigating.png';

interface InsightCard {
    id: number;
    title: string;
    description: string;
    image: string;
    tag?: string; // Optional badge tag for specific cards (like the first one)
}

const ResourcesInsight: React.FC = () => {

    const insights: InsightCard[] = [
        {
            id: 1,
            title: "Year-End Tax Planning Strategies for Alberta Corporations",
            description: "Essential steps to take before your fiscal year-end to minimize corporate tax exposure.",
            image: yearEndTaxImg,
            tag: "Tax Planning"
        },
        {
            id: 2,
            title: "Understanding Notice to Reader Financial Statements",
            description: "A guide for business owners on what compilation engagements entail and when they are needed.",
            image: understandingNoticeImg
        },
        {
            id: 3,
            title: "Navigating CRA Audits: What You Need to Know",
            description: "Preparation and response strategies if your personal or corporate taxes are selected for review.",
            image: navigatingImg
        }
    ];

    return (
        <section className="w-full bg-[#f8fafc] py-12 lg:py-24 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER BLOCK: Split into Left Text and Right Action Link */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
                    <div className="flex flex-col">
                        <span className="text-[11px] sm:text-xs font-bold text-[#c90a14] uppercase tracking-[1.5px] mb-2.5 block">
                            INSIGHTS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3864] font-serif tracking-wide">
                            Resources & Insights
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-[15px] font-normal mt-2.5 max-w-xl">
                            Stay informed with our curated selection of tax guides and financial reporting insights.
                        </p>
                    </div>

                    {/* Right Sided Link Wrapper */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/resources"
                            className="inline-flex items-center space-x-1 text-[#c90a14] hover:text-[#a00810] text-[13px] sm:text-sm font-bold tracking-wide group transition-colors"
                        >
                            <span>View All Resources</span>
                            <ChevronRight className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* 3-COLUMN CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {insights.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col justify-between"
                        >
                            <div>
                                {/* Image Area with Absolute Tag Overlay */}
                                <div className="h-52 w-full overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                                    />

                                    {/* Dynamic Badge Display (Pehle card par Tax Planning badge) */}
                                    {item.tag && (
                                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3.5 py-1 shadow-sm">
                                            <span className="text-[11px] font-bold text-gray-800 tracking-wide">
                                                {item.tag}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Block */}
                                <div className="p-5 sm:p-8 flex flex-col">
                                    {/* Main Title Heading */}
                                    <h3 className="text-[17px] sm:text-lg font-bold text-[#1F3864] font-serif leading-snug tracking-wide mb-3.5 line-clamp-2 group-hover:text-[#c90a14] transition-colors">
                                        {item.title}
                                    </h3>

                                    {/* Description Subtext */}
                                    <p className="text-gray-500 text-xs sm:text-[13.5px] leading-relaxed font-normal line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom "Read Article" action (Card container layout ensures alignment) */}
                            <div className="px-5 pb-5 sm:px-8 sm:pb-8 pt-0">
                                <Link
                                    to={`/resources/article/${item.id}`}
                                    className="inline-block text-[#fab802] hover:text-[#e0a400] text-xs sm:text-sm font-bold tracking-wide hover:underline transition-colors"
                                >
                                    Read Article
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ResourcesInsight;