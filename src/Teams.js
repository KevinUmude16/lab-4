import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTeam from './AddTeam';
import EditTeam from './Components/EditTeam';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling

const Teams = () => {
    const [teams, setTeams] = useState([]); // State to store the list of teams
    const [searchTerm, setSearchTerm] = useState(''); // State to store search input
    const [editingTeam, setEditingTeam] = useState(null); // State to track which team is being edited

    // Fetch teams from the backend when the component loads
    useEffect(() => {
        fetchTeams();
    }, []);

    // Function to fetch teams from the server
    const fetchTeams = () => {
        axios.get('http://localhost:5000/teams')
            .then(response => setTeams(response.data)) // Update state with fetched teams
            .catch(error => console.error('Error fetching teams:', error)); // Log errors
    };

    // Filter teams based on search input
    const filteredTeams = teams.filter(team =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Football Teams</h1>

            {/* Form to add a new team */}
            <AddTeam onTeamAdded={(newTeam) => setTeams([...teams, newTeam])} />

            {/* Search bar to filter teams */}
            <input
                type="text"
                placeholder="Search teams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {/* List of teams */}
            <ul className="team-list">
                {filteredTeams.map((team, index) => (
                    <li key={index} className="team-item">
                        <div className="team-info">
                            {/* Display team logo */}
                            <img
                                src={team.logo}
                                alt={`${team.name} logo`}
                                className="team-logo"
                            />
                            {editingTeam === team.name ? (
                                // Show edit form if the team is being edited
                                <EditTeam
                                    team={team}
                                    onTeamUpdated={() => setEditingTeam(null)}
                                />
                            ) : (
                                // Display team name as a link
                                <Link to={`/teams/${team.name}`} className="team-name">
                                    {team.name}
                                </Link>
                            )}
                        </div>
                        <div className="team-actions">
                            {/* Edit button */}
                            <button
                                className="edit-button"
                                onClick={() => setEditingTeam(team.name)}
                            >
                                Edit
                            </button>
                            {/* Delete button */}
                            <button
                                className="delete-button"
                                onClick={() =>
                                    axios.delete(`http://localhost:5000/teams/${team.name}`)
                                        .then(() => setTeams(teams.filter(t => t.name !== team.name)))
                                        .catch(error => console.error('Error deleting team:', error))
                                }
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Teams;


