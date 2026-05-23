import React from 'react';
import aboutEmpowerImg from '../../assets/about/aboutempower.jpg';

export const EmpoweringAbout: React.FC = () => {
    return (
        <section className="w-full bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">

                {/* Top Header Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Title & CTA */}
                    <div className="lg:col-span-6 flex flex-col gap-4 items-start">
                        <span className="text-xs font-bold tracking-widest text-red-600 uppercase">
                            ABOUT US
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e5a] leading-tight max-w-xl">
                            Empowering Your Business’s Financial Future with Confidence
                        </h2>
                        <button className="mt-4 bg-[#f0b400] hover:bg-[#d9a200] text-[#1a2e5a] font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-sm">
                            Get Started
                        </button>
                    </div>

                    {/* Right Column: Paragraph */}
                    <div className="lg:col-span-6 lg:pt-8 text-neutral-600 text-sm md:text-base leading-relaxed font-normal">
                        <p>
                            At Analytic Alliance CPA, we provide expert accounting, tax, and
                            advisory services designed to simplify your finances and support long-
                            term growth. Our team helps businesses make informed decisions, stay
                            compliant, and focus on what matters most—building a stronger future.
                        </p>
                    </div>
                </div>

                {/* Bottom Grid Rows: Cards Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    {/* Left Large Card: Our Story */}
                    <div className="relative lg:col-span-6 min-h-[400px] md:min-h-[480px] rounded-[2rem] overflow-hidden group shadow-sm">
                        <img
                            src={aboutEmpowerImg}
                            alt="Our Story Team Meeting"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        {/* Soft gradient mask for bottom text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                        {/* Content pinned to bottom left */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white flex flex-col gap-3">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold">
                                Our Story
                            </h3>
                            <p className="text-xs md:text-sm text-neutral-200/90 leading-relaxed font-light max-w-xl">
                                Our mission is simple enough. To unearth the magic behind the numbers of
                                organizations big or small and make meaningful decisions to boost up their
                                performance. Our passion drives us forward.
                            </p>
                        </div>
                    </div>

                    {/* Right Columns: Stacked Mission & Vision Cards */}
                    <div className="lg:col-span-6 flex flex-col gap-6 justify-between">

                        {/* Our Mission Card (Slate/Blue-grey tone) */}
                        <div className="bg-[#9bb0cb] rounded-[2rem] p-8 md:p-10 text-white text-center flex flex-col justify-center items-center gap-4 flex-1 shadow-sm">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold">
                                Our Mission
                            </h3>
                            <p className="text-xs md:text-sm text-white/90 leading-relaxed font-light max-w-md">
                                Our mission is simple enough. To unearth the magic behind the numbers of
                                organizations big or small and make meaningful decisions to boost up their
                                performance. Our passion drives us forward.
                            </p>
                        </div>

                        {/* Our Vision Card (Vibrant Red) */}
                        <div className="bg-[#e41e1e] rounded-[2rem] p-8 md:p-10 text-white text-center flex flex-col justify-center items-center gap-4 flex-1 shadow-sm">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold">
                                Our Vision
                            </h3>
                            <p className="text-xs md:text-sm text-white/90 leading-relaxed font-light max-w-md">
                                Our vision is to utilize the resources with accurate workable plans that
                                deliver results. We know resources are scarce and the only way we can achieve
                                efficiency is to employ better methods of production and execution.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default EmpoweringAbout;