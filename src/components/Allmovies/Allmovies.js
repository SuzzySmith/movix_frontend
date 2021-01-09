import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import MovieList from "./MovieList";
import swal from "sweetalert2";
import axios from "axios";

const Allmovies = () => {
const [send, setSend] = useState([]);
const [noContact, setNoContact] = useState();

const getMovies = async (req) => {

  //const uid= localStorage.getItem('currentUserId')
//let responseData;

 try { 
     await axios.get('http://localhost:4000/movies/')
                        .then(response => {
                               if(!response.data.Response){
                                    setNoContact(response.data.Response)
                                }else{
                                  if(response.data === false){
                                    swal.fire("Contacts list database could not be reached",)
                                }else{
                                        setSend(response.data) 
                                        console.log(response.data) 
                                    }
                                }
                                  
                                  }); 

 }catch(error){
  
 }
};

useEffect(() => {
    getMovies()
}, [])

return (<>
        <div className="container-fluid">

        <h1 className="h3 mb-2 text-gray-800">All Movies</h1>
          
        <p className="mb-4">Put a descriptive text here</p>
        {/*Tabed Menu Row*/}
        <div className="row">
           <div className="col-lg-8 col-md-8 col-sd-12 mb-3">

                <div id="refreshlist" className="btn btn-warning btn-icon-split mx-2 mb-3">
                  <span className="icon text-white-50">
                  <FontAwesomeIcon icon={faSyncAlt} />
                  </span>
                  <span className="text">Refresh List</span>
                </div>
            </div> 
            </div>
        </div>


        <div className="container-fluid">

      {/*Content Row*/}
       <div className="row">


       <div className="card  mb-4 col-lg-3 py-0 px-0  col-md-3 col-sd-12 mb-3">
       <div className="card-header py-3 d-flex flex-row  justify-content-between ">
            <h6 className="m-0 font-weight-bold text-primary">Categories</h6>
          </div>
          <div className="card-body pl-3" >
          <ul className="list-group">
              <li className="active btn list-group-item" id='movies'>All Movies</li>
              <li className="btn list-group-item" id='africa'>African Movies</li>
              <li className="btn list-group-item" id='ghana'>Ghanaian Movies</li>
              <li className="btn list-group-item" id='europe'>European Movies</li>
              <li className="btn list-group-item" id='india'>Hindi Movies</li>
              <li className="btn list-group-item" id='american'>American Fiction</li>
          </ul>
          </div>
          </div>

        <div className="card shadow mb-4 col-lg-9 py-0 px-0">
          <div className="card-header py-3 d-flex flex-row  justify-content-between ">
            <h6 className="m-0 font-weight-bold text-primary">Movies</h6>

                    
           
          </div>
          <div className="card-body pl-3" >
              {noContact ? "Loading Error ERR_404" : <MovieList  items={send}/>}
              
          </div>
        </div>
      </div>


      </div>
</>
    )
}
export default Allmovies;