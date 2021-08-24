import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import skillsReducer from "./skillsReducer";
import jobPostsReducer from "./jobPostsReducer";

export default combineReducers({ 
    form: formReducer,
    auth: authReducer,
    skills: skillsReducer,
    allJobPosts: jobPostsReducer
});