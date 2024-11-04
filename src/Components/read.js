// Importing the Movies component
import{useEffect, useState} from 'react';
import Movies from "./movies";
import axios from "axios";
// Define the Read functional component
const Read = () => {
// Sample data array containing movie objects

const [movies, setMovies] = useState([]); // State to hold movie data

useEffect(() => {
  // Fetch data from API
  axios.get('http://localhost:4000/api/movies')
    .then((response) => {
      console.log(response.data.movies); // Log fetched movies
      setMovies([...response.data.whatever, { title: "New Movie", year: 2024 }]); // Add new movie
    })
    .catch((error) => {
      console.error(error); // Handle errors
    });
}, []);


     // run the Read component
    return(
        <div>
            <h1>This is my read component!</h1>
            <Movies myMovies={movies}/>
        </div>
    );
}
// Export the Read component for use in other files
export default Read;