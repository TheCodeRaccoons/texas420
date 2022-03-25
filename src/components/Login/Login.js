import './Login.scss'
import React, {useState} from 'react';
import {credentials} from '../../client'



const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let onSetUsername = (e) => {
        setUsername(e.target.value)
    }
    let onSetPassword = (e) => {
        setPassword(e.target.value)
    }  
    let validateLogin = (e) => {
        e.preventDefault(); 
        let validUsr = false;
        if( username === credentials.usernameFog){  
            validUsr = true;
        } 
        if( username === credentials.usernameSB){  
            validUsr = true;
        } 
        if( username === credentials.usernameClover && !validUsr) {   
            validUsr = true;
        }
        if(password === credentials.pw && validUsr) 
        {
            props.onLogin(); 
        }   
    } 
    return(
        <React.Fragment> 
            <div className='login-container'>
                <form className="login-form">
                    <p  className="login-text">
                        <span  className="fa-stack fa-lg">
                            <i  className="fa fa-circle fa-stack-2x"></i>
                            <i  className="fa fa-lock fa-stack-1x"></i>
                        </span>
                    </p>
                    <input type="text" value={username} onChange={onSetUsername} className="login-username" autoFocus required placeholder="User" />
                    <input type="password" value={password} onChange={onSetPassword} className="login-password" placeholder="Password" />
                    <button name="Login" value="Login"  className="login-submit" onClick={validateLogin}>Login</button>
                </form> 
            </div>
            <div  className="underlay-photo"></div>
            <div  className="underlay-black"></div> 
        </React.Fragment>
    )
}

export default Login;