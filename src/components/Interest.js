/* global data */
import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function Entry(props){
  return(
    <div className="interest-el" name={props.idx} onClick={props.handle}>
      <div className="interest-entry">
        <p>{props.name}</p>
        <Fab size="small" color="primary" name={props.idx} aria-label="add" onClick={props.add}>
          <AddIcon />
        </Fab>
      </div>
      <p className="interest-info">{props.info}</p>
    </div>
  );
}

export default class Interest extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      rend: true
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

  add = (e) => {
    let id = parseInt(e.currentTarget.getAttribute('name'));
    data.myProjects[data.myIdx].members.push(id);
    for( let i = 0; i < data.myProjects[data.myIdx]["people interested"].length; i ++){
      if(data.myProjects[data.myIdx]["people interested"][i][0] == id){
        data.myProjects[data.myIdx]["people interested"].splice(i, 1);
        break;
      }
    }
    this.setState({rend: !this.state.rend});
    alert("Success!");
  }

  render(){
    let list = data.myProjects[data.myIdx]["people interested"];
    let peeps = [];

    for( let i = 0; i < list.length; i++){
      for ( let j = 0; j < data.users.length; j++){
        if (data.users[j].id == list[i][0]){
          peeps.push(data.users[j]);
          break;
        }
      }
    }
    
    let idx = 0;
    return(
      <div id="interest-list">
        {list.map(x => <Entry key={data.key++} name={peeps[idx++].name} info={x[1]} idx={x[0]} handle={this.handle} add={this.add}/>)}
      </div>
    );
  }
}