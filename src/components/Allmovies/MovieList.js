import React from "react"
import MovieTile from "./MovieTile"
import Spinner from 'react-bootstrap/Spinner'

const MovieList = props => {
const receivedItems = [props.items]
const  movieList = receivedItems[0].Search

console.log(typeof(movieList))
console.log((movieList))
console.log(typeof(receivedItems))

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

    {/*Content Row*/}  

  {movieList.map(movie =>( 
       <MovieTile 
            key={movie.totalResults}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            id={movie.imdbID}
             />
    )
    )}



        
    </>
);

}
export default MovieList;