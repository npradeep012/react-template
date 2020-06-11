import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor:'#043672'
      },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'#fff',
      padding:'4em'
    },
    
   
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      },
  }));
  

export default function SignIn() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div>
       
   
      <div className={classes.paper}>
        
      <div  className="logoCntr">
        <img src="./assets/adroit_logo.png" alt="text"></img>
        </div>
        
        <div className="signInCntr">
        
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        </div>
     
        
      </div>
      </div>
     
     
    </Container>
     <footer className={classes.footer}>
     <Container maxWidth="sm">
       <Typography variant="body1" >My sticky footer can be found here.</Typography>
      
     </Container>
   </footer>
   </div>
  );
}