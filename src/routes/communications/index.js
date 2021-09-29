import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const Communications = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/email`}/>
    <Route path={`${match.url}/email`} component={asyncComponent(() => import('./Mail'))}/>
    <Route path={`${match.url}/chats`} component={asyncComponent(() => import('./Chat'))}/>
    <Route path={`${match.url}/calls`} component={asyncComponent(() => import('./VideoCall'))}/>
    <Route path={`${match.url}/support`} component={asyncComponent(() => import('./Support'))}/>
  </Switch>
);

export default Communications;
