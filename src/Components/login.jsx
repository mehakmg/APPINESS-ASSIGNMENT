import React, { useState } from 'react';
import { connect } from 'react-redux';
import {  BrowserRouter as Route, Router, useHistory } from 'react-router-dom';
import Employee from './employee'
import { withRouter } from 'react-router-dom';

let usernameInput = React.createRef();
let passInput = React.createRef();

const PostLogin = (props) => {
    console.log(props.postsLogin.username)
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const submitLogin = () => {
        let isInputValid = true;
        console.log(usernameInput.current.value);
        if (usernameInput.current.value !== props.postsLogin.username) {
            setErrorUsername("username not valid");
            isInputValid = false;
        }
        if (passInput.current.value !== props.postsLogin.password) {
            setErrorPassword("password not valid")
            isInputValid = false;
        } 
        if(isInputValid) {
            setErrorUsername("");
            setErrorPassword("");
            props.dispatchLoggedInEvent();
            props.history.push('/dashboard')
        }
    }
    return (
        <div>
            <button style={{float:"right",marginRight:"10px"}} onClick={() => {props.history.push('/about')}}>About Us</button>
            <div className="mydiv">
                <h2>Login into your account</h2><br/>
                Username: <input ref={usernameInput} type="text" name="username " placeholder="username"></input><br /><span>{errorUsername}</span><br />
                Password: <input ref={passInput} type="text" name="password" placeholder="password"></input><br /><span>{errorPassword}</span><br />
                <button onClick={submitLogin}>Submit</button>
            </div>
         </div>
    )

}

const mapStateToProps = state => {
    console.log(state)
    return {
        postsLogin: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoggedInEvent : ()=> {
            dispatch({type:"LOGGEDIN"});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PostLogin))