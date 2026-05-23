import React from 'react';
import taxServiceImg from '../../assets/homepage/taxservice.png';
import corporateImg from '../../assets/homepage/corporate.png';
import advisoryImg from '../../assets/homepage/advisory.png';

interface ServiceCard {
    id: number;
    title: string;
    image: string;
    points: string[];
    svg: React.ReactNode;
}

const CoreCompetencies: React.FC = () => {

    const services: ServiceCard[] = [
        {
            id: 1,
            title: "Personal Tax Services",
            image: taxServiceImg,
            points: [
                "Personal Income Tax Return Preparation (T1)",
                "Tax Planning and Optimization",
                "CRA Audit Support and Representation",
                "Prior Year Tax Return Filing",
                "Tax Planning and Optimization",
                "Capital Gains Reporting",
                "Self Employment- Uber, Taxi, Home day care etc."
            ],
            svg: (
                <svg className="h-6 w-6 text-[#c90a14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Corporate & Business Services",
            image: corporateImg,
            points: [
                "Corporate Tax Return Preparation (T2)",
                "GST/HST Registration and Filing",
                "Payroll Services and T4, T4A, T5 Preparation",
                "Financial Statement Preparation",
                "Bookkeeping Services",
                "Business Incorporation Advisory"
            ],
            svg: (
                <svg className="h-6 w-6 text-[#c90a14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Advisory & Planning Services",
            image: advisoryImg,
            points: [
                "Tax Planning for Small Business Owners",
                "Estate and Succession Planning",
                "CRA Correspondence and Dispute Resolution",
                "New Immigrant Tax Advisory",
                "Government Financial Reporting Guidance"
            ],
            svg: (
                <svg className="h-6 w-6 text-[#c90a14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full bg-white py-16 lg:py-24 select-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* SECTION HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[11px] sm:text-xs font-bold text-[#c90a14] uppercase tracking-[1.5px] mb-3 block">
                        CORE COMPETENCIES
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1F3864] font-serif mb-4 leading-tight">
                        Professional Accounting Services
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-[15px] font-normal leading-relaxed">
                        Comprehensive tax, reporting, and advisory solutions tailored for compliance and growth.
                    </p>
                </div>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-[#F5F5F5] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-gray-100"
                        >
                            {/* Card Image Container */}
                            <div className="h-48 sm:h-52 w-full overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Card Content Base */}
                            <div className="p-6 sm:p-8 flex-1 flex flex-col">
                                {/* Red Outline Icon */}
                                <div className="mb-4 flex justify-start">
                                    <div className="border border-gray-200 bg-white p-2.5 rounded-xl shadow-sm">
                                        {service.svg}
                                    </div>
                                </div>

                                {/* Card Title */}
                                <h3 className="text-xl font-bold text-[#1F3864] font-serif mb-5 tracking-wide">
                                    {service.title}
                                </h3>

                                {/* Bullet Points List */}
                                <ul className="space-y-3 flex-1">
                                    {service.points.map((point, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start text-xs sm:text-[13px] font-medium text-gray-700 leading-relaxed"
                                        >
                                            {/* Custom Bullet Dot */}
                                            <span className="text-[#c90a14] mr-2.5 mt-1.5 flex-shrink-0 text-[10px]">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM ACTION BUTTON */}
                <div className="flex justify-center">
                    <button className="bg-[#fab802] hover:bg-[#e0a400] text-black font-bold px-10 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all text-sm sm:text-base active:scale-95">
                        View Full Services
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CoreCompetencies;