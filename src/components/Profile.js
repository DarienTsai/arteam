/* global data */
import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

export default class ProfileEdit extends React.Component{

  constructor(){
    super();
    return;
  }

  render(){
    return(
      <div id="profile">
        <h3>{data.profile.name}</h3>
        <div className="tags-list">
          {data.profile.tags.map(x => <Chip key={data.key++} label={x} color="primary" className="tag"/>)}
        </div>
        <p>{data.profile.description}</p>
        <Link to="/" id="logout"><Button variant="contained" color="primary">Logout</Button></Link>
      </div>
    );
  }
}