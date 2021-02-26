/* global data */

import React from 'react';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';

function Entry(props){
  return(
    <div className="interest-entry" name={props.idx} onClick={props.handle}>
      <p>{props.name}</p>
      <Fab size="small" color="primary" name={props.idx} aria-label="add" onClick={props.rem}>
        <CloseIcon />
      </Fab>
    </div>
  );
}

export default class Manage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      rend: false
    }
    return;
  }

  handle = (e) => {
    if(['path', 'svg', 'BUTTON'].indexOf(e.target.tagName) != -1){return;}
    let id = parseInt(e.currentTarget.getAttribute('name'));
    for( let i = 0; i < data.users.length; i ++){
      if(data.users[i].id == id){
        data.userIdx = i;
        break
      }
    }
    this.props.setter(true);
  }

  rem = (e) => {
    let id = parseInt(e.currentTarget.getAttribute('name'));
    for( let i = 0; i < data.myProjects[data.myIdx].members.length; i ++){
      if(data.myProjects[data.myIdx].members[i] == id){
        data.myProjects[data.myIdx].members.splice(i, 1);
        break;
      }
    }
    this.setState({rend: !this.state.rend});
  }

  render(){

    let list = data.myProjects[data.myIdx]["members"];
    let peeps = [];

    for( let i = 0; i < list.length; i++){
      for ( let j = 0; j < data.users.length; j++){
        if (data.users[j].id == list[i]){
          peeps.push(data.users[j]);
          break;
        }
      }
    }

    let idx = 0;

    return(
      <div id="manage-list">
        {list.map(x => <Entry key={data.key++} name={peeps[idx].name} idx={peeps[idx++].id} handle={this.handle} rem={this.rem}/>)}
      </div>
    );
  }
}