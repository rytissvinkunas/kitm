import React, { Component } from 'react';

class Ratings extends Component {
    render() {
        return (
            <React.Fragment>
                <p>{this.props.Source}</p>
                <p>{this.props.Value}</p>    
            </React.Fragment>
        );
    }
}

export default Ratings;