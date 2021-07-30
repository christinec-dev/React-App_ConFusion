import React, { Component } from 'react';
import Menu from './menuComponent';
import Home from './HomeComponent';
import About from './AboutComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

//maps redux state to props of main component to make it avail
const mapStateToProps = state => {
   return {
      dishes: state.dishes,
      comments: state.comment,
      promotions: state.promotions,
      leaders: state.leaders
   }   
}

//creates Main component which will act as main container for appication
class Main extends Component {
    
    //define a constructor for it which will contain all the states for the program
    constructor (props) {

    //required when you create a component in react
    super(props);

    }

  render () {

    //configures homepage to home component from HomeComponent.js
    const HomePage = () => {
      return (
        <Home 
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]} 
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />

      )
    }

    //filter out all items that match a certain dish
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
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
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
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
export default withRouter(connect(mapStateToProps)(Main));
