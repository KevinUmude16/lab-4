// Importing the MovieItem component, which will be used to display each individual movie
import MovieItem from "./movieitem";

// Define the Movies component which receives props (properties) as an argument
function Movies(props) {
    return (
        <>
            {/* Iterate over the list of movies passed as "myMovies" prop */}
            {props.myMovies.map((movie) => (
                // For each movie, render a MovieItem component
                // Pass the individual movie data as a prop called "myMovie"
                // Assign a unique "key" to each MovieItem using the movie's unique ID
                // Pass the ReloadData function from the parent component to the MovieItem as a prop
                <MovieItem
                    myMovie={movie}  // Passing movie data to MovieItem
                    key={movie._id}  // Unique key to help React identify the movie in the list
                    Reload={props.ReloadData}  // ReloadData function passed to trigger data reload
                />
            ))}
        </>
    );
}

// Export the Movies component so it can be used in other parts of the application
export default Movies;
