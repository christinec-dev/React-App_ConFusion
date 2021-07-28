//package and component imports
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent.js';

//creates Menu component
class Menu extends Component {
  
    //define a constructor for it
    constructor (props) {

        //required when you create a component in react
        super(props);
            
        //when document is loaded no card has been selected by default
        this.state = {
            selectedDish: null
        };
    }
   
    //when dish is clicked, it will render details of dish
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    //return a value or function that will be called
    render() {
        //will iterate (map) over the dishes list and return each key (item) uniquely
        const menu = this.props.dishes.map((dish) => {

            // This will create the layout of the menu items by displaying the image, name and -description- of each menu item
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* When clicked on, it will run event function*/} 
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        
        //This will return a menu list that will be defined
        return (
            <div className="container">
                {/* This will return the clicked card dish items when clicked */} 
                <div className="row">
                    {menu}
                </div>
                {/* This will return the clicked card dish comments when clicked */} 
                <div className="row">
                    <DishDetail selectedDish={this.state.selectedDish} />
                </div>
            </div>
        );
    }
}

//exports it for use in other files
export default Menu;