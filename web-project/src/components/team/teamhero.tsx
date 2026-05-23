import React from 'react';
import ResourceHeroImg from '../../assets/resources/resourceshero.jpg';

export const TeamHero: React.FC = () => {
    return (
        <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Image */}
            <img
                src={ResourceHeroImg}
                alt="Analytic Alliance Team Members Banner"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Lighter Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/40 backdrop-blur-[0.5px]" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center gap-4">
                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight leading-tight max-w-3xl drop-shadow-md text-white">
                    Meet Our Team Members
                </h1>

                {/* Subtitle / Description */}
                <p className="text-sm md:text-base font-normal tracking-wide leading-relaxed max-w-2xl text-white drop-shadow-sm">
                    Meet the experienced professionals dedicated to delivering trusted accounting, tax, and advisory services with personalized support.
                </p>
            </div>
        </section>
    );
};

export default TeamHero;
