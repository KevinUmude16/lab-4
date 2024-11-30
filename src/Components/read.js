// Importing necessary libraries and components
import axios from "axios";  // Axios is used for making HTTP requests
import { useState, useEffect } from "react";  // React hooks for managing state and side-effects
import Movies from "./movies";  // Importing the Movies component to display the list of movies

// Functional component to handle the reading and displaying of movies
function Read() {
    // State variable to hold the list of movies fetched from the server
    const [movies, setmovies] = useState([]);

    // Function to reload the list of movies from the backend server
    const Reload = () => {
        console.log("Reloading movie data...");  // Log a message to indicate the reload process
        // Axios GET request to fetch the movies from the server
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                // On success, set the movies state with the response data
                setmovies(response.data);
            })
            .catch((error) => {
                // In case of an error, log the error to the console
                console.error("Error reloading data:", error);
            });
    };

    // useEffect hook to run the Reload function when the component mounts
    useEffect(() => {
        Reload();  // Calling the Reload function to fetch the movies initially
    }, []);  // Empty dependency array means this effect runs only once when the component mounts

    return (
        <div>
            <h2>Movie List</h2>  {/* Header displaying the title of the section */}
            {/* Passing the movies data and Reload function as props to the Movies component */}
            <Movies myMovies={movies} ReloadData={Reload} />
        </div>
    );
}

export default Read;  // Exporting the Read component for use in other parts of the app
