import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Teams from './Teams';
import TeamDetails from './TeamDetails';

function App() {
    return (
        <Router>
            <div>
                <nav style={{ padding: '10px', background: '#f4f4f4', marginBottom: '20px' }}>
                    <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Teams />} />
                    <Route path="/teams/:name" element={<TeamDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


