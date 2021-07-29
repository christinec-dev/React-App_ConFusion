//package and component imports
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

        //Turn the component into a functional component method 1
        function RenderMenuItem ({dish}) {
            return (
                // This will create the layout of the menu items by displaying the image, name and -description- of each menu item
                <Card
                onClick={() => this.onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
            );
        }
        
        //Turn the component into a functional component method 2
        const Menu = (props) => {
            //will iterate (map) over the dishes list and return each key (item) uniquely
            const menu = props.dishes.map((dish) => { 
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        {/* When clicked on, it will run event function to select dish parameters and display card*/} 
                        <RenderMenuItem dish={dish} onClick={props.onClick} />
                    </div>
                );
            });

            //This will return a menu list that will be defined
            return (
                <div className="container">
                    {/* This will return the clicked card dish items when clicked */} 
                    <div className="row card-row">
                        {menu}
                    </div>
                </div>
            );
        }
        Menu.defaultProps = {
            dishes: [],
            onClick: () => {},
          };

//exports it for use in other files
export default Menu;