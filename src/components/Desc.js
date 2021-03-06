/* global data */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from "react-router-dom";


export default class Desc extends React.Component{

  constructor(){
    super();
    return;
  }

  render(){
    return(
      <div id="details">
        <h3>Created By: Me!</h3>
        <p className="details-size">{data.myProjects[data.myIdx].members.length}/{data.myProjects[data.myIdx].size} Members</p>

        <div className="tags-view">
          <div className="tags-list">
            {data.myProjects[data.myIdx].tags.map(x => <Chip key={data.key++} label={x} color="primary" className="tag"/>)}
          </div>
        </div>

        <img className="details-img" src={data.myProjects[data.myIdx].image} alt="project image"/>

        <p className="details-about">{data.myProjects[data.myIdx].about}</p>

        <p className="details-skill">{data.myProjects[data.myIdx].lookingFor}</p>

        <div className="list-spacer"></div>

        <Link to="edit" id="edit-project">
          <EditIcon fontSize="medium"/>
        </Link>
      </div>
    );
  }
}