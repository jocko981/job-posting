import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/index.css";
import App from './containers/App';
import axios from 'axios';

//    THESE are GLOBAL Interceptors !!!!

// set baseURL
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// For GET requests
axios.interceptors.request.use(
  async (request) => {
    // Add configurations here
    const keys = JSON.parse('123')  // keys = ovde ubaci TOKEN 

    request.headers = {
      'Authorization': `Bearer ${keys}`,
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

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
      // remove token
    } 

    return Promise.reject(err);
  }
);

axios.get('/posts')
  .then(
    res => console.log(res)
  )
  .catch(err => console.log(err))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
