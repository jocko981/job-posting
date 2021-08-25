import {
    FETCH_ALL_JOB_POSTS,
    FETCH_SELECTED_JOB_POST
} from "../actions";

// using _lodash
export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALL_JOB_POSTS:
            return  action.payload;

        case FETCH_SELECTED_JOB_POST:
            return  action.payload;
            
        default:
            return state;
    }
};