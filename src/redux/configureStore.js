import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

//will store the state of the application
export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    )

    return store;
}