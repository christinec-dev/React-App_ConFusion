import React, { Component } from 'react';
import Menu from './menuComponent';
import Home from './HomeComponent';
import About from './AboutComponent.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreator'
import { actions } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl'

//maps redux state to props of main component to make it avail
const mapStateToProps = state => {
   return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
   }   
}

//maps dispatch to addComment parameters to return the actiontype for comments.js that will be used to add comments
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)), 
  fetchDishes:() => {dispatch(fetchDishes())},
  fetchComments:() => {dispatch(fetchComments())},
  fetchPromos:() => {dispatch(fetchPromos())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});

//creates Main component which will act as main container for appication
class Main extends Component {
    
    //define a constructor for it which will contain all the states for the program
    constructor (props) {

    //required when you create a component in react
    super(props);

    }

  //when page is loaded(mounted), the component needed is fetched
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render () {

    //configures homepage to home component from HomeComponent.js
    const DishWithId = ({ match }) => {
      return (
        <DishDetail 
          dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}

          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
        />
      );
    }

    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}

          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}

          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
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
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Route exact path="/contactus"  component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/> } />
          <Redirect to="/home" />
        </Switch>

        {/* Will display the Footer Component */}
        <Footer />
    </div>
  );
  }
}

//exports it for use in other files
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));