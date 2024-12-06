import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTeam from './AddTeam';
import EditTeam from './Components/EditTeam';
import { Link } from 'react-router-dom';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // New state for search term
    const [editingTeam, setEditingTeam] = useState(null);

    // Fetch all teams
    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = () => {
        axios.get('http://localhost:4000/teams')
            .then(response => setTeams(response.data))
            .catch(error => console.error('Error fetching teams:', error));
    };

    // Filter teams based on the search term
    const filteredTeams = teams.filter(team =>
        team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <AddTeam onTeamAdded={(newTeam) => setTeams([...teams, newTeam])} />

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search teams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ margin: '10px 0', padding: '5px', width: '100%' }}
            />

            <ul>
                {filteredTeams.map((team, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img
                            src={team.logo}
                            alt={`${team.name} logo`}
                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                        {editingTeam === team.name ? (
                            <EditTeam
                                team={team}
                                onTeamUpdated={() => setEditingTeam(null)}
                            />
                        ) : (
                            <>
                                <Link to={`/teams/${team.name}`}>{team.name}</Link>
                                <button onClick={() => setEditingTeam(team.name)}>Edit</button>
                                <button onClick={() => axios.delete(`http://localhost:4000/teams/${team.name}`)
                                    .then(() => setTeams(teams.filter(t => t.name !== team.name)))
                                    .catch(error => console.error('Error deleting team:', error))}>
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Teams;
