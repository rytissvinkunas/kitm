import React, {Component} from 'react';
import './Header.scss';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Header extends Component {
    //state = {  }
    render() { 
        return ( 
            <header className="row pr-2 pl-2 pt-1 pb-1 d-flex flex-row bg-color">
                <div className="col-12 col-lg-3 col-xl-2">
                    <h1><a href="www.delfi.lt">WEATHER</a></h1>
                </div>
                <div className="col-12 col-lg-9 col-xl-10">
                    <Form className="pt-2">
                        <Form.Group controlId="formBasicEmail"  className="d-flex flex-row">
                            <Form.Control type="email" placeholder="Enter email" />
                            <Button variant="primary" type="submit">
                            Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </header>
         );
    }
}
 
export default Header;