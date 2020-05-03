import React, { useEffect } from 'react';
import './App.css';
import Layout from './Containers/Layout/Layout';
import { Route, Switch } from 'react-router';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from './Pages/AuthPages/SignInPage';
import SignUpPage from './Pages/AuthPages/SignUpPage';
import DashBoard from './Pages/DashBoard/DashBoard';
import { CssBaseline } from '@material-ui/core';

import decode from 'jwt-decode'
import { setCurUser, auth_fail, auth_success } from './store/user/user.action';
import { setToken } from './services/api/api';

import {store} from './store'

if(localStorage.jwtToken){
  setToken(localStorage.jwtToken)
  try {
    store.dispatch(auth_success(decode(localStorage.jwtToken)))
  } catch (error) {
    store.dispatch(auth_success(null))
    store.dispatch(auth_fail(error))
  }
}

function App() {
  return (
    <main className="App">
      <CssBaseline />
      <Layout>
        <Switch>
          <Route exact path='/login' component={SignInPage} />  
          <Route exact path='/register' component={SignUpPage} />  
          <Route exact path='/' component={HomePage} />  
          <Route path='/dashboard' component={DashBoard} />
        </Switch>
      </Layout>
    </main>
  );
}

export default App;
