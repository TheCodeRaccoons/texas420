import React from 'react';   
import {Element} from 'react-scroll';
import paypalbtn from '../../media/paypal-donate-button.png'


class Donations extends React.Component {   
    constructor(props) {
        super(props);  
    }  
    
    render(){
        return ( 
        <Element className="Donations" name="Donations"> 
                <h1>Donations</h1>
                <div className="thanks-txt"> If you want to show your appreciation for the server we accept donations via PayPal
                                    You by no means have to do this but we do provide this option to you 🙂 
                                    There is no in-game benefit to donation, its just a way to say thanks to the admins and 
                                    help contribute to server upkeep cost. </div>
                <div className="title-section">
                    <img src={paypalbtn} alt="paypal donate" />
                </div> 
        </Element>  
        )
    }
}

export default Donations;
