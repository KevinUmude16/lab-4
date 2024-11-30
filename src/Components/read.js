

import axios from "axios";
import { useState, useEffect } from "react";
import Movies from "./movies";

function Read() {
    const [movies, setmovies] = useState([]);

    const Reload = () => {
        console.log("Reloading movie data...");
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setmovies(response.data);
            })
            .catch((error) => {
                console.error("Error reloading data:", error);
            });
    };

    useEffect(() => {
        Reload();
    }, []);

    return (
        <div>
            <h2>Movie List</h2>
            <Movies myMovies={movies} ReloadData={Reload} />
        </div>
    );
}

export default Read;