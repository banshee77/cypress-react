import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Nav';
import Hackathon2020 from './components/Hackathon2020';
import Message from './components/Message';
import Team from './components/Team';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/teamqoq">
           <Team />
          </Route>
          <Route path="/hackathon2020">
            <Hackathon2020 />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/">
            <Home />
          </Route>          
        </Switch>
      </div>    
    </Router>
  );
}