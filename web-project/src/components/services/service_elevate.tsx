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

const ServiceElevate: React.FC = () => {

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
                "Capital Gains Reporting",
                "Self Employment- Uber, Taxi, Home day care etc."
            ],
            svg: (
                <svg className="h-6 w-6 text-[#e41e1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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
                <svg className="h-6 w-6 text-[#e41e1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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
                <svg className="h-6 w-6 text-[#e41e1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full bg-[#fcfcfc] py-16 lg:py-24 select-none">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">

                {/* SECTION HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
                    <span className="text-[11px] sm:text-xs font-bold text-red-600 uppercase tracking-widest block">
                        CORE COMPETENCIES
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2e5a] font-serif leading-tight">
                        Services We Provide To Elevate Your Business
                    </h2>
                    <p className="text-neutral-500 text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
                        At Analytic Alliance CPA, we offer a full range of accounting, tax, and advisory services designed to simplify your financial management and help your business thrive.
                    </p>
                </div>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-[#f5f7fa] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col border border-neutral-100/60"
                        >
                            {/* Card Image Container */}
                            <div className="h-52 w-full overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                                />
                            </div>

                            {/* Card Content Base */}
                            <div className="p-8 flex-1 flex flex-col">
                                {/* Red Outline Icon */}
                                <div className="mb-4 flex justify-start">
                                    <div className="border border-neutral-200 bg-white p-2.5 rounded-xl shadow-sm">
                                        {service.svg}
                                    </div>
                                </div>

                                {/* Card Title */}
                                <h3 className="text-xl font-bold text-[#1a2e5a] font-serif mb-5 tracking-wide">
                                    {service.title}
                                </h3>

                                {/* Bullet Points List */}
                                <ul className="space-y-3.5 flex-1">
                                    {service.points.map((point, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start text-xs sm:text-[13px] font-semibold text-neutral-700 leading-relaxed"
                                        >
                                            {/* Custom Bullet Dot */}
                                            <span className="text-red-600 mr-2.5 mt-1.5 flex-shrink-0 text-[10px]">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceElevate;