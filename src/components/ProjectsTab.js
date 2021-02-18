import React from 'react';
import Searchbar from './Searchbar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import Show from './Show';

export default class ProjectsTab extends React.Component{

  constructor(){
    super();
    return;
  }

  render(){

    return(
      <div>
        <Searchbar/>

        <div id="my-list">
          <div className="list-spacer"></div>
          <Show/>
          <Show/>
          <Show/>
          <Show/>
          <Show/>
        </div>

        <IconButton aria-label="add" id="add-project" color="primary">
          <AddIcon fontSize="large"/>
        </IconButton>

      </div>
    );

  }
}