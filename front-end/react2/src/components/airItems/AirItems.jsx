import React, { Component } from 'react';
import { WiDaySunny, WiDaySunnyOvercast,  WiDayCloudy, WiCloudy, WiSleet, WiShowers, WiRain, WiRainMix, WiNightSnow, WiSnow, WiSnowWind, WiFog, WiNa, WiRaindrops} from "react-icons/wi";
import './AirItems.scss';
class AirItems extends Component {

    render() {

        let ConnditionDay;//oro bukles kodu keitimas i iconas
        switch (this.props.conditionCode) {
            case 'clear':
                ConnditionDay = <WiDaySunny size={48}/>;
                break;
            case 'isolated-clouds':
                ConnditionDay = <WiDaySunnyOvercast size={48}/>;
                break;
            case 'scattered-clouds':
                ConnditionDay = <WiDayCloudy size={48} />;
                break;
            case 'overcast':
                ConnditionDay = <WiCloudy size={48} />;
                break;
            case 'light-rain':
                ConnditionDay = <WiSleet size={48} />;
                break;   
            case 'moderate-rain':
                ConnditionDay = <WiShowers size={48} />;
                break;
            case 'heavy-rain':
                ConnditionDay = <WiRain size={48} />;
                break; 
            case 'sleet':
                ConnditionDay = <WiRainMix size={48} />;
                break; 
            case 'light-snow':
                ConnditionDay = <WiNightSnow size={48} />;
                break;
            case 'moderate-snow':
                ConnditionDay = <WiSnow size={48} />;
                break;
            case 'heavy-snow':
                ConnditionDay = <WiSnowWind size={48} />;
                break;
            case 'fog':
                ConnditionDay = <WiFog size={48} />;
                break;
            case 'na':
                ConnditionDay = <WiNa size={48} />;
                break;    
          }

        let gsDayNames = [//is gautos datos istraukia ir pagamina dienos pavadinima
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
          ];
        let d = new Date(String(this.props.forecastTimeUtc.slice(0, 10)).valueOf().trim());
        let dayName = gsDayNames[d.getDay()];

        if(String(this.props.forecastTimeUtc.slice(10, 16)).valueOf().trim()===String("00:00").valueOf().trim()){//jei nauja diena
            return (
                <a href="www.delfi.lt">
                    <p>{this.props.forecastTimeUtc.slice(10, 16)}</p>
                    <p>{dayName}</p>
                    <p>{ConnditionDay}</p>{/* oro salygos: kodas */}
                    <p className="pb-5">{Math.round(this.props.airTemperature)}&#176;</p>
                    <p><WiRaindrops size={32}/>{this.props.totalPrecipitation} mm</p>{/* krituliu kiekis */}
                    <p>{this.props.windDirection}</p>
                    <p>{this.props.windSpeed}</p>
                </a>
            )
          }
          else{
            return (
                <a href="www.delfi.lt">
                    <p>{this.props.forecastTimeUtc.slice(10, 16)}</p>
                    <p>&nbsp;</p>
                    <p>{ConnditionDay}</p>{/* oro salygos: kodas */}                    
                    <p className="pb-5">{Math.round(this.props.airTemperature)}&#176;</p>
                    <p><WiRaindrops size={32}/>{this.props.totalPrecipitation} mm</p>{/* krituliu kiekis */}
                    <p>{this.props.windDirection}</p>
                    <p>{this.props.windSpeed}</p>
                </a>

            );
          }
    }
}

export default AirItems;

