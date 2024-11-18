// Import necessary dependencies from React, React Router, and React Bootstrap
import { Link } from 'react-router-dom'; // Link is used to navigate between routes without reloading the page
import { Card } from 'react-bootstrap'; // Card is a component from React Bootstrap for styling
import { useEffect } from 'react'; // useEffect is used to perform side effects (e.g., logging)

const MovieItem = (props) => {
    // useEffect hook to log the current movie data whenever `props.mymovie` changes
    useEffect(() => {
        // Log the `mymovie` prop to the console (this can be useful for debugging)
        console.log("Movie Item:", props.mymovie);
    }, [props.mymovie]); // The effect runs when the `mymovie` prop changes

    return (
        <div>
            {/* Card component used to display the movie details */}
            <Card>
                {/* Movie title displayed as a heading */}
                <h2>{props.myMovie.title}</h2>
                
                {/* Movie release year */}
                <p>{props.myMovie.year}</p>

                {/* Movie poster image */}
                <img src={props.myMovie.poster} alt={props.myMovie.title} />
                
                {/* Card body contains the update button */}
                <Card.Body>
                    {/* Link to navigate to the edit page for this specific movie */}
                    <Link className="btn btn-primary" to={"/edit/" + props.myMovie._id} >
                        Update
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

// Export the MovieItem component for use in other files
export default MovieItem;
