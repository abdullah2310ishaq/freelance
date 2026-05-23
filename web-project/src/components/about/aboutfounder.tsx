import React from 'react';
import founderImg from '../../assets/about/founder.jpg';

export const AboutFounder: React.FC = () => {
    return (
        <section className="w-full bg-[#FFFFFF] py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Left Column: Biography Content */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-600 text-sm md:text-base leading-relaxed font-normal order-2 lg:order-1">
                    <p>
                        Mohammad Atiqul Islam is the founder and CEO of Analytic Alliance
                        CPA. He leads a dedicated team that provides accounting, tax
                        preparation, bookkeeping, payroll, and business advisory services to
                        individuals, entrepreneurs, and small to medium-sized businesses
                        across Canada.
                    </p>

                    <p>
                        Atiq is passionate about helping business owners gain clarity over their
                        finances and make confident decisions that improve profitability and support
                        long-term growth. His client-focused approach, combined with his team's
                        attention to detail and commitment to accuracy, allows Analytic Alliance CPA to
                        deliver practical financial solutions tailored to each client's unique needs.
                    </p>

                    <p>
                        The firm works with businesses across a wide range of industries, including
                        professional services, healthcare, construction, retail, hospitality, technology,
                        and startups. Whether a client needs assistance with tax planning, financial
                        reporting, bookkeeping, or strategic advice, Atiq and his team provide reliable
                        guidance and ongoing support.
                    </p>

                    <p>
                        Before founding Analytic Alliance CPA, Atiq Islam built extensive experience in
                        accounting and finance, working closely with businesses to solve complex
                        financial challenges and create efficient systems that save time and improve
                        performance.
                    </p>
                </div>

                {/* Right Column: Founder Profile Image & Designation */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center gap-6 order-1 lg:order-2">
                    {/* Image Container */}
                    <div className="w-full max-w-[420px] aspect-[4/5] rounded-xl overflow-hidden shadow-md">
                        <img
                            src={founderImg}
                            alt="Mohammad Atiqul Islam - Founder & CEO"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Name and Designation */}
                    <div className="text-center flex flex-col gap-1">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a2e5a] tracking-wide">
                            Mohammad Atiqul Islam
                        </h3>
                        <span className="text-xs md:text-sm font-sans font-bold uppercase tracking-widest text-[#1a2e5a]">
                            FOUNDER & CEO
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutFounder;