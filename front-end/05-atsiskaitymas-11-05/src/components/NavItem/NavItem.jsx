import React, {Component} from 'react';

class Header extends Component {
   
  constructor(props){
    super(props);
    this.state = {
      pp: []
    }
  }
    render() { 

        let g = this.props;
        console.log(g);
        return (
            <div>
                <p></p>
            </div>
          );
    }
}
 
export default Header;