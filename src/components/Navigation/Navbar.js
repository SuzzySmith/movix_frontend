import React, { useContext } from "react"
import { faSignOutAlt, faStar, faHeart, faFilm } from "@fortawesome/free-solid-svg-icons";
import NavItems from "./NavItems"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { AuthContext } from "../context/auth-context"
import swal from "sweetalert"
import Logo from "../images/movix.png";


const Navigation = () => {
 const auth= useContext(AuthContext);

  const handleLogout = e => {
    swal({
      title: "Do you want to log out?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      auth.logout();
      } else {
      }
    });    
}
    return (
        <Navbar  expand="lg" className=" bg-gradient-primary text-white mb-3 ">
        <Navbar.Brand  className=" text-white  pr-5 ">
        MOVIX 
      <img src={Logo} alt="Logo" width="50" height="44"/>
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" text-white  " />

        <Navbar.Collapse className=" text-white  " id="responsive-navbar-nav" >
            <Nav className="mr-auto text-white">
                {/* <Nav.Link className=" text-white pr-3 "><NavItems icon={faTachometerAlt} name="Dashboard" link="/dashboard"  /></Nav.Link> */}
                {/* <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             All Movies
                  </button>
                <div class="dropdown-menu">
               <a class="dropdown-item" href="#">Action Movies</a>
               <a class="dropdown-item" href="#">Ghanaian Movies</a>
               <a class="dropdown-item" href="#">Nigerian Movies</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
               </div>                 */}
               <Nav.Link className=" text-white pr-3 ">
                  <NavItems icon={faFilm} name="All Movies" link="/all"  />
                </Nav.Link>

                <Nav.Link className=" text-white pr-3 ">
                  <NavItems icon={faStar} name="Favourite"  link="/favourite" />
                </Nav.Link>

                <Nav.Link className=" text-white pr-3 ">
                  <NavItems icon={faHeart} name="Wishlist" link="/wishlist"  />
                </Nav.Link>

                <Nav.Link className=" text-white pr-3 " onClick={handleLogout}>
                  <NavItems icon={faSignOutAlt} name="Logout" link={window.location.pathname}   />
                </Nav.Link>
            </Nav>
          
        </Navbar.Collapse>
        
       </Navbar>
    )
}
export default Navigation;


