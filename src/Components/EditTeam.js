import React, { useState } from 'react';
import axios from 'axios';

const EditTeam = ({ team, onTeamUpdated }) => {
    const [newName, setNewName] = useState(team.name);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send PUT request to update the team
        axios.put(`http://localhost:4000/teams/${team.name}`, { name: newName })
            .then((response) => {
                console.log(response.data.message);
                onTeamUpdated(team.name, newName); // Notify parent component
            })
            .catch((error) => {
                console.error('Error updating team:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default EditTeam;
