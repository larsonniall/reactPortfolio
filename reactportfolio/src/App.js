import React from "react";
import About from "./views/me";
import Contact from "./views/contact";
import Portfolio from "./views/portfolio";
import Nav from "./components/nav";
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
  
        <Nav />
    
      <Switch>
        <Route to="/" exact path="/" component={About} />
        <Route to="/about" exact path="/about" component={About} />
        <Route to="/contact" exact path="/contact" component={Contact} />
        <Route to="portfolio" exact path="/portfolio" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;