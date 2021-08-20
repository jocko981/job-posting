import axios from "axios";
import history from "../history";

const API_URLS = {
    userRegistration: "/auth/register-users",
    companyRegistration: "/auth/register-companies"
}

//   Register

export const userRegistration = (registerValues) => {
    axios.post(API_URLS.userRegistration, this.state)
        .then(response => {

            if (response.status === 200) {

                window.localStorage.setItem("access_token", response.data.access_token);
                // window.localStorage.getItem("access_token") --get the token
                // push to Home page
                history.push("/");
            }
        })
        .catch(error => {  // 422 or 402
        })
};

export const companyRegistration = (registerValues) => {
    axios.post(API_URLS.companyRegistration, this.state)
        .then(response => {

            if (response.status === 200) {

                window.localStorage.setItem("access_token", response.data.access_token);
                // window.localStorage.getItem("access_token") --get the token
                // push to Home page
                history.push("/");
            }
        })
        .catch(error => {  // 422 or 402
        })
};