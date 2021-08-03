import * as ActionTypes from './ActionTypes';

//if the state of the comments is undefined you give default value as a state
export const Comments = (state = {
    errMess: null,
    comments: []
    }, action) => {
    switch(action.type){

        case ActionTypes.ADD_COMMENTS: 
            return {...state, isLoading: false, errMess: null, comments: action.payload }

        case ActionTypes.COMMENTS_FAILED: 
            return {...state, isLoading: false, errMess: action.payload, comments: [] }

        //adds comments to memory only, not currently saving it
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
                return {
                    ...state, 
                    comments: state.comments.concat(comment)
                };

        default:
                return state;
    }
}
