import React from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {Route, Switch} from "react-router-dom";
import "assets/vendors/style";
import configureStore, { history } from './appRedux/store';
import "./firebase/firebase";
import App from "./containers/App/index";
import { CSVProvider } from './mobx/csvContext';

const store = configureStore(/* provide initial state if any */);

const NextApp = () =>
  <CSVProvider>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </CSVProvider>;


export default NextApp;
