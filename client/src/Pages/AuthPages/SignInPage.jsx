import React, { useState, useEffect } from 'react';
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser, selectAuthError, selectAuthErrCompOpen} from '../../store/user/user.selector'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar  from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { connect } from 'react-redux';
import {setCurUser, auth_fail, auth_err_comp_close} from '../../store/user/user.action'
import { Redirect } from 'react-router';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mapDispatchToProps = dispatch =>({
  setCurUser : (path,data) => dispatch(setCurUser(path,data)),
  auth_fail : error => dispatch(auth_fail(error)),
  auth_err_comp_close : () => dispatch(auth_err_comp_close())
})

const mapStateToProps = createStructuredSelector({
  current_user:selectCurrentUser,
  auth_error:selectAuthError,
  open_err_comp:selectAuthErrCompOpen
})

export default connect(mapStateToProps,mapDispatchToProps)(function SignIn({auth_error,setCurUser,auth_fail,history,current_user,open_err_comp,auth_err_comp_close}) {
  const classes = useStyles();

  const [inputs,setInputs] = useState({email:'',password:''})

  const signInHandler = e =>{
    e.preventDefault()
    try {
        setCurUser('login',inputs)
      
      // clearing form
      setInputs({
          email:'',
          password:''
      })  

    } catch (error) {
      auth_fail({message:error.message})  
    }
  }
  
  // Don't mind this I just made it for fun
  useEffect(()=>{
    if(history.location.search){alert("Login First")}
  },[])  

  const inputHandler = ({target:{value,name}}) =>{
    setInputs({
        ...inputs,
        [name]:value
    })
  }

  // Error Snackbar implementation
  const error = auth_error && (
    <Snackbar open={open_err_comp} autoHideDuration={3000} onClose={auth_err_comp_close}>
      <Alert onClose={auth_err_comp_close} severity="warning">
        {auth_error}
      </Alert>
    </Snackbar>
  )


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {current_user?<Redirect to='/dashboard'/>:null}
      <div className={classes.paper}>
        {error}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={signInHandler} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={inputs.email}
            autoComplete="off"
            autoFocus
            onChange={inputHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={inputs.password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={inputHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
})