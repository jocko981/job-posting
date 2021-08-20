import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/index.css";
import "./helpers/axiosInstance";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

import App from './containers/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);   this stays here
// store={createStoreWithMiddleware(reducers)}                              put this inside <Provider>, but for now we use this under

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))); // use this with ReduxDevTools chrome extention

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
