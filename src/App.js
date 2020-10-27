import React,{Component} from 'react'; 
import './App.css';
import './main.scss'
import Landing from './components/Landing/Landing'
import Navigation from './components/Navigation/Navigation'  
 
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
        <Navigation navClass={this.state.activeMenu} />
        <div className="disc-pup" onClick={this.showDiscord}></div>
        <div className={this.state.showDisc ? "discord show" : "discord"}>
          <span className="closeTab" onClick={this.showDiscord}>X</span> 
          <iframe title="Disc widget" src="https://discordapp.com/widget?id=663941127757627393&theme=dark" width="980" height="500" allowtransparency="true" frameBorder="0"></iframe>
        </div>
        <div className="cal-pup" onClick={this.showCalendar}></div>
        <div className={this.state.showCal ? "calendar show" : "calendar"}> 
          <span className="closeTab" onClick={this.showCalendar} >X</span>
          <iframe title="Google cal" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;ctz=America%2FChicago&amp;src=YXBtNGRkaDl2cTlnazlwZjM0aGdnMWVrZThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%233F51B5&amp;color=%230B8043"   width="500" height="500" frameBorder="0" scrolling="no"></iframe>
        </div> 
          <Landing/>  
      </div>
    );
  }
  
}

export default App;
