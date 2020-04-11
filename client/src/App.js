import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import API from "./utils/API";
import axios from "axios";
import "./App.css";

class App extends Component {

  state = {
    searchedBook: "",
    searchedResults: [],
    savedBooks: []
  };

  handleInputChange = (event) => {
    this.setState({searchedBook: event.target.value});
    // console.log(event.target.value);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchBook(this.state.searchedBook).then(res => {
      // console.log(this.state);
      this.setState({ searchedResults: res.data.items });
      console.log(this.state.searchedResults);
    })
  }

  handleSave = (event) => {
    let id = event.target.id;
    console.log(id);
    console.log(this.state.searchedResults);

    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + id).then(res => {
      this.setState({savedBooks: res.data.items[0]});
      console.log(this.state.savedBooks);
    }).then(() => {
      API.saveBook({
        title: this.state.savedBooks.volumeInfo.title,
         authors: this.state.savedBooks.volumeInfo.authors[0],
         description: this.state.savedBooks.volumeInfo.description,
         image: this.state.savedBooks.volumeInfo.imageLinks.thumbnail,
         link: this.state.savedBooks.volumeInfo.infoLink
      }).then(res => {
        console.log(res);
      })
    })

    // API.searchID(id).then(res => {
    //   // this.setState({savedBooks: res.data.items});
    // })
    // this.setState({ savedBooks: data })
  }

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
                handleSave={this.handleSave}
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
