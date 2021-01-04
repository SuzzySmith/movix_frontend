/* eslint-disable jsx-a11y/alt-text */
import React, { useState }from "react";
import {Link} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSms, faPhone, faEdit, faTrashAlt, faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import swal from 'sweetalert2'


const MovieTile = props => {
console.log(props)
    return(
  <>
  
  <div className="col-sm-4" style={{display:"inline"}}>
    <div><img src={props.poster} width='200px' /></div>
      <div><strong> Title: </strong>{props.title} </div>
      <div><strong> Year:</strong> {props.year} </div>
      <div className='btn btn-danger'>Watch Trailer</div>&nbsp;
      <div className='btn btn-dark'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>&nbsp;
      <div className='btn btn-success'><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></div>
  </div>



      </>  
);

}
export default MovieTile; 