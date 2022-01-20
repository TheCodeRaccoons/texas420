import React from 'react'; 
import text from './Rules.txt'
import TextFileReader from '../utils/TextFileReader';
import {Element} from 'react-scroll';

class Rules extends React.Component {   

    componentDidMount = () => {
        window.scrollTo(0,0); 
        let width = document.documentElement.clientWidth;
        this.setState({isMobile: (width < 600)}) 

        window.addEventListener('scroll', this.handleScroll);
    }
    
    
    render(){
        return (
        <Element className="Rules" name="Rules"> 
            <h1>Rules</h1> 
                <div className="rules_img img_1"></div>  
                <div className="rules_img img_2"></div>  
                <div className="rules_img img_3"></div>   
                <div className="rules_img img_4"></div>   
            <TextFileReader  txt={text} /> 
        </Element>
        )
    }
}

export default Rules;
