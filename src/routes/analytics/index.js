import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const Analytics = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
    <Route
      path={`${match.url}/home`}
      component={asyncComponent(() => import("./home"))}
    />
    <Route
      path={`${match.url}/action`}
      component={asyncComponent(() => import("./action"))}
    />
  </Switch>
);

export default Analytics;
