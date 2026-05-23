import React from 'react';
import TeamHero from '../../components/team/teamhero';
import TeamFounder from '../../components/team/teamfounder';
import BoardOfDirectors from '../../components/team/teambod';

const TeamPage: React.FC = () => {
    return (
        <div className="w-full bg-white select-none" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <TeamHero />
            <TeamFounder />
            <BoardOfDirectors />
        </div>
    );
};

export default TeamPage;
