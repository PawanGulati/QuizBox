import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {ThemeProvider,createMuiTheme} from '@material-ui/core'

import {BrowserRouter} from 'react-router-dom'

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#5F4B8B'
    }
  }
})


const app = (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ThemeProvider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
