import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './main.scss'
import Landing from './components/Landing/Landing'
import Navigation from './components/Navigation/Navigation' 
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'   ;   
 
class App extends Component { 
  constructor(props){
    super(props);  
    this.state = {
      scrollTop: 0,
      activeMenu: 'sideNav'}
  } 
 
  render(){
    return (
      <div className="App" >
        
      <Router onUpdate={() => window.scrollTo(0, 0)}> 
        <Navigation navClass={this.state.activeMenu} />
        <Switch>
                  <Route path="/" component={() =><Landing SetNavState={this.SetNavState}></Landing>} exact />   
              </Switch>
      </Router>  
      </div>
    );
  }
  
}

export default App;
