import axios from "axios";
import history from "../history";

const API_URLS = {
    FETCH_ALL_SKILLS: "/skills",
    FETCH_ALL_JOB_POSTS: "/ads"
}
// dispatch Types:
export const FETCH_ALL_SKILLS = "FETCH_ALL_SKILLS";
export const FETCH_ALL_JOB_POSTS = "FETCH_ALL_JOB_POSTS";

// skills
export const fetchAllSkills = () => async (dispatch) => {
    const response = await axios.get(API_URLS.FETCH_ALL_SKILLS);

    dispatch({ type: FETCH_ALL_SKILLS, payload: response.data });
    // console.log(response.data, '[fetch_ALL_SKILLS action]');
};

// job posts (ads)
export const fetchAllJobPosts = () => async (dispatch) => {
    const response = await axios.get(API_URLS.FETCH_ALL_JOB_POSTS);

    dispatch({ type: FETCH_ALL_JOB_POSTS, payload: response.data });
    // console.log(response.data, '[fetch_ALL_SKILLS action]');
};