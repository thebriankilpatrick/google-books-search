import React from "react";

// Don't forget, you shouldn't loop your row and col into your map/render function
// Your cards will not be sized correctly.

function Saved(props) {
    return (
        <div className="row">
                {props.myBooks.map((results) => {
                    return (
                        <div className="col l3 m4 s12">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={results.coverImage}/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">{results.title}<i className="material-icons right">more_vert</i></span>
                                    <p><a href={results.link} target="_blank">More Info</a></p>
                                    <p><a onClick={props.handleDelete} id={results._id} className="pointer">Delete Book</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">{results.title}<i className="material-icons right">close</i></span>
                                    <p>Author: {results.author}</p>
                                    <p>{results.description}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
    )
}

export default Saved;