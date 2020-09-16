import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Contacts = ({match}) => (
  <Switch>
    {/*<Redirect exact from={`${match.url}/`} to={`${match.url}/contact`}/>*/}
    <Route exact path={`${match.url}/`} component={asyncComponent(() => import('./Contact'))}/>
    <Route exact path={`/contacts/vendor`} component={asyncComponent(() => import('./Vendor'))}/>
    <Route exact path={`/contacts/client`} component={asyncComponent(() => import('./Client'))}/>
    <Route exact path={`/contacts/employee`} component={asyncComponent(() => import('./Employee'))}/>
  </Switch>
);

export default Contacts;
