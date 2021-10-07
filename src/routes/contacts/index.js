import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Contacts = ({match}) => (
  <Switch>
    <Route exact path={`${match.url}/`} component={asyncComponent(() => import('./Contact'))}/>
    <Route exact path={`${match.url}/vendor`} component={asyncComponent(() => import('./Vendor'))}/>
    <Route exact path={`${match.url}/client`} component={asyncComponent(() => import('./Client'))}/>
    <Route exact path={`${match.url}/employee`} component={asyncComponent(() => import('./Employee'))}/>
  </Switch>
);

export default Contacts;
