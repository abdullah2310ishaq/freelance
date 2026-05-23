import React from 'react';
import serviceHeroImg from '../../assets/services/servicehero.png';

export const ServiceHero: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <img
        src={serviceHeroImg}
        alt="Comprehensive Accounting Services Team Meeting"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Lighter Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/40 backdrop-blur-[0.5px]" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center gap-4">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight leading-tight max-w-3xl drop-shadow-md text-white">
          Comprehensive Accounting Services
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm md:text-base font-normal tracking-wide leading-relaxed max-w-2xl text-white drop-shadow-sm">
          From bookkeeping and tax preparation to payroll and strategic advisory, we provide
          the financial expertise and support businesses need to stay organized, compliant,
          and positioned for long-term success.
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;