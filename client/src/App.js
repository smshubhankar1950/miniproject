import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Section } from './Components/Section/Section';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router basename="/">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/confirm" component={Section}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
