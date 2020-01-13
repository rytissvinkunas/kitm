import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Loading from '../loading/Loading';
import About from '../about/About';
import './Header.scss';
import Dropdown from 'react-bootstrap/Dropdown'



class Header extends Component {
    state = {  }
    render() {
        return (
            <header className="myHeader p-3 d-flex flex-row justify-content-between">
                {/* <a href="http://localhost:3000/">HOME</a> */}
                <h1>Filmų paieška</h1>
                <Router>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            Navigacija
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <p><Dropdown.Item><Link to="/">Pradžia</Link></Dropdown.Item></p>
                            <p><Dropdown.Item><Link to="/about">Ape projektą</Link></Dropdown.Item></p>
                        </Dropdown.Menu>
                    </Dropdown>
                </Router>
                    
            </header>
        );
    }
}

export default Header;