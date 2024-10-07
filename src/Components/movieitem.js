// Define the MovieItem functional component
const MovieItem = (props) =>{
    // Run the movie item
    return(
        <div>

            <h2>{props.myMovie.Title}</h2>
            <p>{props.myMovie.Year}</p>
            <img src ={props.myMovie.Poster}></img>
        </div>
    );
}
// Export the MovieItem component for use in other files
export default MovieItem;