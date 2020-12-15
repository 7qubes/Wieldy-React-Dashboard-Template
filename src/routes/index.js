import React from "react";
import { Route, Switch } from "react-router-dom";

import Components from "./components/index";
import CustomViews from "./customViews/index";
import Extensions from "./extensions/index";
import ExtraComponents from "./extraComponents/index";
import InBuiltApps from "./inBuiltApps/index";
import asyncComponent from "util/asyncComponent";
import SocialApps from "./socialApps/index";
import SocialMedia from "./socialMedia/index";
import Dashboard from "./dashboard/index";
import Contacts from "./contacts";
import Billing from "./billing";
import Calendar from "./calendar";
import Communications from "./communications";
import SocialMedia from "./socialMedia";
import Finance from "./Finance";
import Inventories from "./Inventories";
<<<<<<< HEAD
import Reports from "./reports";
import Analytics from "../../src/components/analytics/Analytics";
=======
import Reports from "./Report";
>>>>>>> aa31a8a (Inventory BOM page initial development)

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={Dashboard} />
      <Route path={`${match.url}contacts`} component={Contacts} />
      <Route path={`${match.url}custom-views`} component={CustomViews} />
      <Route path={`${match.url}extensions`} component={Extensions} />
      <Route
        path={`${match.url}extra-components`}
        component={ExtraComponents}
      />
      <Route path={`${match.url}in-built-apps`} component={InBuiltApps} />
      <Route path={`${match.url}inventories`} component={Inventories} />
      <Route path={`${match.url}social-apps`} component={SocialApps} />
      <Route path={`${match.url}documents`} component={Documents} />
      <Route path={`${match.url}social-media`} component={SocialMedia} />
    </Switch>
  </div>
);

export default App;
