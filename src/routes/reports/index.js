import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Reports = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/standard`}/>
    <Redirect from={`${match.url}/share`} to={`${match.url}/my_reports`}/>
    <Redirect from={`${match.url}/manage`} to={`${match.url}/my_reports`}/>
    <Redirect from={`${match.url}/signed_documents`} to={`${match.url}/my_reports`}/>
    <Redirect from={`${match.url}/audits`} to={`${match.url}/my_reports`}/>
    <Route path={`${match.url}/standard`} component={asyncComponent(() => import('./Standard'))}/>
    <Route path={`${match.url}/my_reports`} component={asyncComponent(() => import('./MyReports'))}/>
  </Switch>
);

export default Reports;
