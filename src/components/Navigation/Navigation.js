import React from 'react'; 

import {NavLink} from 'react-router-dom' 
const sideBar = props =>
(
    <header className={props.navClass}>
        <nav className="sideNav-navigation">
            <div className="sideNav-navigation-items">
                <ul>
                    <li><NavLink className="active" to='/'>Home</NavLink></li>
                    <li><NavLink to='/rules'>rules</NavLink></li>
                    <li><NavLink to='/'>Metrics</NavLink></li>
                    <li><NavLink to='/'>donations</NavLink></li> 
                    <li className="desc"><span>Texas420</span> A noob "friendly" no KOS server</li>
                </ul>
            </div> 
        </nav>
        <div className="border-color"></div>
    </header>

);

export default sideBar; 