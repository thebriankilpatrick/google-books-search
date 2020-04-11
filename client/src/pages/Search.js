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
            </div>
        </div>
    )
}

export default Search;