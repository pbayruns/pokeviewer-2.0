import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Binder from './util/binder.js';
import { ROUTES } from './routes.js';

export default class App extends Component {

  constructor(props) {
    super(props);

    //creater a new binder and bind all of the methods in this class
    var binder = new Binder();
    binder.bindAll(this, App);
  }

  getRoutes() {
    var routes = [];
    var nextRoute = "";
    var nextPage = {};
    var nextReactKey = 0;
    for (var key in ROUTES) {
      if (ROUTES[key]) {
        nextPage = ROUTES[key];
        nextRoute = <Route key={nextReactKey} exact={nextPage.IS_EXACT} path={nextPage.URL} component={nextPage.COMPONENT} />
        nextReactKey++;
        routes.push(nextRoute);
      }
    }
    return routes;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.getRoutes()}
        </Switch>
      </BrowserRouter>
    );
  }
}