import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TeamDetails = () => {
    const { name } = useParams();

    return (
        <div>
            <h1>Details for {name}</h1>
            <p>Here you can add more information about {name}, like players, coach, or stats.</p>
            <Link to="/">Back to Teams</Link>
        </div>
    );
};

export default TeamDetails;