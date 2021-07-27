//package imports
import React, { Component } from 'react';
//import bootrap components from reactstrap library
//NOTE: The media query returns a CSS style 
import { Card, CardImgOverlay, CardImg, CardBody, CardText, CardTitle  } from 'reactstrap';

//creates Menu component
class Menu extends Component {
    
    //define a constructor for it
    constructor(props) {

        //Props is read-only and are used to pass data, whereas state is for managing data and can be modified by its own component

        //required when you create a component in react
        super(props);
        
        //when document is loaded no card has been selected by default
        this.state = {
            selectedDish: null
        };
    }

    //when dishg is clicked, it will render details of dish
    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    //if dish is clicked it will show card details, else nothing
    renderDish(dish) {
        if(dish != null) {
            return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
            </Card>
            );
        } else {
            return(
                <div></div>
            )
        }
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

                            <CardImgOverlay body className="ml-5">
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                </div>
            );
        });

        return (
        //This will return a menu list that will be defined
        <div className="container">
            <div className="row">
                 {/* This will return the menu items */}             
                    {menu}
            </div>
            <div className="row">
                 {/* This will return the clicked card dish items when clicked */}             
                    {this.renderDish(this.state.selectedDish)}
            </div>
        </div>
        );
    }
}

//exports it for use in other files
export default Menu;
