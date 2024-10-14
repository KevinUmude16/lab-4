// Importing the Movies component
import{useEffect, useState} from 'react';
import Movies from "./movies";
import axios from "axios";
// Define the Read functional component
const Read = () => {
// Sample data array containing movie objects

    const [movies, setMovies] = useState([]);

  useEffect(
      () => {
        axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response)=>{
        console.log(response.data.movies);
        setMovies(response.data.movies);
      })
      .catch((error)=>{});

      }
    );


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