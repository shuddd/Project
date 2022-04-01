import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Join from './Components/Join';
import Login from './Components/Login';
import AboutUs from './Components/AboutUs';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Switch>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/aboutUs">
            <AboutUs/>
          </Route>
          <Route path="/join">
            <Join/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home>{document.body.style.backgroundColor='#E5F2FA'}</Home>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
