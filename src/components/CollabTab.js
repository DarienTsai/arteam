import React from 'react';
import Searchbar from './Searchbar';

import Show from './Show';

var data = {
  test: 'test'
};

export default class CollabTab extends React.Component{

  constructor(){
    super();
    return;
  }

  render(){

    return(
      <div>
        <Searchbar/>

        <div id="find-list">
          <div className="list-spacer"></div>
          <Show/>
          <Show/>
          <Show/>
          <Show/>
          <Show/>
        </div>

      </div>
    );

  }
}