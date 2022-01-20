import React from 'react';   
import {Element} from 'react-scroll';
import Axios from 'axios';
import  FormData  from 'form-data';

let currDate = new Date();
let data = new FormData();
data.append('filter', 'AT'); 

var serverdata = {
    method: 'get',
    url: 'https://api.battlemetrics.com/servers/6901192',
    headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImYwMmJmMWRhZDFkY2EwMzgiLCJpYXQiOjE2MDIwOTM0MzgsIm5iZiI6MTYwMjA5MzQzOCwiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjozMTQ3OTQifQ.Cqv0SWcH3US8TP3wStignZQ2ISxIHHa5QloUwp6Fw5Q', 
    }
};

const leaderboard = {
    method: 'get',
    url: 'https://api.battlemetrics.com/servers/6901192/relationships/leaderboards/time?filter[period]=AT&page[size]=100',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImYwMmJmMWRhZDFkY2EwMzgiLCJpYXQiOjE2MDIwOTM0MzgsIm5iZiI6MTYwMjA5MzQzOCwiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjozMTQ3OTQifQ.Cqv0SWcH3US8TP3wStignZQ2ISxIHHa5QloUwp6Fw5Q', 
    }
  };

class Metrics extends React.Component {   
     
    state = {
        server_name: "Texas 420",
        server_curr_players: "0",
        server_max_players: "100",
        server_last_wipe: currDate,
        server_img: "",
        server_map_type: "",
        server_leaderboard: []
    }
    
    getWipeDate = (d) => {
       let wipeDate = new Date(d);
       return wipeDate.toLocaleDateString();
    }

    getHoursTotal = (h) => {
        return h / 3600
    }

    componentDidMount = () => { 
        this.GetServerInfo();
        this.GetLeaderboard();

    }
    
    GetServerInfo = () => {
        Axios(serverdata)
        .then(res => {
            let serverInfo = {}
            if(res.data.data){ 
                serverInfo = res.data.data; 
                this.setState({ 
                    server_name: serverInfo.attributes.name,
                    server_curr_players: serverInfo.attributes.players,
                    server_max_players: serverInfo.attributes.maxPlayers,
                    server_last_wipe: serverInfo.attributes.details.rust_last_wipe,
                    server_img: serverInfo.attributes.details.rust_headerimage,
                    server_map_type: serverInfo.attributes.details.map
                }) 
            }
        })
        .catch( err => {
          console.log(err);
        });
    }

    GetLeaderboard = () => { 
        Axios(leaderboard)
        .then(res => {
            let leaderboard = [];
            if(res.data.data.length > 0){
                res.data.data.forEach(player => {
                    leaderboard.push(
                        {
                            position: player.attributes.rank,
                            name: player.attributes.name,
                            hours_played: this.getHoursTotal(player.attributes.value)
                        }
                    ) 
                });
                this.setState({
                    server_leaderboard: leaderboard
                }) 
            } 
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        return (
        <Element className="Metrics" name="Metrics">  
            <h1>Metrics</h1>
            <div className="insights">
                <div className="server-info">
                    <div className="server-img"><img alt="server Img" src={this.state.server_img} /></div>
                    <div className="title">{this.state.server_name}</div>
                    <div className="info">{this.state.server_map_type} - {this.state.server_curr_players}/{this.state.server_max_players}    Last wipe: {this.getWipeDate(this.state.server_last_wipe)}</div>
                </div>
                <div className="leaderboard"> 
                    <table>
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th>Name</th>
                                <th>Time in server</th>
                            </tr>
                        </thead>
                        <tbody> 
        {this.state.server_leaderboard.map((p, i) => <tr key={i}><td>{p.position}</td><td>{p.name}</td><td>{Math.round(p.hours_played)} hours</td></tr> )}
                        </tbody>
                    </table> 
                </div>
            </div>
        </Element>
        )
    }
}

export default Metrics;
