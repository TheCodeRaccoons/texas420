import React from 'react';   

class Powered extends React.Component {   
    constructor(props) {
        super(props);  
    }  
    
    render(){
        return ( 
        <div className="Powered">
            <p>
                Made with ❤️ by <a href="https://www.facebook.com/ookamijimeart" alt="Ookamijimeart" target="_blank">Ookamijime</a> and <a href="https://www.thecoderaccoons.com/" alt="TheCodeRaccoons" target="_blank">TheCodeRaccoons</a>
            </p>
        </div>  
        )
    }
}

export default Powered;