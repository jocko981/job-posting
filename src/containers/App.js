import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import history from "../history";

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />

        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
