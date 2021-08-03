import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

//if the state of the comments is undefined you give default value as a state
export const Comments = (state = COMMENTS, action) => {
    switch(action.type){
        //adds comments to memory only, not currently saving it
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
                return state;
    }
}
