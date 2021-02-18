import React from 'react';
import Chip from '@material-ui/core/Chip';

export default class Show extends React.Component{

  constructor(props){
    super(props);
    return;
  }

  render(){

    return(
      <div className="show-card">
        <h2>Untitled Shortfilm</h2>

        <div className="show-body">
          <img src="https://picsum.photos/135/75" alt="project image"/>
          <div>
            <p><span>2/3</span> members</p>
            <p className="date">Created 12/16/21</p>

          </div>

        </div>

        <div className="tags-view">
          <div className="tags-list">
            <Chip label="Tag" color="primary" className="tag"/>
            <Chip label="Tag" color="primary" className="tag"/>
            <Chip label="Tag" color="primary" className="tag"/>
            <Chip label="Tag" color="primary" className="tag"/>
            <Chip label="Tag" color="primary" className="tag"/>
            <Chip label="Tag" color="primary" className="tag"/>
            <Chip label="Tag" color="primary" className="tag"/>
            <Chip label="Tag" color="primary" className="tag"/>
          </div>
        </div>

      </div>
    );

  }
}