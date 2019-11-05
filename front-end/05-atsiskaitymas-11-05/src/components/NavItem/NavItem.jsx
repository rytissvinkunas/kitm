import React, {Component} from 'react';

class Header extends Component {
   
  constructor(props){
    super(props);
    this.state = {
      pp: []
    }
  }

    render() { 
        console.log(this.props);
      this.setState({pp:this.props});
      console.log(this.state.pp);


        return (
            <div>
                <p></p>
            </div>
          );
    }
}
 
export default Header;