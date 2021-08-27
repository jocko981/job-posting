import axios from 'axios';
import history from "../history";
import LocalStorageService from "../helpers/LocalStorageService";
const localStorageService = LocalStorageService.getService();

// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

//              THESE are GLOBAL Interceptors !!!! !!!!  
// Here we use Global config for axios. Down bellow is example how to make instance instead of confoguring global instance

// set baseURL
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
// axios.defaults.headers.common['X-CSRF-TOKEN'] = token_var;

// For GET requests
axios.interceptors.request.use(
  async (request) => {
    // Add request configurations here
    const token = localStorageService.getAccessToken();
    request.headers['Content-Type'] = 'application/json';
    request.headers['Access-Control-Allow-Origin'] = "*";

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// Dakle za POST REQ za LOGIN
// For POST requests
axios.interceptors.response.use(
  (response) => {
    // Add configurations here
    if (response.status === 201) {
      console.log('Posted Successfully');
    }
    return response;
  },
  (err) => {
    if(err.response.status === undefined) {
      console.log("Server is not online...");
    } else if(err.response.status === 403) {

      localStorage.removeItem("token");

      history.push("/");
    } else if(err.response.status === 404) {
      history.push("/");
      alert("404 error pa so dobio push('/') i ovaj Alert");
    } 

    return Promise.reject(err); // this as same as down below
    // new Promise((resolve, reject) => {
    //   reject(error);
    // });
  }
);

///                                ///
//////                          //////
/////////                    /////////
//////////// MOZE I OVAKO ////////////
// samo exportujes OVAJ axiosInstance da bi nejga koristio u fajl neki   import axios from "../../axiosInstance.js";  

// export default (history = null) => {
//     const baseURL = process.env.REACT_APP_BACKEND_URL;
  
//     let headers = {};
  
//     if (localStorage.token) {
//       headers.Authorization = `Bearer ${localStorage.token}`;
//     }
  
//     const axiosInstance = axios.create({
//       baseURL: baseURL,
//       headers,
//     });
  
//     axiosInstance.interceptors.response.use(
//       (response) =>
//         new Promise((resolve, reject) => {
//           resolve(response);
//         }),
//       (error) => {
//         if (!error.response) {
//           return new Promise((resolve, reject) => {
//             reject(error);
//           });
//         }
  
//         if (error.response.status === 403) {
//           localStorage.removeItem("token");
  
//           if (history) {
//             history.push("/auth/login");
//           } else {
//             window.location = "/auth/login";
//           }
//         } else {
//           return new Promise((resolve, reject) => {
//             reject(error);
//           });
//         }
//       }
//     );
  
//     return axiosInstance;
//   };