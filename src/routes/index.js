import React from "react";
import {Route, Switch} from "react-router-dom";

import Components from "./components/index";
import CustomViews from "./customViews/index";
import ExtraComponents from "./extraComponents/index";
import InBuiltApps from "./inBuiltApps/index";
import asyncComponent from "util/asyncComponent";
import SocialApps from "./socialApps/index";
import Dashboard from "./dashboard/index";
import Documents from "./documents/index";
import Contacts from "./contacts"
import Calendar from "./calendar"
import Communications from "./communications";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={Dashboard}/>
      <Route path={`${match.url}contacts`} component={Contacts}/>
      <Route path={`${match.url}custom-views`} component={CustomViews}/>
      <Route path={`${match.url}calendar`} component={Calendar}/>
      <Route path={`${match.url}communications`} component={Communications}/>
      <Route path={`${match.url}in-built-apps`} component={InBuiltApps}/>
      <Route path={`${match.url}social-apps`} component={SocialApps}/>
      <Route path={`${match.url}documents`} component={Documents}/>
    </Switch>
  </div>
);

export default App;
