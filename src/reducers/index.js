import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import skillsReducer from "./skillsReducer";
import jobPostsReducer from "./jobPostsReducer";

export default combineReducers({ 
    form: formReducer,
    skills: skillsReducer,
    jobPosts: jobPostsReducer,
    // companyJobPosts: companyReducer
});