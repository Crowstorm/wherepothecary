import React, { Component } from 'react';
import './index.css';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import apteki from './components/data/apteki/apteki'
import fakePayload from './components/fakePayload/fakePayload'
import drugs from './components/data/drugs'

import MainPage from './components/mainPage'
import SignUp from './components/signUp';
import ForgottenPassword from './components/forgottenPassword';
import Register from './components/register';

import WherepothecaryPanel from './components/MainPanel/wherepothecaryPanel'
import Price from './components/MainPanel/PanelComponents/price'

import NotFound from './components/404';

class App extends Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
         <Switch>
           <Route path='/' component={MainPage} exact={true}/>
           <Route path='/signup' component={SignUp} exact={true}/>
           <Route path='/forgottenPassword' component={ForgottenPassword} exact={true}/>
           <Route path='/register' component={Register} exact={true}/>
            <Route path='/panel' exact={true} render={(props) => ( <WherepothecaryPanel drugs={drugs} apteki={apteki} fakePayload={fakePayload}  {...props}/> )}/> {/* WHY DOU */}
           <Route component={NotFound}/>
         </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
