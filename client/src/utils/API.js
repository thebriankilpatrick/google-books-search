import axios from "axios";
const key = "&key=AIzaSyBCbxsdjBPKIvd6rble1hwEZ6BbffLJi2o";

export default {

    // Searches Google Books API
    searchBook: function(bookTitle) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookTitle + key);
    },

    // searchID: function(bookID) {
    //     return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookID + key);
    // },

    // Saves searched book to DB
    saveBook: function(bookData) {
        return axios.post("/book", bookData);
    },

    // Gets all saved books from DB
    viewSavedBooks: function() {
        return axios.get("/book");
    },

    // Deletes a book from DB
    deleteBook: function(id) {
        return axios.delete("/book/" + id);
    }
}