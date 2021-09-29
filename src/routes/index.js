import React from "react";
import { Route, Switch } from "react-router-dom";

// import Components from "./components/index";
import Components from "./components/general/Icon/index";
// import CustomViews from "./customViews/index";
import CustomViews from "./customViews/listType/Component/PlainListItem";
// import Extensions from "./extensions/index"; ///////// commenting out because this path does not exists  ////////
import ExtraComponents from "./extraComponents/DragnDrop/ContactCell/index";
// import InBuiltApps from "./inBuiltApps/index";
import InBuiltApps from "./inBuiltApps/FirebaseCRUD/index";
import asyncComponent from "util/asyncComponent";
// import SocialApps from "./socialApps/index"; ////// cannot find this  ////////
import SocialMedia from "./socialMedia/index";
import Dashboard from "./dashboard/index";
import Contacts from "./contacts";
import Billing from "./billing";
import Calendar from "./calendar";
import Communications from "./communications";
// import SocialMedia from "./socialMedia";
import Finance from "./Finance";
import Inventories from "./Inventories";
// import Reports from "./report";
import Reports from "./reports";

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboard`} component={Dashboard} />
      <Route path={`${match.url}contacts`} component={Contacts} />
      <Route path={`${match.url}custom-views`} component={CustomViews} />
      {/* <Route path={`${match.url}extensions`} component={Extensions} /> made this a comment as there is no proper import path for Extensions*/}
      <Route
        path={`${match.url}extra-components`}
        component={ExtraComponents}
      />
      <Route path={`${match.url}in-built-apps`} component={InBuiltApps} />
      <Route path={`${match.url}inventories`} component={Inventories} />
      {/* <Route path={`${match.url}social-apps`} component={SocialApps} /> commented due to no proper import path */}
      {/* <Route path={`${match.url}documents`} component={Documents} /> */}
      <Route path={`${match.url}social-media`} component={SocialMedia} />
    </Switch>
  </div>
);

export default App;
