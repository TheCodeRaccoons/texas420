import React from 'react';   

class Powered extends React.Component {   


    render(){
        return ( 
        <div className="Powered">
            <p>
                Made with <span role="img" aria-label="heart">❤️</span> by <a href="https://www.facebook.com/ookamijimeart" alt="Ookamijimeart" target="_blank" rel="noopener noreferrer">Ookamijime</a> and <a href="https://www.thecoderaccoons.com/" alt="TheCodeRaccoons" target="_blank" rel="noopener noreferrer">TheCodeRaccoons</a>
            </p>
        </div>  
        )
    }
}

export default Powered;