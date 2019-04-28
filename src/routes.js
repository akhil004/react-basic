import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Login  from "./container/Login";
import Dashboard from "./container/Dashboard";
const Routes = () => (
  <Router>
    <div>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default Routes;
