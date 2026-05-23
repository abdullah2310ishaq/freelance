import React from 'react';
import ContactHero from '../../components/contact/contacthero';
import ContactSection from '../../components/contact/contactsection';

const ContactPage: React.FC = () => {
    return (
        <div className="w-full bg-white select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <ContactHero />
            <ContactSection />

        </div>
    );
};

export default ContactPage;
