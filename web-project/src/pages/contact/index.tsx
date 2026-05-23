import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="py-20 text-center bg-gray-50 min-h-[50vh] flex flex-col justify-center items-center select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <h1 className="text-4xl font-bold text-[#1F3864] font-serif mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base px-4 leading-relaxed">
                Get in touch with our team in Edmonton or Calgary. We are ready to assist with all your accounting and tax needs.
            </p>
        </div>
    );
};

export default ContactPage;
