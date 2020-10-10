import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";


const SocialMedia = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/analytics`}/>
    <Route path={`${match.url}/analytics`} component={asyncComponent(() => import('./Analytics'))}/>
    <Route path={`${match.url}/scheduling`} component={asyncComponent(() => import('./PostScheduling'))}/>
    <Route path={`${match.url}/automation`} component={asyncComponent(() => import('./Automations'))}/>
  </Switch>
);

export default SocialMedia;
