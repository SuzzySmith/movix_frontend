import React, { useState }from "react";
import {Link} from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSms, faPhone, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import swal from 'sweetalert2'


const MovieTile = props => {

    return(
  <>
  <Card style={{ borderBottom:'0px', borderRadius:'0px'}} >
    <Card.Header  style={{ height: '2.7rem', padding:'1px', borderBottom:'0px'}} >

        <Accordion.Toggle as={Card.Header} variant="light"  eventKey={props.id}>
            <Link to={`/${props.id}/`} ></Link>  {props.name}
        </Accordion.Toggle>

            
    </Card.Header>

    <Accordion.Collapse eventKey={props.id}>
      <Card.Body>
            <div><strong> Mobile: </strong>{props.mobile} </div>
            {props.email 
            ?<div><strong> Email:</strong> {props.email} </div>
            :""}
            {props.address||props.city 
              ?<div><strong> Address:</strong> {props.address}, {props.city} </div>
              :""
            }
            {props.gps
              ?<div><strong> GhanaPostGps: </strong>{props.gps} </div> 
              : "" 
            }
            <ButtonGroup aria-label="Basic example" className="d-flex d-none d-sm-block"  >
                <Button variant="primary"id={props.mobile} title="Call"   > 
                    <FontAwesomeIcon icon={faPhone} /> 
                </Button>
                <Button variant="success" id={props.mobile} title="Send SMs" >        
                  <FontAwesomeIcon icon={faSms}/>
                </Button>
                <Button variant="dark" id={props.id} title="Edit Contact" ><FontAwesomeIcon icon={faEdit} /> </Button>
                {/* <Button variant="warning" id={props.mobile} title="Copy Number" onClick={copyToClipboard} ><FontAwesomeIcon icon={faCopy} /> </Button> */}
                <Button variant="danger" title="Delete Contact" id={props.id}  ><FontAwesomeIcon icon={faTrashAlt} /> </Button>
            </ButtonGroup>
      </Card.Body>
            
    </Accordion.Collapse>
  </Card> 

      </>  
);

}
export default MovieTile; 