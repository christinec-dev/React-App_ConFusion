//package imports
import React, { Component } from 'react';
//import bootrap components from reactstrap library
//NOTE: The media query returns a CSS style 


//creates Dishdetail component
class DishDetail extends Component {
    
    //define a constructor for it
    constructor(props) {
        //Props is read-only and are used to pass data, whereas state is for managing data and can be modified by its own component

        //required when you create a component in react
        super(props);
        
        //when document is loaded no card has been selected by default
        this.state = {
            selectedDish: null,
            comments: null
        };
    }

    onDishSelect(comments) {
        this.setState({comments: comments});
    }

   //if dish is clicked it will show card comments, else nothing
   
    renderComments(comments) {
        if (comments != null){
                return (
                        <ul key={comments.id} className="list-unstyled">
                            <li className="comment">{comments.comment}</li>
                            <li className="author"> {comments.author}</li>
                            <li className="date"> {comments.date}</li>
                        </ul>   
                )       
        }
        else {
            return(
                <div></div>
            )
        }
    }

    //return a value or function that will be called
    render() {

    //will iterate (map) over the dishes list and return each key (item) uniquely
    const details = this.props.comments.map((comments) => {
            return (         
                <div className="container">
                    <div className="row">  
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <div>{comments}</div>  
                    </div>
                    </div>
                </div>
        );
    });

    return (
        //This will return a menu list that will be defined
        <div className="container">
            <div className="row">
                 {/* This will return the menu items */}             
                    {details}
            </div>
            <div className="row">
                 {/* This will return the clicked card dish items when clicked */}             
                 {this.renderComments(this.state.selectedDish)},
            </div>
        </div>
        );
    }
}
  

      
//exports it for use in other files
export default DishDetail;
