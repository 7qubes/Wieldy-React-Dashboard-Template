import React from "react";
import {Route, Switch} from "react-router-dom";

import Dashboard from "./dashboard/index";
import Contacts from "./contacts"
import Billing from "./billing"
import Calendar from "./calendar"
import Communications from "./communications";
import SocialMedia from "./socialMedia";
import Finance from "./Finance";
import Inventories from "./Inventories"
import Reports from "./reports";
import Analytics from "../../src/components/analytics/Analytics";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={Dashboard}/>
      <Route path={`${match.url}contacts`} component={Contacts}/>
      <Route path={`${match.url}billing`} component={Billing}/>
      <Route path={`${match.url}calendar`} component={Calendar}/>
      <Route path={`${match.url}communications`} component={Communications}/>
      <Route path={`${match.url}media`} component={SocialMedia}/>
      <Route path={`${match.url}finance`} component={Finance}/>
      <Route path={`${match.url}inventories`} component={Inventories}/>
      <Route path={`${match.url}reports`} component={Reports}/>
      <Route path={`${match.url}analytics`} component={Analytics} />
      <Route path={`${match.url}workspace`} />
    </Switch>
  </div>
);

export default App;
