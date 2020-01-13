import React, { Component } from 'react';

class Ratings extends Component {
    render() {

        if(this.props.Source==="Internet Movie Database"){
            var ratingNumber = this.props.Value
        }

        return (
            <React.Fragment>
                {ratingNumber}  
            </React.Fragment>
        );
    }
}

export default Ratings;