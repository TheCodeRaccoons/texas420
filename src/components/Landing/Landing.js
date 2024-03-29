import React from 'react';
import bg1 from '../../media/bg/RustLighthouse01-01.svg'
import bg2 from '../../media/bg/RustLighthouse02-01.svg'
import bg3 from '../../media/bg/RustLighthouse03-01.svg'
import bg4 from '../../media/bg/RustLighthouse04-01.svg' 
import Rules from '../Rules/Rules'; 
import './Landing.css'
import Metrics from '../Metrics/Metrics'; 
import {Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import Donations from '../Donations/Donations';
import Powered from '../Powered/Powered';

class Landing extends React.Component {   
constructor(props){
    super(props); 
    this.myRef = React.createRef()
    this.state = {scrollTop: 0}
    this.scrollToTop = this.scrollToTop.bind(this);
    }
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }
    scrollToTop() {
        scroll.scrollToTop();
    } 
 
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        window.scrollTo(0,0); 
        let width = document.documentElement.clientWidth;
        this.setState({isMobile: (width < 600)})  
    }
    
    componentWillUnmount  = () => {
        window.removeEventListener('scroll', this.handleScroll);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }  

    handleScroll = (e) => { 
        if (e.target.scrollTop > 350 || e.target.scrollTop > 350) {
            this.props.onUpdateMenu("sideNav visible-nav") 
        } else {
            this.props.onUpdateMenu("sideNav") 
        }
    }

    render(){
        return (
        <Element id="containerElement" className="parallax" onScroll={this.handleScroll}>
            <div className='parallax-section'>
                <img className='parallax__0' src={bg4} alt="bg section 4"/>  
                <img className='parallax__1' src={bg3} alt="bg section 3"/>  
                <img className='parallax__2' src={bg2} alt="bg section 2"/>  
                <img className='parallax__3' src={bg1} alt="bg section 1" /> 
            </div>
            <div className='potato'> 
                <Element className="parallax__cover" name="welcome">
                    <div className='welcome'>
                        <div className="title-section"> <div className="title">WELCOME TO TEXAS4z0 <br/><span className="subtitle">No KOS Server</span></div></div>
                        <div className="info"> We created a vanilla server for you to learn the game of Rust, 
                        chill or just get away from some of the toxicity. We provide you with 420 scrap every 
                        4 hours and 20 min to aid your progress!
                        We have 4 non-playing admins that will help enforce the rules and assist you in any trouble </div>
                    </div>
                </Element> 
                <Rules />
                <Metrics />
                <Donations />
                <Powered />

            </div>
    </Element>
        )
    }
}

export default Landing;
