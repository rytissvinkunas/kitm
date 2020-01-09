import React, { Component } from 'react';
import AirItems from '../airItems/AirItems';
import Nav from '../nav/Nav';
import './Main.scss';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
          items: {},
          isLoaded: false
        }
    }
    componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places/kaunas/forecasts/long-term')
        .then(res => res.json())
        .then(json =>{
        this.setState({
            isLoaded: true,
            items: json,
        })
        });
    }
    
    render() {
         
        if(this.state.isLoaded){
            var airComponents = this.state.items.forecastTimestamps.map( airItem =>
                <AirItems
                    forecastTimeUtc = {airItem.forecastTimeUtc}
                    airTemperature = {airItem.airTemperature}
                    windSpeed = {airItem.windSpeed}
                    windGust = {airItem.windGust}
                    windDirection = {airItem.windDirection}
                    cloudCover = {airItem.cloudCover}
                    seaLevelPressure = {airItem.seaLevelPressure}
                    totalPrecipitation = {airItem.totalPrecipitation}
                    conditionCode = {airItem.conditionCode}
                />);               
        }

        if(!this.state.isLoaded){
            return (
                <main className="col-10 bg-light">
                    Loading...
                </main>
            )
          }
          else{
            return (
                <div className="col-12 scrollmenu">
                        {airComponents} {/*siuncia nufechintus duomenis i kita componenta*/}
                </div>
            );
          }
          
    }
}

export default Main;