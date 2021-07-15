import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import { useSelector,  useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { autoLogin } from './actions/userActions' 

import Login from './pages/Login/login'
import SignUp from './pages/SignUp/signup'
import Offer from './pages/Offer/offer'
import Search from './pages/Search/search'

export default function App() {
  const userReducer = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  
  // useEffect(() => {
  //   dispatch(autoLogin())
  // }, []);

  return (
    <div>
      { userReducer.loggedIn ? (
      // Logged In
      <>
        <p>LOGGED IN!!!</p>
      </>
    ) : (
      // Not logged in
      <p>PLEASE LOG IN M8</p>
    ) 
  }
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/search">Search</Link>
            </li>
           
            <li>
              <Link to="/offer">Offer</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/offer">
            <Offer />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
    </Router>
      </div>
  );
}

