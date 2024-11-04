import { useState } from "react"; // Importing useState hook from React
import axios from "axios";

function Create() {
  // Defining state variables for title, year, and poster, with their initial values set to empty strings
  const [title, setTitle] = useState(''); 
  const [year, setYear] = useState(''); 
  const [poster, setPoster] = useState(''); 

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission (refreshing the page)
    console.log(title); // Logs the movie title to the console
    const movie = {title,year,poster}

    axios.post('http://localhost:4000/api/movies',movie)
    .then()
    .catch();
    console.log(movie);
  }
  
  return (
    <div>
      <h2>This is my Create Component.</h2>
      
      {/* Form with onSubmit event calling handleSubmit function */}
      <form onSubmit={handleSubmit}>
        
        {/* Input field for Movie Title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title} // Binding title state to the input value
            onChange={(e) => { setTitle(e.target.value) // Updates title state on change
            }}
          />
        </div>

        {/* Input field for Movie Year */}
        <div>
          <label>Movie Year:</label>
          <input
            type="text"
            className="form-control"
            value={year} // Binding year state to the input value
            onChange={(e) => { setYear(e.target.value) // Updates year state on change
            }}
          />
        </div>

        {/* Input field for Movie Poster */}
        <div>
          <label>Movie Poster:</label>
          <input
            type="text"
            className="form-control"
            value={poster} // Binding poster state to the input value
            onChange={(e) => { setPoster(e.target.value) // Updates poster state on change
            }}
          />
        </div>

        {/* Submit button for the form */}
        <input type="submit" value="Add Movie" />
        
      </form>
    </div>
  );
}

export default Create;
