//package and component imports
import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem,CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
 
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
    function RenderComments({comments}) {
        //if dish comments is not equal to null, display comments in half grid
        if(comments != null) {
            return (
                //col-12 for sm and xs, and col-5 for md and lg screens with margin @ 1
                <div>
                {/* Displays the comment title, and details of author, date and comment */}
                <h4>Comments</h4>                  
                {/* //will iterate (map) over the comments list and return each key (item) uniquely */}
                <ul className="list-unstyled">
                    { comments.map (comment => (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>        
                ))} 
                 </ul>
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
        //if the dish is selected, show the details and comments of the dish in respected column order
        if (props.dish!=null) {
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div> 
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }

//exports it for use in other files
export default DishDetail;