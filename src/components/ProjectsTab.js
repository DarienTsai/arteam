/* global data */
import React from 'react';
import Searchbar from './Searchbar';
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";

import Show from './Show';
import ViewMe from './ViewMe';

export default class ProjectsTab extends React.Component{

  constructor(){
    super();

    this.state = {
      view: false
    }
    return;
  }

  projectView = (e) => {
    if (e.currentTarget.getAttribute('name')){
      data.myIdx = e.currentTarget.getAttribute('name');
    }
    this.setState({view: !this.state.view});
  }

  render(){
    let idx = 0;
    return(
      <div>
        <Searchbar/>

        <div id="my-list">
          <div className="list-spacer"></div>
          {data.myProjects.map(x => <Show key={data.key++} setter={this.projectView} data={x} tab="me" idx={idx++}></Show>)}
          <div className="list-spacer"></div>
        </div>

        <Link to="add" id="add-project">
          <AddIcon fontSize="large"/>
        </Link>

        <ViewMe view={this.state.view} setter={this.projectView}/>

      </div>
    );

  }
}