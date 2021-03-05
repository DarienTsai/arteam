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
        <img alt="logo" id="auth-logo" src="https://drive.google.com/file/d/1y0CwtBIXDN3j8I1YBCFEgkFrIZDQNoAT/view"/>
        <AuthBox/>
      </div>
    );
  }
}
