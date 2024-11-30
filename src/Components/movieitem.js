// Import necessary dependencies from React, React Router, and React Bootstrap
import { Link } from 'react-router-dom'; // Link is used to navigate between routes without reloading the page
import { Card } from 'react-bootstrap'; // Card is a component from React Bootstrap for styling
import { useEffect } from 'react'; // useEffect is used to perform side effects (e.g., logging)
import Button from 'react-bootstrap/Button';
import axios from "axios";

const MovieItem = (props) => {

    const handleDelete = (e)=> {
        e.preventDefault();
        console.log("Delete: ")
        axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
        .then(() => {
            props.Reload(); // Refresh the movie list after deletion
        })
        .catch((error) => {
            console.error("Error deleting movie:", error);
        });
};
    

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
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

// Export the MovieItem component for use in other files
export default MovieItem;
