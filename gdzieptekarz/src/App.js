import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux';

import './index.css';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import Gdziepteka from './components/unregisteredPanel/gdziepteka'

import apteki from './components/data/apteki/apteki'
import fakePayload from './components/fakePayload/fakePayload'
import drugs from './components/data/drugs'

import MainPage from './components/mainPage'
import LoginPage from './components/login';
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
            <Route path='/login' component={LoginPage} exact={true} {...this.props}/>
            <Route path='/forgottenPassword' component={ForgottenPassword} exact={true} />
            <Route path='/register' component={Register} exact={true} />
            <Route path='/panel' exact={true} render={(props) => (<WherepothecaryPanel drugs={drugs} apteki={apteki} fakePayload={fakePayload} />)} /> {/* WHY DOU */}
            <Route path='/unregistered' exact={true} render={(props) => (<Gdziepteka drugs={drugs} {...props} />)} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>

      </div>
      // </Provider>
    );
  }
}

export default App;
