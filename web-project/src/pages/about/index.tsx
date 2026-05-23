import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="py-20 text-center bg-gray-50 min-h-[50vh] flex flex-col justify-center items-center select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <h1 className="text-4xl font-bold text-[#1F3864] font-serif mb-4">About Us</h1>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base px-4 leading-relaxed">
                Analytic Alliance provides expert CPA services. Learn more about our values, dedication, and how we help businesses grow.
            </p>
        </div>
    );
};

export default AboutPage;
