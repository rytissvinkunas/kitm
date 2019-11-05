import React, {Component} from 'react';
import NavItem from '../NavItem/NavItem';
class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
          items: [],
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

        let uu = this.state.items.place;
        let dataArray = [];
        for(let o in uu) {
            dataArray.push(uu[o]);
        }
        console.log(dataArray);
        if(!this.state.isLoaded){
            return <div>Loading...</div>;
          }
          else{
            return (
                  <div>
                    <NavItem data={uu}/>
                
                  </div>
                );
          }
    }
}
export default Nav;