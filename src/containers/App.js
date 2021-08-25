import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import history from "../history";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
//auth
import LoginPage from "./auth/LoginPage/LoginPage";
import RegisterPage from "./auth/RegisterPage/RegisterPage";
// 
import AllSkills from "../components/AllSkills/AllSkills";
import HomePage from "./HomePage/HomePage";

function err123() {
  return <h2>Err page</h2>;
}

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />

        <Switch>
          <Route exact path="/skills" component={AllSkills} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={HomePage} />

          <Route component={err123} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
