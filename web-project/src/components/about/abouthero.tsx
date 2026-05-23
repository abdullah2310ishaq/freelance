import React from 'react';
import autoHeroImg from '../../assets/about/autohero.jpg';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <img
        src={autoHeroImg}
        alt="Analytic Alliance CPA Team"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 backdrop-blur-[1px]" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center gap-4">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight leading-tight max-w-2xl drop-shadow-md text-white">
          About Analytic Alliance CPA
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm md:text-base font-normal tracking-wide leading-relaxed max-w-xl text-white drop-shadow-sm">
          Your trusted partner for accounting, tax, audit, and advisory services—helping
          businesses gain clarity, stay compliant, and grow with confidence.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
