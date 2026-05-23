import React from 'react';
import ResourceHero from '../../components/resources/resourceshero';
import ResourcePdf from '../../components/resources/resourcespdf';

const ResourcesPage: React.FC = () => {
    return (
        <div className="w-full bg-white select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <ResourceHero />
            <ResourcePdf />
        </div>
    );
};

export default ResourcesPage;
