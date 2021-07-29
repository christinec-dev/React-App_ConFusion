import React, { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            //this is a react fragment (<> </>) that allows us to group together react elements without divs
            <React.Fragment>
                {/* This will create a layour based on our individual component files. For example, if we have a navbarComponent file, then we just import it from there and insert it here, without having to code the whole thing. */}
                <Navbar className="navbar navbar-dark">
                    <div className="container">
                    <NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>

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