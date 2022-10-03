import React, { Component } from "react";
import "./FaceRecognition.css";

const boundingBox = (box) => {
    if (!box)
        return <h4>There is no any bounding box parameters</h4>
    return <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>;
}

class FaceRecognition extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        if (!this.props.imageUrl)
            return <h4 className="center pa2 shadow-5">No picture uploaded</h4>
        return (
        <div className="center ma">   
            <div className="absolute mt2 center pa2 shadow-5 ">
                <img id="myImage" src={this.props.imageUrl} alt="This is my picture" width="500px" height="auto"></img>
                {boundingBox(this.props.box)}
            </div>
        </div>
        );
    }
}

export default FaceRecognition;