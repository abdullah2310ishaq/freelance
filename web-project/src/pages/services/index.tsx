import React from 'react';
import ServiceHero from '../../components/services/service_hero';

const ServicesPage: React.FC = () => {
    return (
        <div className="w-full bg-white select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <ServiceHero />
        </div>
    );
};

export default ServicesPage;
