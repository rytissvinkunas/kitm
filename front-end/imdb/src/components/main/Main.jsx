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
            <main className="bg-light p-2">
                

                <table className="table">
                    {/* <thead>
                        <tr>
                            <th scope="col">Pavadinimas</th>
                            <th scope="col">Trumpas aprašas</th>
                            <th scope="col">IMDB reitingas</th>
                            <th scope="col">Trukmė</th>
                            <th scope="col">Režiserius</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <th scope="col">Pavadinimas</th>
                            <td>{this.props.title}</td>
                        </tr>
                        <tr>
                            <th scope="col">Trumpas aprašas</th>
                            <td>{this.props.plot}</td>
                        </tr>
                        <tr>
                            <th scope="col">IMDB reitingas</th>
                            <td>{movieComponentsRatings}</td>
                        </tr>
                        <tr>
                            <th scope="col">Trukmė</th>
                            <td>{this.props.runtime}</td>
                        </tr>
                        <tr>
                            <th scope="col">Režiserius</th>
                            <td>{this.props.director}</td>
                        </tr>
                    </tbody>
                    </table>
            </main>
        );
    }
}

export default Main;