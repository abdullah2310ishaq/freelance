import React from 'react';

const ResourcesPage: React.FC = () => {
    return (
        <div className="py-20 text-center bg-gray-50 min-h-[50vh] flex flex-col justify-center items-center select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <h1 className="text-4xl font-bold text-[#1F3864] font-serif mb-4">Resources & Insights</h1>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base px-4 leading-relaxed">
                Stay updated with the latest tax tips, financial advice, and official guides for managing your business accounting.
            </p>
        </div>
    );
};

export default ResourcesPage;
