import React from 'react'; 
import { Link } from 'react-scroll'

const sideBar = props =>
(
    <header className={props.navClass}>
        <nav className="sideNav-navigation">
            <div className="sideNav-navigation-items">
                <ul>
                <li><Link 
                    activeClass="active" 
                    to="welcome" 
                    spy={false} 
                    smooth={true} 
                    duration={500} 
                    containerId="containerElement" >Home</Link></li>
                <li><Link 
                    activeClass="active" 
                    to="Rules" 
                    smooth={true}
                    offset={-70}
                    duration={500}
                    containerId="containerElement">Rules</ Link></li>
                <li><Link 
                    activeClass="active" 
                    to="Metrics" 
                    smooth={true}
                    offset={0}
                    duration={500}
                    containerId="containerElement">Metrics</ Link></li> 
                <li><Link to='/'>donations</Link></li> 
                <li className="desc"><span>Texas420</span> A noob "friendly" no KOS server</li>
                </ul>
            </div> 
        </nav>
        <div className="border-color"></div>
    </header>

);

export default sideBar; 