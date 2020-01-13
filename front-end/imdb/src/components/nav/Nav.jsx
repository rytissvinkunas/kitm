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
                <input className="col-xl-11 col-sm-10 col-md-10 col-lg-10 form-control" type="text" placeholder="Paieška" name="searchName" value={this.props.triggerParentInputValue} onChange={this.props.triggerParentInput}/>
                {/* button'as per propsus kviecia PageBody.jsx handleSearch f-cija */}
                <button className="col-xl-1 col-sm-2 col-md-2 col-lg-2 btn btn-secondary" onClick={this.props.triggerParentButton}>Paieška</button>
            </nav>
        );
    }
}

export default Nav;