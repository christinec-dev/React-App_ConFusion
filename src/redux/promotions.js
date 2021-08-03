import { PROMOTIONS } from '../shared/promotions';

//if the state of the promotions is undefined you give default value as a state
export const Promotions = (state = PROMOTIONS, action) => {
    switch(action.type){
        default:
            return state;
    }
}
