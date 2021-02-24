/* global data */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

export default class ViewProfile extends React.Component{

  constructor(props){
    super(props);
    this.state={
      view: false
    }
    return;
  }

  handle = () => {
    this.props.setter(false);
  }

  render(props){
    let user = data.users[data.userIdx];
    return(
      <div id="view-profile" className={this.props.view == true ? 'view-open' : 'view-close'}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Fab color="primary" aria-label="add" size="small">
              <CloseIcon onClick={this.handle}/>
            </Fab>
            <Typography variant="h6" color="inherit">
                  {user.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="tags-list">
          {user.tags.map(x => <Chip key={data.key++} label={x} color="primary" className="tag"/>)}
        </div>
        <p>{user.description}</p>
      </div>
    );
  }
}