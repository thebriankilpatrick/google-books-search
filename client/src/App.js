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
    savedBooks: [],
    myBooks: []
  };

  componentDidMount = () => {
    API.viewSavedBooks().then(res => {
      this.setState({ myBooks: res.data });
      console.log(this.state.myBooks);
    })
  }

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
         author: this.state.savedBooks.volumeInfo.authors[0],
         description: this.state.savedBooks.volumeInfo.description,
         coverImage: this.state.savedBooks.volumeInfo.imageLinks.thumbnail,
         link: this.state.savedBooks.volumeInfo.infoLink
      }).then(res => {
        console.log(res);
      })
    })
  }

  handleDelete = (event) => {
    let id = event.target.id;
    API.deleteBook(id).then(res => {
      this.componentDidMount();
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <Router >
        <div>
          <Header></Header>
          <Wrapper >
          <Route exact path="/">
              <Search 
                handleFormSubmit={this.handleFormSubmit}
                onChange={this.handleInputChange}
                searchedResults={this.state.searchedResults}
                handleSave={this.handleSave}
              />
            </Route>
            <Route exact path="/search">
              <Search 
                handleFormSubmit={this.handleFormSubmit}
                onChange={this.handleInputChange}
                searchedResults={this.state.searchedResults}
                handleSave={this.handleSave}
              />
            </Route>
            <Route exact path="/saved">
              <Saved 
                myBooks={this.state.myBooks}
                handleDelete={this.handleDelete}
              /> 
            </Route>     
          </Wrapper>
        </div>
      </Router>
    );
  }
}


export default App;
