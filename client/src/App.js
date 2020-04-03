import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import API from "./utils/API";
import "./App.css";

class App extends Component {

  state = {
    searchedBook: ""
  };

  handleInputChange = (event) => {
    this.setState({searchedBook: event.target.value});
    // console.log(event.target.value);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchBook(this.state.searchedBook).then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <Router >
        <div>
          <Header></Header>
          <Wrapper onClick={this.handleFormSubmit}
            onChange={this.handleInputChange}
            value={this.state.searchedBook}>
            <Route exact path="/saved" component={Saved}/>
            <Route exact path="/search" component={Search}/>     
          </Wrapper>
        </div>
      </Router>
    );
  }
}


export default App;
