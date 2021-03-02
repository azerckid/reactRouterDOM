import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import Home from "Routes/Home/index";
import Press from "Routes/Press";
import Company from "Routes/Company";
import RoadMap from "Routes/RoadMap";
import TeamMember from "./others/TeamMember";

export default () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/company" component={Company}></Route>
        <Route path="/press" component={Press}></Route>
        <Route path="/team" component={TeamMember}></Route>
        <Route path="/roadmap" component={RoadMap}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Router>
  );
};
