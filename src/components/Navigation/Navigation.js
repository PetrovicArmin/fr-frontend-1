import React, { Component } from "react";

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p className="f3 link dim black underline pa3 pointer">Sign out</p>
            </div>
        ); 
    }
}

export default Navigation;