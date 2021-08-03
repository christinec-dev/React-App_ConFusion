import { LEADERS } from '../shared/leaders';

//if the state of the leaders is undefined you give default value as a state
export const Leaders = (state = LEADERS, action) => {
    switch(action.type){
        default:
            return state;
    }
}
