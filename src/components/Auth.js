import React from 'react';
import AuthBox from './AuthBox';

export default class Auth extends React.Component{
  constructor(){
    super();

  }

  render(){
    console.clear();
    return(
      <div id="auth-parent">
        <img alt="logo" id="auth-logo" src="https://lh4.googleusercontent.com/1C2Z7os9USoNevLHL00jICf4jXVooyZhpVbBa79aSv683j-yGfWzt0u3rNisAJLdJAwgC8QRMeAjsTnD9XnC=w1919-h946"/>
        <AuthBox/>
      </div>
    );
  }
}
