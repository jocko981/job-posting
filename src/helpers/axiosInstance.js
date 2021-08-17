import axios from 'axios';
import history from "../history";

// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

//              THESE are GLOBAL Interceptors !!!! !!!!

// set baseURL
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// For GET requests
axios.interceptors.request.use(
  async (request) => {
    // Add configurations here
    const keys = JSON.parse('123  ')  // ovde ubaci TOKEN 

    if (localStorage.token) {
      request.headers.Authorization = `Bearer ${localStorage.token}`;
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
    if(err.response.status === 403) {
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
// samo exportujes axiosInstance

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