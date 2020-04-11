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
    searchedBook: "",
    searchedResults: []
  };

  handleInputChange = (event) => {
    this.setState({searchedBook: event.target.value});
    // console.log(event.target.value);
  }

  handleFormSubmit = (event) => {
    console.log(this.state.searchedBook);
    event.preventDefault();
    API.searchBook(this.state.searchedBook).then(res => {
      // console.log(this.state);
      this.setState({ searchedResults: res.data.items });
      console.log(this.state.searchedResults)
    })
  }

  // value={this.state.searchedBook}
  // title={this.state.searchedResults.volumeInfo.title}
  // author={this.state.searchedResults.volumeInfo.authors[0]}
  // description={this.state.searchedResults.volumeInfo.description}
  // coverImg={this.state.searchedResults.volumeInfo.imageLinks.smallThumbnail}
  // link={this.state.searchedResults.volumeInfo.infoLink}

  render() {
    return (
      <Router >
        <div>
          <Header></Header>
          <Wrapper >
            <Route exact path="/search">
              <Search 
                handleFormSubmit={this.handleFormSubmit}
                onChange={this.handleInputChange}
                searchedResults={this.state.searchedResults}
              />
            </Route>
            <Route exact path="/saved">
              <Saved /> 
            </Route>     
          </Wrapper>
        </div>
      </Router>
    );
  }
}


export default App;
