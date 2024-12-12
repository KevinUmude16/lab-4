import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS for styling

// AddTeam Component: Handles adding new teams to the app
const AddTeam = ({ onTeamAdded }) => {
    const [teamName, setTeamName] = useState('');
    const [teamLogo, setTeamLogo] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form behavior (page reload)

        // POST request to add a new team to the backend
        axios.post('http://localhost:5000/teams', { name: teamName, logo: teamLogo })
            .then(response => {
                onTeamAdded(response.data); // Notify parent component to update the UI
                setTeamName(''); // Clear the team name input field
                setTeamLogo(''); // Clear the team logo input field
            })
            .catch(error => console.error('Error adding team:', error)); // Log any errors
    };

    return (
        <form onSubmit={handleSubmit} className="add-team-form">
            {/* Input for team name */}
            <input
                type="text"
                placeholder="Enter team name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)} // Update state as user types
                className="add-input" // Add styling class
            />
            {/* Input for team logo URL */}
            <input
                type="text"
                placeholder="Enter logo URL"
                value={teamLogo}
                onChange={(e) => setTeamLogo(e.target.value)} // Update state as user types
                className="add-input" // Add styling class
            />
            {/* Submit button to add the team */}
            <button type="submit" className="add-button">Add Team</button>
        </form>
    );
};

export default AddTeam;
