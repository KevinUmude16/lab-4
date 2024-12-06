import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTeam from './AddTeam';
import EditTeam from './Components/EditTeam';
import { Link } from 'react-router-dom';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [editingTeam, setEditingTeam] = useState(null);

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = () => {
        axios.get('http://localhost:4000/teams')
            .then(response => setTeams(response.data))
            .catch(error => console.error('Error fetching teams:', error));
    };

    return (
        <div>
            <AddTeam onTeamAdded={(newTeam) => setTeams([...teams, newTeam])} />
            <ul>
                {teams.map((team, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img
                            src={team.logo}
                            alt={`${team.name} logo`}
                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                        {editingTeam === team.name ? (
                            <EditTeam team={team} onTeamUpdated={() => setEditingTeam(null)} />
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
