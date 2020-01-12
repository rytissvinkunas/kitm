import React, { Component } from 'react';

class Nav extends Component {
    constructor(){
        super();
        this.state = {
          }
    }

    render() {
        return (
            <nav className="bg-warning d-flex flex-row p-3">
                {/* input laukas per propsus kviecia PageBody.jsx handleSearchName f-cija ir value reiksme */}
                <input className="col-11 form-control" type="text" placeholder="Search" name="searchName" value={this.props.triggerParentInputValue} onChange={this.props.triggerParentInput}/>
                {/* button'as per propsus kviecia PageBody.jsx handleSearch f-cija */}
                <button className="col-1 btn btn-primary" onClick={this.props.triggerParentButton}>Search</button>
            </nav>
        );
    }
}

export default Nav;