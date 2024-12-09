import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const EditTeam = ({ team, onTeamUpdated }) => {
    const [newName, setNewName] = useState(team.name);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send PUT request to update the team
        axios.put(`http://localhost:5000/teams/${team.name}`, { name: newName })
            .then((response) => {
                console.log(response.data.message);
                onTeamUpdated(team.name, newName); // Notify parent component
            })
            .catch((error) => {
                console.error('Error updating team:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="edit-team-form">
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="edit-input"
                placeholder="Edit team name"
            />
            <button type="submit" className="edit-button">Save</button>
        </form>
    );
};

export default EditTeam;
