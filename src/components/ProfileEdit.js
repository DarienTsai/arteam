/* global data */
import React from 'react';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Bar from './Bar';


export default class ProfileEdit extends React.Component{

  constructor(){
    super();
    this.state = {
      name: data.profile.name,
      desc: data.profile.description,
      field: [],
      medium: [],
      purpose: [],
      style: []
    }
    return;
  }

  handleName = (event) => {
    this.setState({name: event.target.value});
  };

  handleDesc = (event) => {
    this.setState({desc: event.target.value});
  };

  handleField = (event) => {
    this.setState({field: event.target.value});
  };

  handleMedium = (event) => {
    this.setState({medium: event.target.value});
  };

  handlePurpose = (event) => {
    this.setState({purpose: event.target.value});
  };

  handleStyle = (event) => {
    this.setState({style: event.target.value});
  };

  handleSave = () => {
    data.profile.name = this.state.name;
    data.profile.description = this.state.desc;
    data.profile.tags = ((this.state.field.concat(this.state.medium)).concat(this.state.purpose)).concat(this.state.style);
    alert("Success!");
  }

  render(){
    return(
      <div id="profile-edit">
        <Bar text="New Project" co="top-bar-2"/>
        <TextField label="Username" value={this.state.name} onChange={this.handleName} className="profile-field" fullWidth/>
        <TextField label="About" value={this.state.desc} onChange={this.handleDesc} variant="outlined" multiline rows={2} className="profile-field" fullWidth/>
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

            <FormControl className="tags">
              <InputLabel className="tags-label">Styles</InputLabel>
              <Select
                value={this.state.style}
                onChange={this.handleStyle}
                multiple
              >

                <MenuItem value={"Abstract"}>Abstract</MenuItem>
                <MenuItem value={"Experimental"}>Experimental</MenuItem>
                <MenuItem value={"Figures"}>Figures</MenuItem>
                <MenuItem value={"Landscape"}>Landscape</MenuItem>
                <MenuItem value={"Logo"}>Logo</MenuItem>
                <MenuItem value={"Narration"}>Narration</MenuItem>
                <MenuItem value={"Portrait"}>Portrait</MenuItem>
                <MenuItem value={"Poster"}>Poster</MenuItem>
                <MenuItem value={"Record"}>Record</MenuItem>
                <MenuItem value={"Still-life"}>Still-life</MenuItem>
                <MenuItem value={"Typography"}>Typography</MenuItem>
              </Select>
            </FormControl>

            <FormControl className="tags">
              <InputLabel className="tags-label">Medium</InputLabel>
              <Select
                value={this.state.medium}
                onChange={this.handleMedium}
                multiple
              >
                <MenuItem value={"Analog"}>Analog</MenuItem>
                <MenuItem value={"Digital"}>Digital</MenuItem>
              </Select>
            </FormControl>

            <FormControl className="tags">
              <InputLabel className="tags-label">Purpose</InputLabel>
              <Select
                value={this.state.purpose}
                onChange={this.handlePurpose}
                multiple
              >
                <MenuItem value={"Learning"}>Learning</MenuItem>
                <MenuItem value={"Hobby"}>Hobby</MenuItem>
                <MenuItem value={"Commission"}>Commission</MenuItem>
                <MenuItem value={"Professional"}>Professional</MenuItem>

              </Select>
            </FormControl>

          </div>
          <div className="add-row">
            <Link to="home"><Button variant="contained" color="primary">Cancel</Button></Link>
            <Link to="home" onClick={this.handleSave}><Button variant="contained" color="primary">Save</Button></Link>
          </div>
      </div>
    );
  }
}