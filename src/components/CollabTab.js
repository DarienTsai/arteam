/* global data */
import React from 'react';
import Searchbar from './Searchbar';

import Show from './Show';
import ViewOther from './ViewOther';

export default class CollabTab extends React.Component{

  constructor(){
    super();

    this.state = {
      view: false
    };
    return;
  }

  projectView = (e) => {
    if (e.currentTarget.getAttribute('name') != null){
      data.otherIdx = e.currentTarget.getAttribute('name');
    }
    this.setState({view: !this.state.view});
  }

  render(){
    let idx = 0;
    return(
      <div>
        <Searchbar/>

        <div id="find-list">
          <div className="list-spacer"></div>
          {data.collabs.map(x => <Show key={data.key++} setter={this.projectView} data={x} tab="collab" idx={idx++}></Show>)}
        </div>

        <ViewOther view={this.state.view} setter={this.projectView}/>
      </div>
    );

  }
}