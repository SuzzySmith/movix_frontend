import React from "react"
import MovieTile from "./MovieTile"
import Accordion from 'react-bootstrap/Accordion'
import Spinner from 'react-bootstrap/Spinner'

const MovieList = props => {
   const receivedItems = props.items
   console.log(receivedItems)
    if(receivedItems.length === 0){

        return(
            <div className="">
                <center> <Spinner animation="grow" className="display-4" /><br/> Loading</center>
            </div>
        );
    }
return(
    <>
    {receivedItems.map(customer =>(
    <Accordion  >
        <MovieTile 
            key={customer.id}
            id={customer._id}
            image={customer.image}
            name={customer.name}
            mobile={customer.mobile}
            city={customer.city}
            address={customer.address}
            gps={customer.gps}
            email={customer.email}
             />
    </Accordion>
    )
    )}
    </>
);

}
export default MovieList;