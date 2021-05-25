import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            
            <Header/>
          </Route>
          <Route path="/topic">
            <h1>Topic page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
