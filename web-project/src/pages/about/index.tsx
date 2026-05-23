import React from 'react';
import AboutHero from '../../components/about/abouthero';
import EmpoweringAbout from '../../components/about/empoweringabout';
import AboutFounder from '../../components/about/aboutfounder';

const AboutPage: React.FC = () => {
    return (
        <div className="w-full bg-white select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <AboutHero />
            <EmpoweringAbout />
            <AboutFounder />
        </div>
    );
};

export default AboutPage;
