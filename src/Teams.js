import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTeam from './AddTeam';
import EditTeam from './Components/EditTeam';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State for search input
    const [editingTeam, setEditingTeam] = useState(null);

    // Fetch all teams from the backend
    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = () => {
        axios.get('http://localhost:4000/teams')
            .then(response => setTeams(response.data))
            .catch(error => console.error('Error fetching teams:', error));
    };

    // Filter teams based on search term
    const filteredTeams = teams.filter(team =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Football Teams</h1>
            <AddTeam onTeamAdded={(newTeam) => setTeams([...teams, newTeam])} />

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search teams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            <ul className="team-list">
                {filteredTeams.map((team, index) => (
                    <li key={index} className="team-item">
                        <div className="team-info">
                            <img
                                src={team.logo}
                                alt={`${team.name} logo`}
                                className="team-logo"
                            />
                            {editingTeam === team.name ? (
                                <EditTeam
                                    team={team}
                                    onTeamUpdated={() => setEditingTeam(null)}
                                />
                            ) : (
                                <Link to={`/teams/${team.name}`} className="team-name">
                                    {team.name}
                                </Link>
                            )}
                        </div>
                        <div className="team-actions">
                            <button
                                className="edit-button"
                                onClick={() => setEditingTeam(team.name)}
                            >
                                Edit
                            </button>
                            <button
                                className="delete-button"
                                onClick={() => axios.delete(`http://localhost:4000/teams/${team.name}`)
                                    .then(() => setTeams(teams.filter(t => t.name !== team.name)))
                                    .catch(error => console.error('Error deleting team:', error))}
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



