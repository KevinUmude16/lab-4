import React, { useState } from 'react';
import axios from 'axios';

const AddTeam = ({ onTeamAdded }) => {
    const [teamName, setTeamName] = useState('');
    const [teamLogo, setTeamLogo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/teams', { name: teamName, logo: teamLogo })
            .then(response => {
                onTeamAdded(response.data);
                setTeamName('');
                setTeamLogo('');
            })
            .catch(error => console.error('Error adding team:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter team name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter logo URL"
                value={teamLogo}
                onChange={(e) => setTeamLogo(e.target.value)}
            />
            <button type="submit">Add Team</button>
        </form>
    );
};

export default AddTeam;
