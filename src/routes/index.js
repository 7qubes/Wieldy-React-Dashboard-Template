import React from "react";
import {Route, Switch} from "react-router-dom";

import Dashboard from "./dashboard/index";
import Contacts from "./contacts"
import Billing from "./billing"
import Calendar from "./calendar"
import Communications from "./communications";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={Dashboard}/>
      <Route path={`${match.url}contacts`} component={Contacts}/>
      <Route path={`${match.url}billing`} component={Billing}/>
      <Route path={`${match.url}calendar`} component={Calendar}/>
      <Route path={`${match.url}communications`} component={Communications}/>
    </Switch>
  </div>
);

export default App;
