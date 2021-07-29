import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './menuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

//creates Main component which will act as main container for appication
class Main extends Component {
    
  //define a constructor for it which will contain all the states for the program
  constructor (props) {

    //Props is read-only and are used to pass data, whereas state is for managing data and can be modified by its own component

    //required when you create a component in react
    super(props);

   
    //when document is loaded no card has been selected by default
        this.state = {
          dishes: DISHES,
          selectedDish: null
      };
    }

    //this will track the dish based on its id
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
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
  
        {/* The component from the component files are rendered here and displayed when the index.js is loaded */}
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />

        {/* Will only render the array items that matches the properties of the selected dish */}
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    </div>
  );
  }
}

//exports it for use in other files
export default Main;
