import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

function App() {
  return (
    <Router >
      <div>
        <Header></Header>
        <Wrapper >
          <Route exact path="/saved" component={Saved}/>
          <Route exact path="/search" component={Search}/>     
        </Wrapper>
      </div>
    </Router>
  );
}


export default App;
