import {
    FETCH_ALL_SKILLS
} from "../actions";

// using _lodash
export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_ALL_SKILLS:
            return { ...state, skills: action.payload };
            
        default:
            return state;
    }
};