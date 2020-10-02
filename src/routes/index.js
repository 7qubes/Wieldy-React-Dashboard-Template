import React from "react";
import {Route, Switch} from "react-router-dom";

import Dashboard from "./dashboard/index";
import Contacts from "./contacts"
import Billing from "./billing"
import Calendar from "./calendar"
import Communications from "./communications";
import SocialMedia from "./socialMedia";
import Inventories from "./Inventories"

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={Dashboard}/>
      <Route path={`${match.url}contacts`} component={Contacts}/>
      <Route path={`${match.url}billing`} component={Billing}/>
      <Route path={`${match.url}calendar`} component={Calendar}/>
      <Route path={`${match.url}communications`} component={Communications}/>
      <Route path={`${match.url}media`} component={SocialMedia}/>
      <Route path={`${match.url}inventories`} component={Inventories}/>
    </Switch>
  </div>
);

export default App;
