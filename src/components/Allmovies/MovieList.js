import React from "react"
import MovieTile from "./MovieTile"
import Spinner from 'react-bootstrap/Spinner'

const MovieList = props => {
const receivedItems = [props.items];
const  movieList = receivedItems[0].Search

// console.log(typeof(movieList))
// console.log((movieList))
 console.log((receivedItems))
// console.log(typeof(receivedItems))

    if(receivedItems.length === 0){

        return(
            <div className="">
                <center> <Spinner animation="grow" className="display-4" /><br/> Loading</center>
            </div>
        );
    }
return(
    <>        
{/* <div className="container"> */}

  <div className="card-group">
  {receivedItems.map(movie =>( 
       <MovieTile 
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            id={movie.imdbID}
             />
    )
    )}
    

  </div>

  


        
    </>
);

}
export default MovieList;