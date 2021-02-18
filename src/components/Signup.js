import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Signup extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div id="signup-parent">
        <TextField className="auth-field" label="Username" />
        <TextField className="auth-field" label="Password" />
        <TextField className="auth-field" label="Confirm Password" />
        <Button variant="contained" color="primary">Sign Up</Button>

      </div>
    );
  }
}