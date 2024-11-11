// Importing the MovieItem component
import MovieItem from "./movieitem";

// Define the Movies functional component
const Movies = (props) =>{
    return props.myMovies.map(
        (movie)=>{
            // For each movie,run a MovieItem component
            return <MovieItem myMovie={movie} key={movie._id}></MovieItem>
        }
    );
}
// Export the Movies component for use in other files
export default Movies;