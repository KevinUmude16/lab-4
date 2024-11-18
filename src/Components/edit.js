import React from 'react'; // Importing React for component creation
import { useParams } from 'react-router-dom'; // useParams to extract URL parameters (like `id`)
import { useState, useEffect } from 'react'; // useState to manage state and useEffect for side effects
import axios from 'axios'; // Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // useNavigate for programmatic navigation

export default function Edit(props) {
  // Extracting `id` from the URL parameters using `useParams`
  let { id } = useParams();
  
  // Setting up state variables to store form values
  const [title, setTitle] = useState(""); // Movie title state
  const [year, setYear] = useState("");   // Movie release year state
  const [poster, setPoster] = useState(""); // Movie poster URL state
  const navigate = useNavigate(); // `navigate` function for programmatic navigation to other routes

  // useEffect hook to fetch existing movie data when the component mounts or `id` changes
  useEffect(() => {
    // Making a GET request to fetch the movie details from the API based on the `id`
    axios.get('http://localhost:4000/api/movie/' + id)
        .then((response) => {
            // Updating state with the movie data received from the server
            setTitle(response.data.title); // Setting the title of the movie
            setYear(response.data.year); // Setting the release year of the movie
            setPoster(response.data.poster); // Setting the poster URL of the movie
        })
        .catch((error) => {
            // Logging error if the request fails (e.g., 404 or network issues)
            console.log(error);
        });
  }, [id]); // The effect will run whenever `id` changes (when the URL parameter changes)

  // Handling form submission (when the user clicks "Edit Movie")
  const handleSubmit = (event) => {
    event.preventDefault(); // Preventing the default form submission behavior
    
    // Creating an object with the updated movie data
    const newMovie = { id, title, year, poster };
    
    // Making a PUT request to update the movie data on the server
    axios.put('http://localhost:4000/api/movie/' + id, newMovie)
        .then((res) => {
            // Logging the server response (updated movie data)
            console.log(res.data);
            // After successful update, navigate back to the 'read' page to view the updated list
            navigate('/read');
        });
  }

  return (
    <div>
        {/* The form that allows the user to edit movie details */}
        <form onSubmit={handleSubmit}>
            {/* Movie Title input field */}
            <div className="form-group">
                <label>Movie Title: </label>
                <input type="text" 
                className="form-control" 
                value={title} // Setting the input value to the `title` state
                onChange={(e) => setTitle(e.target.value)} // Updating the `title` state when the input value changes
                />
            </div>
            
            {/* Movie Release Year input field */}
            <div className="form-group">
                <label>Release Year: </label>
                <input type="text" 
                className="form-control" 
                value={year} // Setting the input value to the `year` state
                onChange={(e) => setYear(e.target.value)} // Updating the `year` state when the input value changes
                />
            </div>
            
            {/* Movie Poster URL input field */}
            <div className="form-group">
                <label>Poster URL: </label>
                <input type="text" 
                className="form-control" 
                value={poster} // Setting the input value to the `poster` state
                onChange={(e) => setPoster(e.target.value)} // Updating the `poster` state when the input value changes
                />
            </div>
            
            {/* Submit button for the form */}
            <div className="form-group">
                <input type="submit" value="Edit Movie" className="btn btn-primary" />
            </div>
        </form>
    </div>
  );
}
