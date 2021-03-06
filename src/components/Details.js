/* global data */
import React from 'react';
import Chip from '@material-ui/core/Chip';

export default class Details extends React.Component{

  constructor(){
    super();
    return;
  }

  render(){

    let creator = data.collabs[data.otherIdx].creator;
    for( let i = 0; i < data.users.length; i++){
      if( data.users[i].id == creator ){
        creator = data.users[i].name;
        break;
      }
    }

    return(
      <div id="details">
        <h3>Created By: {creator}</h3>
        <p className="details-size">{data.collabs[data.otherIdx].members.length}/{data.collabs[data.otherIdx].size} Members</p>

        <div className="tags-view">
          <div className="tags-list">
            {data.collabs[data.otherIdx].tags.map(x => <Chip label={x} color="primary" className="tag"/>)}
          </div>
        </div>

        <img className="details-img" src={data.collabs[data.otherIdx].image} alt="project image"/>

        <p className="details-about">{data.collabs[data.otherIdx].about}</p>

        <p className="details-skill">{data.collabs[data.otherIdx].lookingFor}</p>
      </div>
    );
  }
}