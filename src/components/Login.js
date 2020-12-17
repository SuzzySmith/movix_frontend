
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import two from "../images/two.jpg"


function Login({ handleLoginstate }) {
    const [userName, setUserName] = useState(""),
      [alert, setAlert] = useState(""),
      [password, setPassword] = useState(""),
      history = useHistory();
  
    function handleName(e) {
      setUserName(e.target.value);
    }
  
    function handleEmail(e) {
      setUserName(e.target.value);
    }
  
    function handlePassword(e) {
      setPassword(e.target.value);
    }
  
    function handleLoginClick(e) {
      e.preventDefault();
      let users = JSON.parse(localStorage.getItem("users"));
      if (users !== null) {
        let user = users[userName];
        if (user && user.password === password) {
          handleLoginstate(true, user);
          history.push("/");
        } else setAlert("Wrong user name or password");
      } else setAlert("Unknown user..Signup");
    }
	return(
      

          <div className="main alert alert-secondary">
            {/* <img src={two} alt="two" /> */}

      
	<div className="card  justify-content-center container col-lg-4 col-md-6 col-sm-10 mt-5 p-0">
		<div className="card-header h5 text-white d-flex justify-content-center">MOVIX</div>
       
    <form action="/list" method="get" o >
   
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
        <i className="fa fa-user" aria-hidden="true"></i>
            <input type="text" 
            id="usernme"  
            lass="form-control"
             placeholder="Username" 
             required="required"  
             onChange={handleName}/>
        </div>
        <div className="form-group">
        <i className="fa fa-user" aria-hidden="true"></i>
            <input
             type="email" 
             id="email" 
             class="form-control"
              placeholder="Email" 
              required="required"  
              onChange={handleEmail}/>
        </div>
        <div className="form-group">
        <i className="fa fa-lock" aria-hidden="true"></i>
            <input type="password"  
            class="form-control"
             placeholder="Password" 
             required="required"  
             onChange={handlePassword}/>
        </div>
        <div className="form-group">
            <button type="submit" 
            class="btn btn-primary btn-block" 
            onClick={handleLoginClick}>
              Log in
            </button>
        </div>
        <div className="clearfix">
        </div>        
    </form>
    <p class="text-center"><a href="/Signup">Sign Up</a></p>
</div>
</div>
    )}

export default Login;