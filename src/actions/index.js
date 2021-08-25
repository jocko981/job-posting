import axios from "axios";
import history from "../history";

const API_URLS = {
    FETCH_ALL_SKILLS: "/skills",
    FETCH_ALL_JOB_POSTS: "/ads",
    FETCH_ONE_JOB_POST: "/ads/", // + ${id} of ad
}
// dispatch Types:
export const FETCH_ALL_SKILLS = "FETCH_ALL_SKILLS";
export const FETCH_ALL_JOB_POSTS = "FETCH_ALL_JOB_POSTS";
export const FETCH_ONE_JOB_POST = "FETCH_ONE_JOB_POST";

// skills
export const fetchAllSkills = () => async (dispatch) => {
    const response = await axios.get(API_URLS.FETCH_ALL_SKILLS);

    dispatch({ type: FETCH_ALL_SKILLS, payload: response.data });
};

// job posts (ads)
export const fetchAllJobPosts = () => async (dispatch) => {
    const response = await axios.get(API_URLS.FETCH_ALL_JOB_POSTS);

    dispatch({ type: FETCH_ALL_JOB_POSTS, payload: response.data });
};

export const fetchOneJobPost = (id) => async (dispatch) => {
    const response = await axios.get(API_URLS.FETCH_ONE_JOB_POST + id);

    dispatch({ type: FETCH_ONE_JOB_POST, payload: response.data });
};