
import React, {useState, useCallback} from 'react';
import { 
  BrowserRouter as Router , 
  Route, 
  Redirect, 
  Switch, 
  BrowserRouter
} from "react-router-dom"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation/Navbar"
import Allmovies from "./components/Allmovies/Allmovies"
import "./components/Shared/sb-admin-2.css";  
import {AuthContext} from "./components/context/auth-context"

const  App = () =>  {
  const [isLoggedIn, setIsLoggedIn] = useState(() => { return (true)});
  const [userId, setUserId] = useState(() => { return (false)});

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  } , [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, [])


let routes ; 

if(isLoggedIn){
  routes = (
     <React.Fragment>
     <Navigation /> 
       <Route path="/all" exact >
        <Allmovies />
      </Route>
      <Route path="/wishlist" exact>
        <div className="display-4 flex">Wishlist is coming</div>
        {/* <Wishlist/> */}
      </Route>
      <Route path="/favourite" exact>
      <div  className="display-4 flex">Favourite is coming</div>

        {/* <Favourite/> */}
      </Route> 
      <Redirect to="/all" /> 
     </React.Fragment>  
  );
}else{
  routes = (
    <React.Fragment>
           <Navigation /> 
      <Route path="/login" exact >
       <Login />
     </Route>
      <Route path="/signup" exact >
       <Signup />
     </Route>
      <Route path="/all" exact >
       <Allmovies />
     </Route>
     <Redirect to="/all" /> 
    </React.Fragment>  
  );
}
        
  return (

      
<AuthContext.Provider
 value={{
   isLoggedIn: isLoggedIn, 
   userId : userId,
   login : login , 
   logout: logout 
   }} 
   >
  <BrowserRouter>
    <Switch>
      <Router >
        {routes}
      </Router>
    </Switch>
  </BrowserRouter>
</AuthContext.Provider>
  
  );
}

export default App;

