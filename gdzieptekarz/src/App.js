import React, { Component } from 'react';

import './index.css';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Gdziepteka from './components/unregisteredPanel/gdziepteka'

import apteki from './components/data/apteki/apteki'

import MainPage from './components/mainPage'
import Login from './components/login';
import ForgottenPassword from './components/forgottenPassword';
import Register from './components/register';

import WherepothecaryPanel from './components/MainPanel/wherepothecaryPanel'


import NotFound from './components/404';

class App extends Component {
  render() {

    return (
      // <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' component={MainPage} exact={true} />
            <Route path='/login' component={Login} exact={true} />
            <Route path='/forgottenPassword' component={ForgottenPassword} exact={true} />
            <Route path='/register' component={Register} exact={true} />
            <Route path='/panel' exact={true} render={(props) => (<WherepothecaryPanel  apteki={apteki} />)} /> 
            <Route path='/unregistered' exact={true} render={(props) => (<Gdziepteka {...props} />)} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>

      </div>
      // </Provider>
    );
  }
}

export default App;
