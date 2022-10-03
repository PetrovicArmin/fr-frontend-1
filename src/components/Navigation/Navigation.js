import React, { Component, Fragment } from "react";

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    showOptions = (route) => {
        if (route === 'sign in' || route === 'register')
            return (
                <Fragment>        
                    <p onClick={() => this.props.pageRouter('sign in')} className="f3 link dim black underline pa3 pointer">Sign In</p>
                    <p onClick={() => this.props.pageRouter('register')} className="f3 link dim black underline pa3 pointer">Register</p>
                </Fragment>
            );
        return (
            <Fragment>
                <p onClick={() => this.props.pageRouter('sign in')} className="f3 link dim black underline pa3 pointer">Sign out</p>
            </Fragment>
        );
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                {this.showOptions(this.props.currentPage)}
            </div>
        ); 
    }
}

export default Navigation;