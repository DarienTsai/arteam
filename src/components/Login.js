import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default class Login extends React.Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div id="login-parent">
        <TextField className="auth-field" label="Username" />
        <TextField className="auth-field" label="Password" />
        <Button className="auth-field" variant="contained" color="primary">Log in</Button>
        <Link href="." onClick={console.log('yes')} className="auth-field">Link</Link>
      </div>
    );
  }
}