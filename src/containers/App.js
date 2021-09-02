import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import history from "../history";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
//auth
import LoginPage from "./auth/LoginPage/LoginPage";
import RegisterPage from "./auth/RegisterPage/RegisterPage";
// 
import AllSkills from "../containers/HomePage/Skills/AllSkills";
import UsersSkills from "../containers/HomePage/Skills/UsersSkills";
import HomePage from "./HomePage/HomePage";
import SelectedJobPost from "../containers/HomePage/JobPosts/SelectedJobPost";
import CompanyJobPosts from "../containers/HomePage/JobPosts/CompanyJobPosts";
import JobCreateForm from "../containers/HomePage/JobPosts/Forms/JobCreateForm";
import JobEditForm from "../containers/HomePage/JobPosts/Forms/JobEditForm";
export const ROUTE_URLS = {
  ALL_SKILLS: "/skills",
  USERS_STATS: "/users-skills"
}

function err123() {
  return <h2>Err page</h2>;
}

// guarded rute - ako nije logovan Comapany --> return null; umesto <Route component={newJobPost} />

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />

        <Switch>
          <Route exact path="/skills" component={AllSkills} />
          <Route exact path="/users-skills" component={UsersSkills} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/ads/edit/:id" component={JobEditForm} />
          <Route exact path="/ads/new" component={JobCreateForm} />
          <Route exact path="/company-ads" component={CompanyJobPosts} />
          <Route exact path="/ads/:id" component={SelectedJobPost} />

          <Route component={err123} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
