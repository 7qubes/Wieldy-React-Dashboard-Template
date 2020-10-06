import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Billing = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/transactions`}/>
    <Route exact path={`${match.url}/transactions`} component={asyncComponent(() => import('./Transactions'))}/>
    <Route exact path={`${match.url}/transactions/details`} component={asyncComponent(() => import('./Transactions/data'))}/>
    <Route exact path={`${match.url}/payment`} component={asyncComponent(() => import('./Payment'))}/>
    <Route path={`${match.url}/payment/edit`} component={asyncComponent(() => import('./Payment/Edit'))}/>
    <Route exact path={`${match.url}/invoice`} component={asyncComponent(() => import('./Invoice'))}/>
    <Route exact path={`${match.url}/invoice/send`} component={asyncComponent(() => import('./Invoice/Send'))}/>
    <Route exact path={`${match.url}/invoice/detail`} component={asyncComponent(() => import('./Invoice/Detail'))}/>
  </Switch>
);

export default Billing;
