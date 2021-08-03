import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './menuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders} from '../redux/ActionCreator';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//maps redux state to props of main component to make it avail
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  }
}

//maps dispatch to postComment parameters to return the actiontype for comments.js that will be used to add comments
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, comment) => dispatch(postComment(dishId, rating, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
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
    this.props.fetchLeaders();
  }

  render () {

    //configures homepage to home component from HomeComponent.js
    const DishWithId = ({ match }) => {
      return (
        <DishDetail 
        dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        
        comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
        commentsErrMess={this.props.comments.errMess}
        
        postComment={this.props.postComment}
        />
      );
    }

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leaderLoading={this.props.leaders.isLoading}
          leaderErrMess={this.props.leaders.errMess}
        />
      );
    };
    
    return (    
    //To create html structures in React we always define it via the className strucutre
    <div>
        {/* Will display the Header Component */}
        <Header />
        {/* Enables CSS Transitions */}
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
          {/* Encloses Navigation Routes, Note: exact mean exact static match, without it it can reach any dynamic point*/}
          <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
            <Route exact path="/contactus"  component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/> } />
            <Redirect to="/home" />
          </Switch>
          </CSSTransition>
        </TransitionGroup>
        {/* Will display the Footer Component */}
        <Footer />
    </div>
  );
  }
}

//exports it for use in other files
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));