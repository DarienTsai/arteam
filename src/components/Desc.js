/* global data */
import React from 'react';
import Chip from '@material-ui/core/Chip';

export default class Desc extends React.Component{

  constructor(){
    super();
    return;
  }

  render(){
    return(
      <div id="details">
        <p className="details-size">{data.myProjects[data.myIdx].members.length}/{data.myProjects[data.myIdx].size} Members</p>

        <div className="tags-view">
          <div className="tags-list">
            {data.myProjects[data.myIdx].tags.map(x => <Chip key={data.key++} label={x} color="primary" className="tag"/>)}
          </div>
        </div>

        <img className="details-img" src="https://picsum.photos/135/75" alt="project image"/>

        <p className="details-about">{data.myProjects[data.myIdx].about}</p>

        <p className="details-skill">{data.myProjects[data.myIdx].lookingFor}</p>
      </div>
    );
  }
}