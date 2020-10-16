import React from 'react'; 
import text from './Rules.txt'
import TextFileReader from '../utils/TextFileReader'

class Rules extends React.Component {   
    constructor(props) {
        super(props); 
    } 
    
    componentDidMount = () => {
        window.scrollTo(0,0); 
        let width = document.documentElement.clientWidth;
        this.setState({isMobile: (width < 600)}) 

        window.addEventListener('scroll', this.handleScroll);
    }
    
    
    render(){
        return (
        <div className="Rules"> 
            <h1>Rules</h1>
            
            <TextFileReader  txt={text} /> 
        </div>
        )
    }
}

export default Rules;
