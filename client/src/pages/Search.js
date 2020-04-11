import React from "react";

function Search(props) {
    return (
        <div>
            <h1>Search Page</h1>
            <div className="container">
                <div className="row">
                    <form className="col l12 m12 s12">
                        <div className="row">
                            <div className="input-field col l6 m6 s12">
                                <i className="material-icons prefix">book</i>
                                <input id="icon_prefix" type="text" className="validate" value={props.handleInputChange} onChange={props.onChange}/>
                                <label for="icon_prefix">Book Title</label>
                            </div>
                            <button id="btnPosition" className="btn waves-effect waves-light" type="submit" name="action" value={props.value} onClick={props.handleFormSubmit}>Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="row">
                    {props.searchedResults.map((results) => {
                        return (
                            <div className="col l3 m4 s12">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src={results.volumeInfo.imageLinks.thumbnail}/>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">{results.volumeInfo.title}<i className="material-icons right">more_vert</i></span>
                                        <p><a href={results.volumeInfo.infoLink} target="_blank">More Info</a></p>
                                        <p><a>Save Book</a></p>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title grey-text text-darken-4">{results.volumeInfo.title}<i className="material-icons right">close</i></span>
                                        <p>Author: {results.volumeInfo.authors[0]}</p>
                                        <p>{results.volumeInfo.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search;


// title={this.state.searchedResults.volumeInfo.title}
  // author={this.state.searchedResults.volumeInfo.authors[0]}
  // description={this.state.searchedResults.volumeInfo.description}
  // coverImg={this.state.searchedResults.volumeInfo.imageLinks.smallThumbnail}
  // link={this.state.searchedResults.volumeInfo.infoLink}