import React from 'react';
import tickIcon from '../../assets/services/tick.svg';

interface StatCard {
    id: number;
    value: string;
    label: string;
}

interface FeatureItem {
    id: number;
    text: string;
}

export const ServiceAnalytic: React.FC = () => {
    const stats: StatCard[] = [
        { id: 1, value: "20+", label: "YEARS EXPERIENCE" },
        { id: 2, value: "500+", label: "HAPPY CLIENTS" },
        { id: 3, value: "100%", label: "ACCURACY FOCUS" },
        { id: 4, value: "AB", label: "ALBERTA BASED" },
    ];

    const features: FeatureItem[] = [
        { id: 1, text: "Experienced CPA Professionals with deep industry expertise." },
        { id: 2, text: "Accurate & Reliable Reporting delivered consistently on time." },
        { id: 3, text: "Personalized Financial Solutions, not generic templates." },
        { id: 4, text: "Transparent Communication at every stage of the process." },
    ];

    return (
        <section className="w-full bg-[#1F3864] py-12 md:py-24 px-6 md:px-12 lg:px-24 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Left Column: Context, Paragraph & Checkmarks */}
                <div className="lg:col-span-7 flex flex-col gap-6 items-start text-left">
                    <span className="text-[11px] sm:text-xs font-bold tracking-[1.5px] text-[#60A5FA] uppercase">
                        WHY ANALYTIC ALLIANCE
                    </span>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight max-w-xl text-white">
                        Built on trust, accuracy, and long-term client relationships.
                    </h2>

                    <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                        We don't just act as external contractors; we position ourselves as your dedicated financial partners. Our approach is deeply personalized, ensuring that every financial decision aligns with your overarching business goals.
                    </p>

                    {/* Feature List Items with Custom SVGs */}
                    <ul className="mt-4 space-y-4">
                        {features.map((feature) => (
                            <li key={feature.id} className="flex items-start gap-3.5">
                                {/* Custom Tick Icon Asset */}
                                <img
                                    src={tickIcon}
                                    className="h-5 w-5 object-contain flex-shrink-0 mt-0.5"
                                    alt="Tick Icon"
                                />
                                <span className="text-sm md:text-[15px] font-normal text-white">
                                    {feature.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column: 2x2 Grid High-Contrast Stats Cards */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-[1.5rem] p-4 md:p-8 flex flex-col items-center justify-center text-center gap-1 min-h-[140px] md:min-h-[160px] shadow-sm hover:bg-white/[0.06] transition-colors"
                        >
                            <span className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white">
                                {stat.value}
                            </span>
                            <span className="text-[10px] md:text-xs font-sans font-bold tracking-widest text-white/70 uppercase mt-1">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceAnalytic;