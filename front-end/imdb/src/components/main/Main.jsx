import React, { Component } from 'react';
import Ratings from '../ratings/Ratings';

class Main extends Component {

    render() {
        var movieComponentsRatings = this.props.ratings.map( movieItem =>
            <Ratings
                Source = {movieItem.Source}
                Value = {movieItem.Value}
            />);           
        return (
            <main className="bg-light">
                <p>{this.props.title}</p>
                <p>{this.props.year}</p>
                <p>{this.props.rated}</p>
                <p>{this.props.released}</p>
                <p>{this.props.runtime}</p>
                <p>{this.props.genre}</p>
                <p>{movieComponentsRatings}</p>
                
            </main>
        );
    }
}

export default Main;