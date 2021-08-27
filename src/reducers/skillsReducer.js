import {
    FETCH_ALL_SKILLS,
    FETCH_USERS_SKILLS
} from "../actions";

const INITIAL_STATE = {
    allSkills: [],
    usersSkills: []
};
// using _lodash ?
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_ALL_SKILLS:
            return  { ...state, allSkills: action.payload };
            
        case FETCH_USERS_SKILLS:
            return  { ...state, usersSkills: action.payload };

        default:
            return state;
    }
};