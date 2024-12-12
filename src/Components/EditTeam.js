import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import CSS for styling

// EditTeam Component: Allows users to edit the name of an existing team
const EditTeam = ({ team, onTeamUpdated }) => {
    // State to hold the updated team name
    const [newName, setNewName] = useState(team.name);

    // Function to handle form submission and update the team name
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload on form submission

        // PUT request to update the team name in the database
        axios.put(`http://localhost:5000/teams/${team.name}`, { name: newName })
            .then((response) => {
                console.log(response.data.message); 
                onTeamUpdated(team.name, newName); 
            })
            .catch((error) => {
                console.error('Error updating team:', error); // Log any errors
            });
    };

    return (
        // Form to edit the team name
        <form onSubmit={handleSubmit} className="edit-team-form">
            {/* Input field for editing the team name */}
            <input
                type="text"
                value={newName} // Bind input to newName state
                onChange={(e) => setNewName(e.target.value)} // Update state on input change
                className="edit-input" // Add CSS class for styling
                placeholder="Edit team name" // Input placeholder text
            />
            {/* Submit button to save changes */}
            <button type="submit" className="edit-button">Save</button>
        </form>
    );
};

export default EditTeam;
