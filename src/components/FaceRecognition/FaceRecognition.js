import React, { Component } from "react";

class FaceRecognition extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.imageUrl)
            return <h4 className="center pa2 shadow-5">No picture uploaded</h4>
        return (
            <div className="center pa2 shadow-5 ">
                <img src={this.props.imageUrl} alt="This is my picture" width="500px" height="auto"></img>
            </div>
        );
    }
}

export default FaceRecognition;