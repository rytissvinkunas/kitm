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
/*
        {Object.keys(this.state.items).map(item => (
            <li key={item.id}>
              {item.address.street}
            </li>

          ))};
*/
          console.log(this.state.items);
          let formedNaujienos = Object.keys(this.state.items).map(naujiena=>
            <NavItem data={naujiena}
            />
        );
        
        
        if(!this.state.isLoaded){
            return <div>Loading...</div>;
          }
          else{
            return (
                  <div>
                    {formedNaujienos}
                  </div>
                );
          }
          
         
    }
}
export default Nav;