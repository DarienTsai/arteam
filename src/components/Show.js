/* global data */

import React from 'react';
import Chip from '@material-ui/core/Chip';

export default class Show extends React.Component{

  constructor(props){
    super(props);
    return;
  }

  render(){
    return(
      <div className={this.props.tab + " show-card"} onClickCapture={this.props.setter} name={this.props.idx}>
        <h2>{this.props.data.name}</h2>

        <div className="show-body">
          <img src={this.props.data.image} alt="project image"/>
          <div>
            <p><span>{this.props.data.members.length}/{this.props.data.size}</span> members</p>
            <p className="date">Created {this.props.data.date}</p>

          </div>

        </div>

        <div className="tags-view">
          <div className="tags-list">
            {this.props.data.tags.map(x => <Chip key={data.key++} label={x} color="primary" className="tag"/>)}
          </div>
        </div>

      </div>
    );

  }
}