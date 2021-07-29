import React, { Component } from 'react';
import Menu from './menuComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
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
      };
    }

  render () {

    //configures homepage to home component from HomeComponent.js
    const HomePage = () => {
      return (
        <Home />
      )
    }

    return (    
    //To create html structures in React we always define it via the className strucutre
    <div>
        {/* Will display the Header Component */}
        <Header />
        
        {/* Encloses Navigation Routes */}
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
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
