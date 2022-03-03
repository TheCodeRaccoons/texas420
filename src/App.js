import React,{Component} from 'react'; 
import './App.css';
import './main.scss'
import Home from './Containers/Home'
import Navigation from './components/Navigation/Navigation'  
import Wysiwyg from './components/utils/WYSIWYG/WYSIWYG';
import PageNotFound from './components/404/404';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

class App extends Component {   

  constructor(props){
      super(props);  
      this.state = {
        scrollTop: 0,
        activeMenu: 'sideNav',
        navVisible: true
    }
  }

  HighlightNav = (clss) => {
    if(clss !== this.state.activeMenu){ 
        this.setState({
            activeMenu: clss
        })
    }
  }

  HideNav = (show) => {
    console.log("entered")
    this.setState({navVisible:!show})
  }

  render(){ 
    return (
      <div className="App" >  
      <Router>
        {this.state.navVisible ? <Navigation navClass={this.state.activeMenu} /> : ""}
        <Routes > 
          <Route exact path="/admin_db" element={<Wysiwyg  HighlightNav={this.HighlightNav}  HideNav={this.HideNav} />} />
          <Route path="/" element={<Home HighlightNav={this.HighlightNav}  HideNav={this.HideNav} />} />
          <Route  path="*" element={<PageNotFound HideNav={this.HideNav} />} />  
        </Routes >
      </Router>
      </div>
    );
  }
  
}

export default App;
