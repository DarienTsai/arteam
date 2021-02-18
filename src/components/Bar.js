// Component adopted from material-ui documentation

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Bar(props) {

  return (
    <div>
      <AppBar position="static" className="top-bar">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            {props.text}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
