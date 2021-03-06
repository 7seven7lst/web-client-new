import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './containers/home';
import LoginPage from './containers/login';
import SignupPage from './containers/signup';
import NotFoundPage from './containers/notFound';
import PrivateRoute from './containers/privateRoute';
import configureStore from './configureStore';

const store = configureStore();
const history = createBrowserHistory();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Root;
