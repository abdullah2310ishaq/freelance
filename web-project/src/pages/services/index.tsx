import React from 'react';
import ServiceHero from '../../components/services/service_hero';
import ServiceElevate
    from '../../components/services/service_elevate';
import ServiceAnalytic from '../../components/services/service_analytic';
import ClientTrust from '../../components/homepage/client_trust';
import ClientQueries from '../../components/homepage/client_queuries';


const ServicesPage: React.FC = () => {
    return (
        <div className="w-full bg-white select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <ServiceHero />
            <ServiceElevate />
            <ServiceAnalytic />
            <ClientTrust />
            <ClientQueries />

        </div>
    );
};

export default ServicesPage;
