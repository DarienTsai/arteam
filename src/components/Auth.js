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
        <img alt="logo" id="auth-logo" src="https://picsum.photos/500"/>
        <AuthBox/>
      </div>
    );
  }
}