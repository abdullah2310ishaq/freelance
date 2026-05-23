import React from 'react';
import AboutHero from '../../components/about/abouthero';

const AboutPage: React.FC = () => {
    return (
        <div className="w-full bg-white select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <AboutHero />
        </div>
    );
};

export default AboutPage;
