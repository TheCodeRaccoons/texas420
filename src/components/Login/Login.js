import './Login.scss'
import React from 'react';
const Login = () => {
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
                    <input type="text"  className="login-username" autoFocus required placeholder="User" />
                    <input type="password"  className="login-password" placeholder="Password" />
                    <input type="submit" name="Login" value="Login"  className="login-submit" />
                </form> 
            </div>
            <div  className="underlay-photo"></div>
            <div  className="underlay-black"></div> 
        </React.Fragment>
    )
}

export default Login;