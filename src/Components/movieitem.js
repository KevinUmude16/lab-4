// Define the MovieItem functional component
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { useEffect } from 'react';
const MovieItem = (props) =>{
    // Run the movie item
useEffect(() =>{
    console.log("Movie Item:", props.mymovie);
}, [props.mymovie]);

    return(
        <div>
            <Card>
            <h2>{props.myMovie.title}</h2>
            <p>{props.myMovie.year}</p>
            <img src ={props.myMovie.poster}></img>
            <Card.Body>
            <Link className="btn btn-primary" to={"/edit/" + props.myMovie._id} >Update</Link>
            </Card.Body>
            </Card>
        </div>
    );
}
// Export the MovieItem component for use in other files
export default MovieItem;