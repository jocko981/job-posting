import {
    FETCH_ALL_JOB_POSTS
} from "../actions";

// using _lodash
export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALL_JOB_POSTS:
            return  action.payload;
            
        default:
            return state;
    }
};