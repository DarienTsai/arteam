import React from 'react';
import { Link as Nav} from 'react-router-dom';
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
        <Nav to="/home">
          <Button className="auth-field" variant="contained" color="primary">Log in</Button>
        </Nav>
        <Link href="." className="auth-field">Forgot Password</Link>
      </div>
    );
  }
}