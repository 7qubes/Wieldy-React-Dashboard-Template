import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Billing = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/transactions`}/>
    <Route path={`${match.url}/transactions`} component={asyncComponent(() => import('./Transactions'))}/>
    <Route path={`${match.url}/payment`} component={asyncComponent(() => import('./Payment'))}/>
    <Route path={`${match.url}/invoice`} component={asyncComponent(() => import('./Invoice'))}/>
  </Switch>
);

export default Billing;
