import { DISHES } from '../shared/dishes';

//if the state of the dishes is undefined you give default value as a state
export const Dishes = (state = DISHES, action) => {
    switch(action.type){
        default:
            return state;
    }
}
