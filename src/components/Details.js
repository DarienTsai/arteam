/* global data */
import React from 'react';
import Chip from '@material-ui/core/Chip';

export default class Details extends React.Component{

  constructor(){
    super();
    return;
  }

  render(){
    return(
      <div id="details">
        <p className="details-size">{data.collabs[data.otherIdx].members.length}/{data.collabs[data.otherIdx].size} Members</p>

        <div className="tags-view">
          <div className="tags-list">
            {data.collabs[data.otherIdx].tags.map(x => <Chip label={x} color="primary" className="tag"/>)}
          </div>
        </div>

        <img className="details-img" src="https://picsum.photos/135/75" alt="project image"/>

        <p className="details-about">{data.collabs[data.otherIdx].about}</p>

        <p className="details-skill">{data.collabs[data.otherIdx].lookingFor}</p>
      </div>
    );
  }
}