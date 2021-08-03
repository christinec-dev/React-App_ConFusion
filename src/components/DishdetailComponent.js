//package and component imports
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
 
//Redux form validation definition
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

//Adds a button to the view, which when clicked will toggle a modal containing the form.
class CommentForm extends Component {

    //initial state of modal properties
    constructor(props) {
        super(props);
        
        this.state = {
        isModalOpen: false,
            rating: '',
            author: '',
            comment: '',
            touched: {
                rating: false,
                author: false,
                comment: false
            }
        };
        //will bound the toggleModal state to toggleModal
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    //will negate the state of the toggler to true
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        }) 
    }

    //enables submit event and adds comment
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
      }   
    

    render() {
        return (
            <div>
                {/* Comment Form w/Redux Formation */} 
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            {/* Rating textarea */} 
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select
                                        model=".rating"
                                        id="rating"
                                        name="rating"
                                        className="form-control"
                                        defaultValue="1">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            {/* Author textarea */} 
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text
                                        model=".author"
                                        id="author"
                                        name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            {/* Comment textarea */} 
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea
                                        model=".comment"
                                        id="comment"
                                        name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            {/* Button to submit form */} 
                            <Button type="submit" value="submit" color="primary" onSubmit={ this.handleSubmit }>Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                {/* Button to open modal */} 
                <Button type="submit" outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
            </div>
        )
    }
}

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
  function RenderComments({comments, dishId, addComment }) {
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
             <CommentForm dishId={dishId} addComment={addComment}/> 
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
    if (props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{ props.dish.name }</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{ props.dish.name }</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} dishId={props.dish.id} addComment={props.addComment} 
                        /> 
                    </div>
                </div>
            </div>
        );
    } else {
        return(<div></div>);
    }
};

//exports it for use in other files
export default DishDetail;