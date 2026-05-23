import React from 'react';
import ResourceHero from '../../components/resources/resourceshero';
import ResourceFounder from '../../components/resources/resourcesfounder';
import BoardOfDirectors from '../../components/resources/resourcesbod';

const ResourcesPage: React.FC = () => {
    return (
        <div className="w-full bg-white select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <ResourceHero />
            <ResourceFounder />
            <BoardOfDirectors />
        </div>
    );
};

export default ResourcesPage;
