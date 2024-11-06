import { useState } from "react"; // Importing useState hook from React to manage component state
import axios from "axios"; // Importing axios to make HTTP requests

function Create() {
  // Defining state variables for title, year, and poster, each initialized to an empty string
  const [title, setTitle] = useState(''); 
  const [year, setYear] = useState(''); 
  const [poster, setPoster] = useState(''); 

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form behavior, such as page reload
    console.log(title); // Logs the current movie title to the console for debugging

    // Creating a movie object with the current values of title, year, and poster
    const movie = { title, year, poster };

    // Sending a POST request to the server with the movie data
    axios.post('http://localhost:4000/api/movies', movie)
      .then(response => console.log(response.data)) // Logs the server response on success
      .catch(error => console.error(error)); // Logs an error message on failure
    
    console.log(movie); // Logs the movie object to confirm data before sending
  };
  
  return (
    <div>
      <h2>This is my Create Component.</h2>
      
      {/* Form with an onSubmit event to trigger the handleSubmit function */}
      <form onSubmit={handleSubmit}>
        
        {/* Input field for Movie Title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input 
            type="text"
            className="form-control"
            value={title} // The input's value is controlled by the title state
            onChange={(e) => { setTitle(e.target.value); }} // Updates title state on input change
          />
        </div>

        {/* Input field for Movie Year */}
        <div className="form-group">
          <label>Movie Year:</label>
          <input
            type="text"
            className="form-control"
            value={year} // The input's value is controlled by the year state
            onChange={(e) => { setYear(e.target.value); }} // Updates year state on input change
          />
        </div>

        {/* Input field for Movie Poster URL */}
        <div className="form-group">
          <label>Movie Poster:</label>
          <input
            type="text"
            className="form-control"
            value={poster} // The input's value is controlled by the poster state
            onChange={(e) => { setPoster(e.target.value); }} // Updates poster state on input change
          />
        </div>

        {/* Submit button for the form */}
        <input type="submit" value="Add Movie" />
        
      </form>
    </div>
  );
}

export default Create; // Exporting the Create component to use in other parts of the app
