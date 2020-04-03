import React from "react";

// Don't forget, you shouldn't loop your row and col into your map/render function
// Your cards will not be sized correctly.

function Saved() {
    return (
        <div>
            <div className="row">
                <div className="col l3 m4 s12">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="images/office.jpg"/>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Book Title<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">Book's Info Link</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Book Title<i className="material-icons right">close</i></span>
                            <p>...Book Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saved;