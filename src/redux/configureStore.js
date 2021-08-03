import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

//will store the state of the application
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           dishes: Dishes,
           comments: Comments,
           promotions: Promotions,
           leaders: Leaders 
        })
    )

    return store;
}