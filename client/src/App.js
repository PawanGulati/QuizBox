import React from 'react';
import './App.css';
import Layout from './Containers/Layout/Layout';
import { Route, Switch } from 'react-router';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from './Pages/AuthPages/SignInPage';
import SignUpPage from './Pages/AuthPages/SignUpPage';
import DashBoard from './Pages/DashBoard/DashBoard';
import { CssBaseline } from '@material-ui/core';

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
