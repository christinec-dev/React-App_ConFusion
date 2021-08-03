import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

//will add the comments to the array
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//will fetch the dishes from array
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

//will display a loading result upon dish search
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

//will display err message upon dish loading failure
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

//will add the dishes to the array
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});