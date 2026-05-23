import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import founderResourcesImg from '../../assets/resources/founderresources.jpg';

export const TeamFounder: React.FC = () => {
    return (
        <section className="w-full bg-[#FFFFFF] py-12 md:py-24 px-6 md:px-12 lg:px-24 select-none">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* Left Column */}
                <div className="relative lg:col-span-5 w-full flex justify-center">
                    <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm">
                        <img
                            src={founderResourcesImg}
                            alt="Mohammad Atiqul Islam - CEO & Founder"
                            className="w-full h-full object-cover object-center"
                        />
                        <span className="absolute top-6 left-6 bg-[#1F3864] text-white text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full shadow-md tracking-wide">
                            CEO & Founder
                        </span>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-600 text-sm md:text-base leading-relaxed font-normal">

                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F3864] tracking-wide">
                            Mohammad Atiqul Islam
                        </h2>
                        <p className="text-neutral-600 text-sm md:text-[15px] font-normal leading-relaxed">
                            Mohammad Atiqul Islam is the founder and CEO of Analytic Alliance CPA. With
                            extensive experience in accounting, taxation, and business advisory, he is
                            dedicated to helping entrepreneurs and businesses gain financial clarity, improve
                            profitability, and achieve long-term success.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 text-neutral-400">
                        <a href="#" className="hover:text-[#1F3864] transition-colors" aria-label="Facebook">
                            <FaFacebookF className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-[#1F3864] transition-colors" aria-label="GitHub">
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-[#1F3864] transition-colors" aria-label="LinkedIn">
                            <FaLinkedinIn className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Experience section */}
                    <div className="mt-4 flex flex-col gap-4">
                        <h3 className="text-2xl font-serif font-bold text-[#1F3864] tracking-wide">
                            Atiqul Islam Experience
                        </h3>
                        <p className="text-neutral-600 text-sm md:text-[15px] font-normal leading-relaxed">
                            Atiq works closely with individuals, startups, and established businesses across a
                            wide range of industries, including professional services, healthcare, construction,
                            retail, hospitality, and technology. His practical guidance and personalized approach
                            help clients simplify complex financial matters and make confident business
                            decisions.
                        </p>

                        <ul className="space-y-3 mt-2">
                            {[
                                "Extensive experience in accounting, taxation, and business advisory",
                                "Trusted advisor to businesses across multiple industries",
                                "Specialized in tax planning, bookkeeping, payroll, and financial reporting",
                                "Focused on improving profitability and long-term growth",
                                "Committed to personalized service and attention to detail"
                            ].map((bullet, index) => (
                                <li key={index} className="flex items-start text-sm sm:text-[15.5px] font-bold text-neutral-800 leading-relaxed">
                                    <span className="text-[#1F3864] mr-2.5 mt-1.5 flex-shrink-0 text-[12px]">•</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TeamFounder;
