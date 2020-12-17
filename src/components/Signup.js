import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Signup() {
    const [name, setName] = useState(""),
      [email, setEmail] = useState(""),
      [password, setPassword] = useState(""),
      [msg, setMsg] = useState(""),
      history = useHistory();
  
    function handleName(e) {
      setName(e.target.value);
    }
  
    function handleEmail(e) {
      setEmail(e.target.value);
    }
  
    function handlePassword(e) {
      setPassword(e.target.value);
    }
    function handleMsg() {
      return msg;
    }
  
    const onSignUp = (e) => {
      e.preventDefault();
      if (name && email && password) {
        let thisUser = { name, email, password },
          usersJSON = localStorage.getItem("users"),
          users = usersJSON ? JSON.parse(usersJSON) : {};
  
        //    !users && users={}
        users[name] = thisUser;
        localStorage.setItem("users", JSON.stringify(users));
        setMsg("Successfully Signed up..You will be redirected to login page");
        setTimeout(() => {
          history.push("/login");
        }, 3000);
      } else {
        setMsg("Invalid input");
      }
    };
    return (

	<div className="card  justify-content-center container col-lg-4 col-md-6 col-sm-10 mt-5 p-0">
        img src
		<div className="card-header h5 text-white bg-info d-flex justify-content-center">MOVIX</div>
	
    <form action="/list" method="get"  >
        <h2 className="text-center"> REGISTER </h2>       
        <div className="form-group">
            <input type="text" id="un"  class="form-control" placeholder="Full Name" required="required" onChange={handleName}/>
        </div>
        <div className="form-group">
            <input type="text" id="un"  class="form-control" placeholder="Email" required="required" onChange={handleEmail}/>
        </div>
        <div className="form-group">
            <input type="password"  class="form-control" placeholder="Password" required="required" onChange={handlePassword}/>
        </div>
        <div className="form-group">
            <input type="password"  class="form-control" placeholder="Confirm Password" required="required"/>
        </div>
          <div className="form-group">
            <button type="submit" class="btn btn-primary btn-block" onClick={onSignUp}>Sign Up</button>
            {msg ? <span>{handleMsg()}</span> : null}
            {/* </Link> */}
        </div>
        <div>
            Already have an account? <i to="/login">Login here</i>
          </div>
        <div className="clearfix">
        </div>        
    </form>
    
</div>

	)
};

export default Signup;