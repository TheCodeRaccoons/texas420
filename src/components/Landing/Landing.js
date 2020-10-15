import React from 'react';
import bg1 from '../../media/bg/RustLighthouse01-01.svg'
import bg2 from '../../media/bg/RustLighthouse02-01.svg'
import bg3 from '../../media/bg/RustLighthouse03-01.svg'
import bg4 from '../../media/bg/RustLighthouse04-01.svg' 
import Rules from '../Rules/Rules';

class Landing extends React.Component {   
constructor(props){
    super(props); 
    this.myRef = React.createRef()
    this.state = {scrollTop: 0}
    }
          
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);  
        window.scrollTo(0,0); 
        let width = document.documentElement.clientWidth;
        this.setState({isMobile: (width < 600)}) 
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }  

    render(){
        return (
        <div className="parallax">
    <div className="parallax__layer parallax__layer__0">
        <img src={bg4} />
    </div>
    <div className="parallax__layer parallax__layer__1">
        <img src={bg3} />
    </div>
    <div className="parallax__layer parallax__layer__2">
        <img src={bg2}  />
    </div>
    <div className="parallax__layer parallax__layer__3">
        <img src={bg1}  />
    </div>  
    <div className="parallax__cover"> 
        <div className='welcome'>
            <div className="title-section"> <div className="title">WELCOME TO TEXAS4z0 <br/><span className="subtitle">No KOS Server</span></div></div>
            <div className="info"> We created a vanilla server for you to learn the game of Rust, 
            chill or just get away from some of the toxicity. We provide you with 420 scrap every 
            4 hours and 20 min to aid your progress!
            We have 4 non-playing admins that will help enforce the rules and assist you in any trouble: </div>
<div className="reee">sfgdfgsdgsdfgsdfg</div>
        </div>
        <Rules />
    </div>
</div>
        )
    }
}

export default Landing;