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
        <img alt="logo" id="auth-logo" src="https://github.com/DarienTsai/arteam/blob/main/src/media/ArteamLogo-02.png?raw=true"/>
        <AuthBox/>
      </div>
    );
  }
}
