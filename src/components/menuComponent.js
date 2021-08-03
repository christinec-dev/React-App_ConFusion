//package and component imports
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading} from './LoadingComponent'

        //Turn the component into a functional component method 1
        function RenderMenuItem ({dish, onClick}) {
            return (
                // This will create the layout of the menu items by displaying the image, name and -description- of each menu item
                <Card>
                    <Link to={`/menu/${dish.id}`}>
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
            </Card>
            );
        }
        
        //Turn the component into a functional component method 2
        const Menu = (props) => {
            //will iterate (map) over the dishes list and return each key (item) uniquely
            const menu = props.dishes.dishes.map((dish) => { 
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        {/* When clicked on, it will run event function to select dish parameters and display card*/} 
                        <RenderMenuItem dish={dish}/>
                    </div>
                );
            });
            
            if (props.dishes.isLoading) {
                return(
                    <div className="container">
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
                )
            }
            else if (props.dishes.errMess) {
                return(
                    <div className="container">
                        <div className="row">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                )
            }
            else
                //This will return a menu list that will be defined
                return (
                    <div className="container">
                        {/* This will return the clicked card dish items when clicked */} 
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <Link to='/home'>
                                        Home </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                        Menu 
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>Menu</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row card-row">
                            {menu}
                        </div>
                    </div>
                );
            }
        
//exports it for use in other files
export default Menu;