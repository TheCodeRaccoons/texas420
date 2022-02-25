import React,{Component} from 'react'; 
import './App.css';
import './main.scss'
import Home from './Containers/Home'
import Navigation from './components/Navigation/Navigation'  
import Wysiwyg from './components/utils/WYSIWYG/WYSIWYG';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

class App extends Component {   

  constructor(props){
      super(props);  
      this.state = {
        scrollTop: 0,
        activeMenu: 'sideNav'
    }
  }

  HighlightNav = (clss) => {
    if(clss !== this.state.activeMenu){ 
        this.setState({
            activeMenu: clss
        })
    }
  }

  render(){ 
    return (
      <div className="App" >  
      <Router>
        <Navigation navClass={this.state.activeMenu} /> 
        <Routes > 
          <Route exact path="/admin_db" element={<Wysiwyg  HighlightNav={this.HighlightNav} />} />
          <Route path="/" element={<Home HighlightNav={this.HighlightNav} />} />
          <Route component="" />  
        </Routes >
      </Router>
      </div>
    );
  }
  
}

export default App;
