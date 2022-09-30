import React, { Component } from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tilt className="Tilt ct br2 shadow2 pa3 ma4 mt0" scale={0.75}>
                <div style={{ height: '220px', width: '250px' }}>
                    <img src={brain} style={{paddingTop: '5px'}} width="200" height="200"/>
                </div>
            </Tilt>
        );
    }
}

export default Logo;