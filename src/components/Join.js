import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Join extends React.Component{

  constructor(){
    super();
    return;
  }

  handle = () => {
    alert("Success!");
  }

  render(){
    return(
      <div id="join">

          <TextField
          fullWidth
          className="add-text"
          multiline
          label="Introduction"
          rows={5}
          rowsMax={13}
          defaultValue="Hi there!"
          variant="outlined"
          />

        <Button id="join-button" variant="contained" color="primary" onClick={this.handle}>
          Join!
        </Button>
      </div>
    );
  }
}