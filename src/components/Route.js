import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Search from './Search';

export default class Router extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/portfolio/:idOfTheProfile" component={Home} />
            <Route exact component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
