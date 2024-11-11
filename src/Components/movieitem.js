// Define the MovieItem functional component
const MovieItem = (props) =>{
    // Run the movie item
    return(
        <div>

            <h2>{props.myMovie.title}</h2>
            <p>{props.myMovie.year}</p>
            <img src ={props.myMovie.poster}></img>
        </div>
    );
}
// Export the MovieItem component for use in other files
export default MovieItem;