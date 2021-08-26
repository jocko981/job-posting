import axios from "axios";
import history from "../history";

const API_URLS = {
    FETCH_ALL_SKILLS: "/skills",
    FETCH_ALL_JOB_POSTS: "/ads",
    FETCH_COMPANY_JOB_POSTS: "/company/ads",
    FETCH_SELECTED_JOB_POST: "/ads/", // + ${id} of ad
    CREATE_JOB_POST: "/ads/"
}
// dispatch Types:
export const FETCH_ALL_SKILLS = "FETCH_ALL_SKILLS";
export const FETCH_ALL_JOB_POSTS = "FETCH_ALL_JOB_POSTS";
export const FETCH_COMPANY_JOB_POSTS = "FETCH_COMPANY_JOB_POSTS";
export const FETCH_SELECTED_JOB_POST = "FETCH_SELECTED_JOB_POST";
export const CREATE_JOB_POST = "CREATE_JOB_POST";

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

export const fetchSelectedJobPost = (id) => async (dispatch) => {
    const response = await axios.get(API_URLS.FETCH_SELECTED_JOB_POST + id);

    // if (response.data.status === 404) {
    //     alert('This job post does not exist...')
    // }

    dispatch({ type: FETCH_SELECTED_JOB_POST, payload: response.data });
};

export const fetchCompanyJobPosts = () => async (dispatch) => {
    const response = await axios.get(API_URLS.FETCH_COMPANY_JOB_POSTS);

    dispatch({ type: FETCH_COMPANY_JOB_POSTS, payload: response.data });
}

export const createJobPost = (formValues) => async (dispatch, getState) => {
    // const { userId } = getState().auth;
    const response = await axios.post(API_URLS.CREATE_JOB_POST, formValues);

    localStorage.setItem('create Job Post - response', response);

    dispatch({ type: CREATE_JOB_POST, payload: response });

    history.push("/admin/users");
    // za ovo pa ne treba reducer lol
};