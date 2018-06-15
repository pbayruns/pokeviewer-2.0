import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Binder from 'util/binder';
import routes from 'routes';

export default class App extends Component {

  constructor(props) {
    super(props);

    //creater a new binder and bind all of the methods in this class
    var binder = new Binder();
    binder.bindAll(this, App);
  }

  getRoutes() {
    var routesArr = [];
    var nextRoute = "";
    var nextPage = {};
    var nextReactKey = 0;
    for (var key in routes) {
      if (routes[key]) {
        nextPage = routes[key];
        nextRoute = <Route key={nextReactKey} exact={nextPage.IS_EXACT} path={nextPage.URL} component={nextPage.COMPONENT} />
        nextReactKey++;
        routesArr.push(nextRoute);
      }
    }
    return routesArr;
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