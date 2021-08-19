import axios from "axios";
import history from "../history";

const API_URLS = {
    FETCH_ALL_SKILLS: "/skills",

}
export const FETCH_ALL_SKILLS = "FETCH_ALL_SKILLS";

// skills
export const fetchAllSkills = () => async (dispatch) => {
    const response = await axios.get(API_URLS.FETCH_ALL_SKILLS);

    dispatch({ type: FETCH_ALL_SKILLS, payload: response.data });
    // console.log(response.data, '[fetch_ALL_SKILLS action]');
};