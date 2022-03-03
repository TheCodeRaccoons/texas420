import React from 'react';   
import {Element} from 'react-scroll'; 

class Donations extends React.Component { 
    render(){
        return ( 
        <Element className="Donations" name="Donations"> 
                <h1>Donations</h1>
                <div className="thanks-txt"> If you want to show your appreciation for the server we accept donations via Patreon
                                    You by no means have to do this but we do provide this option to you 🙂 
                                    We will never do kits or anything like that but we will give you queue skip if you sign up for our Patreon,
                                    its just a way to say thanks to the admins and help contribute to server upkeep cost.
                </div>
                <div className="title-section">
                    <a href="https://www.patreon.com/heyitsfog?fan_landing=true" target="_blank"> 
                        <img src="https://i.ibb.co/2MzCjgx/patreon-medium-button.png" alt="Support me on Patreon!" />
                    </a>
                    <br/>
                </div> 
        </Element>  
        )
    }
}

export default Donations;
