import axios from "axios";
import history from "../history";
import LocalStorageService from "../helpers/LocalStorageService";
const localStorageService = LocalStorageService.getService();

const API_URLS = {
    userRegistration: "/auth/register-users",
    companyRegistration: "/auth/register-companies",
    accountLogin: "/auth/login"
}

// Login

export const accountLogin = (loginValues) => {
    axios.post(API_URLS.accountLogin, loginValues)
        .then(response => {

            if (response.status === 200) {

                localStorageService.setToken(response.data.data.token);
                // push to Home page
                history.push("/");
                console.log("Succesfull login");
            }
        })
        .catch(error => {  // 422 or 402
        })
};

//   Register

export const userRegistration = (registerValues) => {
    axios.post(API_URLS.userRegistration, registerValues)
        .then(response => {

            if (response.status === 200) {

                localStorageService.setToken(response.data.data.token);
                // push to Home page
                history.push("/");
                console.log("Succesfully register User");
            }
        })
        .catch(error => {  // 422 or 402
        })
};

export const companyRegistration = (registerValues) => {
    axios.post(API_URLS.companyRegistration, registerValues)
        .then(response => {
            console.log(response)
            if (response.status === 200) {

                localStorageService.setToken(response.data.data.token);
                // push to Home page
                history.push("/");
                console.log("Succesfully register Company");
            }
        })
        .catch(error => {  // 422 or 402
        })
};