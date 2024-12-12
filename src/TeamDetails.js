import React from 'react';
import { useParams, Link } from 'react-router-dom';

// TeamDetails Component: Displays details for a specific team
const TeamDetails = () => {
    const { name } = useParams(); // Extract the team name from the route parameters

    return (
        <div>
            {/* Display the team name dynamically */}
            <h1>Details for {name}</h1>

            {/* Placeholder for additional information */}
            <p>Here you can add more information about {name}, like players, coach, or stats.</p>

            {/* Link to navigate back to the teams list */}
            <Link to="/">Back to Teams</Link>
        </div>
    );
};

export default TeamDetails;
