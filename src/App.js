import React,{Component} from 'react'; 
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
      activeMenu: 'sideNav',
      showDisc: false,
      showCal: false
    }

  }  
  showDiscord = () => {
    this.setState({
      showDisc: !this.state.showDisc
    })
  }
  showCalendar = () => {
    this.setState({
      showCal: !this.state.showCal
    })
  }

  render(){
    return (
      <div className="App" > 
      <Router onUpdate={() => window.scrollTo(0, 0)}> 
        <Navigation navClass={this.state.activeMenu} />
        <div className="disc-pup" onClick={this.showDiscord}></div>
        <div className={this.state.showDisc ? "discord show" : "discord"}>
          <span className="closeTab" onClick={this.showDiscord}>X</span> 
        </div>
        <div className="cal-pup" onClick={this.showCalendar}></div>
        <div className={this.state.showCal ? "calendar show" : "calendar"}> 
          <span onClick={this.showCalendar} >X</span>
        </div>
        <Switch>
                  <Route path="/" component={ Landing } exact />   
              </Switch>
      </Router>  
      </div>
    );
  }
  
}

export default App;
