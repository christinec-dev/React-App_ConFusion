import React, { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    //isOpen class component for the state of the toggler
    constructor(props) {
        super(props);
    
        this.state = {
         isNavOpen : false
        };
        //will bound the isNavOpen state to toggleNav
        this.toggleNav = this.toggleNav.bind(this);
    }

    //will negate the state of the toggler to true
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        }) 
    }

    render() {
        return (
            //this is a react fragment (<> </>) that allows us to group together react elements without divs
            <React.Fragment>
                {/* This will create a layour based on our individual component files. For example, if we have a navbarComponent file, then we just import it from there and insert it here, without having to code the whole thing. */}
                <Navbar dark expand="md">  
                    <NavbarToggler onClick={this.toggleNav}/>
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"> 
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </ NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </ Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;