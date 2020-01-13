import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    state = {  }
    render() {
        return (
            <footer className="myFooter p-2">
                <a href="#" _target="blank">Rytis Svinkūnas.</a><span> Puslapis sukurtas mokymosi tikslais.</span>
            </footer>
        );
    }
}

export default Footer;