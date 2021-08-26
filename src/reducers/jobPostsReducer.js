import {
    FETCH_ALL_JOB_POSTS,
    FETCH_COMPANY_JOB_POSTS,
    FETCH_SELECTED_JOB_POST
} from "../actions";

const INTIAL_STATE = {
    allJobPosts: null,
    selectedJobPost: null,
    companyJobPosts: null
};

// using _lodash
export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALL_JOB_POSTS:
            return  { ...state, allJobPosts: action.payload };

        case FETCH_SELECTED_JOB_POST:
            return  { ...state, selectedJobPost: action.payload };

        case FETCH_COMPANY_JOB_POSTS:
            return  { ...state, companyJobPosts: action.payload };
            
            
        default:
            return state;
    }
};