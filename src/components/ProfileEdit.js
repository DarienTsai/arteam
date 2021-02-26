import React from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default class ProfileEdit extends React.Component{

  constructor(){
    super();
    this.state = {
      field: [],
      medium: '',
      purpose: ''
    }
    return;
  }

  handleField = (event) => {
    this.setState({field: event.target.value});
  };

  handleMedium = (event) => {
    this.setState({medium: event.target.value});
  };

  handlePurpose = (event) => {
    this.setState({purpose: event.target.value});
  };

  render(){
    return(
      <div id="profile">
        <TextField label="Username" fullWidth />
        <TextField label="About" variant="outlined" multiline rows={2} fullWidth/>
        <div className="add-row">
            <FormControl className="tags">
              <InputLabel className="tags-label">Fields</InputLabel>
              <Select
                value={this.state.field}
                onChange={this.handleField}
                multiple
              >
                <MenuItem value={"3D design"}>3D design</MenuItem>
                <MenuItem value={"Animation"}>Animation</MenuItem>
                <MenuItem value={"CAD"}>CAD</MenuItem>
                <MenuItem value={"Film"}>Film</MenuItem>
                <MenuItem value={"Graphic Design"}>Graphic Design</MenuItem>
                <MenuItem value={"CAD"}>Handcraft</MenuItem>
                <MenuItem value={"Illustration"}>Illustration</MenuItem>
                <MenuItem value={"Painting"}>Painting</MenuItem>
                <MenuItem value={"Photography"}>Photography</MenuItem>
                <MenuItem value={"Print"}>Print</MenuItem>
                <MenuItem value={"Sketch"}>Sketch</MenuItem>
                <MenuItem value={"Sculpture"}>Sculpture</MenuItem>
              </Select>
            </FormControl>

          </div>
          <div className="add-row">
            <Link to="home"><Button variant="contained" color="primary">Cancel</Button></Link>
            <Link to="home"><Button variant="contained" color="primary">Save</Button></Link>
          </div>
      </div>
    );
  }
}