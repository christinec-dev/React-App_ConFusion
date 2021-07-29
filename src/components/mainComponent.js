import React, { Component } from 'react';
import Menu from './menuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect} from 'react-router-dom';

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
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS
      };
    }

  render () {

    //configures homepage to home component from HomeComponent.js
    const HomePage = () => {
      return (
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]} 
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />

      )
    }

    //filter out all items that match a certain dish
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    

    return (    
    //To create html structures in React we always define it via the className strucutre
    <div>
        {/* Will display the Header Component */}
        <Header />
        
        {/* Encloses Navigation Routes, Note: exact mean exact static match, without it it can reach any dynamic point*/}
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus"  component={Contact} />
          <Redirect to="/home" />
        </Switch>

        {/* Will display the Footer Component */}
        <Footer />
    </div>
  );
  }
}

//exports it for use in other files
export default Main;
