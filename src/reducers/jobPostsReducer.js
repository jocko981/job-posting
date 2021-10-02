import {
    FETCH_ALL_JOB_POSTS,
    FETCH_COMPANY_JOB_POSTS,
    FETCH_SELECTED_JOB_POST
} from "../actions";

const INITIAL_STATE = {
    allJobPosts: { loading: true, data: [] },
    selectedJobPost: { loading: true, data: [] },
    companyJobPosts: { loading: true, data: [] }
};

// using _lodash
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_JOB_POSTS:
            return { ...state, allJobPosts: { loading: false, data: action.payload } };

        case FETCH_SELECTED_JOB_POST:
            return { ...state, selectedJobPost: { loading: false, data: action.payload } };

        case FETCH_COMPANY_JOB_POSTS:
            return { ...state, companyJobPosts: { loading: false, data: action.payload } };

        default:
            return state;
    }
};