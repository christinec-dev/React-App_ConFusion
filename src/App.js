//package and compnent imports
import logo from './logo.svg';
import React, {Component} from 'react';
import { NavbarBrand, Navbar } from 'reactstrap';
import Menu from './components/menuComponent';
import './App.css';
import {DISHES} from './shared/dishes';

//creates Menu component
class App extends Component {
    
  //define a constructor for it
  constructor (props) {

    //Props is read-only and are used to pass data, whereas state is for managing data and can be modified by its own component

    //required when you create a component in react
    super(props);

    //This will return the state of the javasctript object called dishes which will call the shared prop DISHES
    this.state = {
      dishes: DISHES
    };
  }

  render () {
    return (    
    //To create html structures in React we always define it via the className strucutre
    <div>
      
      {/* This will create a layour based on our individual component files. For example, if we have a navbarComponent file, then we just import it from there and insert it here, without having to code the whole thing. */}
      <Navbar color="primary" dark expand="md">
        <div className="container">
        <NavbarBrand href="/"> Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
  
     {/* The Menu component from the menuComponent.js file is rendered here and displayed when the index.js is loaded */}
      <Menu dishes={this.state.dishes} />
    </div>
  );
  }
}

//exports it for use in other files
export default App;
