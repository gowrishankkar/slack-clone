import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AppBody>
          <SideBar />
          <Switch>
            <Route path="/" exact></Route>
            <Route path="/topic">
              <h1>Topic page</h1>
            </Route>
          </Switch>
        </AppBody>
      </div>
    </Router>
  );
}

export default App;



const AppBody = styled.div`
 display: flex;
 height: 100vh;
`;