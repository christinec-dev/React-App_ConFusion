//package and component imports
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    //Turn the component into a functional component method 1
    //if dish is clicked it will show card details, else nothing
    function RenderDish({dish}) {
        //if dish array is not equal to null, display details in half grid
        if (dish != null)
            return (
                //col-12 for sm and xs, and col-5 for md and lg screens with margin @ 1
                <Card className="col-12 col-md-5 m-1">
                   {/* Displays the dish image, details and name */}
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        //if the dish contains nothing, show nothing
        else
            return (
                <div></div>
            );
    }

    //if dish is clicked it will show dish comments, else nothing
    function RenderComments({array}) {
        //if dish array is not equal to null, display comments in half grid
        if (array.length !== 0) {
            return (
                //col-12 for sm and xs, and col-5 for md and lg screens with margin @ 1
                <div className="col-12 col-md-5 m-1">
                    {/* Displays the comment title, and details of author, date and comment */}
                    <h4>Comments</h4>                  
                    {/* //will iterate (map) over the comments list and return each key (item) uniquely */}
                    { array.map (comment => (
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p><i> - {comment.author} </i>, {new Intl.DateTimeFormat ('en-US',  {year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        </ul>
                    ))
                    }
                </div>
            );
        }
        //if the dish contains nothing, show nothing
        else {
            return (
                <div></div>
            );

        }
    }

    //This will return a comment list that will be defined
    const DishDetail = (props) => {
        //define dish (otherwise TypeError occurs)
        let dish;
        //if the dish is selected, show the details and comments of the dish in respected column order
        if (props.selectedDish) {
            dish = (
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments array={props.selectedDish.comments} />
                </div>
            )
        //if the dish is not selected, show nothing
        } else {
            dish = <div></div>
        }
        //output the respective dish
        return (
            <div className="container">
                {dish}
            </div>
        );
        }
 

//exports it for use in other files
export default DishDetail;