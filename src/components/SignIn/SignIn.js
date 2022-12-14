import React, { Component } from "react";
import "./SignIn.css";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.user = {};
    }

    changeEmail = (event) => {
        this.user.email = event.target.value;
    }

    changePassword = (event) => {
        this.user.password = event.target.value;
    }

    render() { 
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80 ">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.changeEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.changePassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                        </fieldset>
                        <div className="">
                        <input onClick={() => this.props.pageRouter('home', this.user)} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                        <p onClick={() => this.props.pageRouter('register')} className="pointer f6 link dim black db">Not registered? Not a problem!</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;