/* global data */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import PublishIcon from '@material-ui/icons/Publish';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";

import Bar from './Bar';
import SelectAll from './SelectAll';

export default class Add extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      field: '',
      styles: [],
      medium: '',
      purpose: '',
      title: '',
      look: 'Desired Skills',
      about: 'Project Description',
      size: 0

    }

  }

  handleField = (event) => {
    this.setState({field: event.target.value});
  };

  all = (val) => {
    this.setState({styles: val});
  }

  handleMedium = (event) => {
    this.setState({medium: event.target.value});
  };

  handlePurpose = (event) => {
    this.setState({purpose: event.target.value});
  };

  changeTitle = (e) => {
    this.setState({title: e.target.value});
  }

  changeAbout = (e) => {
    this.setState({about: e.target.value});
  }

  changeLook = (e) => {
    this.setState({look: e.target.value});
  }

  changeSize = (e) => {
    this.setState({size: e.target.value == '' ? 0:parseInt(e.target.value)});
  }

  save = () => {
    let day = new Date();
    let dateStr = "" + (day.getMonth() + 1) + '/' + day.getDate() + '/' + day.getFullYear(); 

    let tags = this.state.styles;
    if(this.state.field != '')
      tags.push(this.state.field);
    if(this.state.medium != '')
      tags.push(this.state.medium);
    if(this.state.purpose != '')
      tags.push(this.state.purpose);
    data.myProjects.splice(0, 0,
      {
        name: this.state.title,
        about: this.state.about,
        lookingFor: this.state.look,
        tags: tags,
        size: this.state.size,
        image: "'src/media/field tag images/' + 'this.state.styles[0]' + '.jpg'",
        "people interested": [],
        creator: 0,
        members: [],
        date: dateStr

      }
    );
  }

  render(){

    return(
      <div id="add-screen">
        <Bar text="New Project"/>
        <div id="add-rows">

          <div className="add-row">
            <TextField label="Title" id="add-title" onChange={this.changeTitle} fullWidth/>
          </div>

          <div className="add-row">
            <Button variant="contained" color="primary">
              <PublishIcon fontSize="large"/>
            </Button>
            <TextField label="Team Size" onChange={this.changeSize} fullWidth/>
          </div>

          <div className="add-row">
            <FormControl className="tags">
              <InputLabel className="tags-label">Field</InputLabel>
              <Select
                value={this.state.field}
                onChange={this.handleField}
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
            <SelectAll tag={this.state.styles} setter={this.all}/>

            <FormControl className="tags">
              <InputLabel className="tags-label">Medium</InputLabel>
              <Select
                value={this.state.medium}
                onChange={this.handleMedium}
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
              >
                <MenuItem value={"Learning"}>Learning</MenuItem>
                <MenuItem value={"Hobby"}>Hobby</MenuItem>
                <MenuItem value={"Commission"}>Commission</MenuItem>
                <MenuItem value={"Professional"}>Professional</MenuItem>

              </Select>
            </FormControl>
          </div>

          <TextField
          fullWidth
          className="add-text"
          multiline
          label="About"
          rows={2}
          rowsMax={13}
          defaultValue="Project Description"
          variant="outlined"
          onChange={this.changeAbout}
          />

          <TextField
          fullWidth
          className="add-text"
          multiline
          label="Looking for:"
          rows={2}
          rowsMax={13}
          defaultValue="Desired Skills"
          variant="outlined"
          onChange={this.changeLook}
          />

          <div className="add-row">
            <Link to="home"><Button variant="contained" color="primary">Cancel</Button></Link>
            <Link to="home" onClick={this.save}><Button variant="contained" color="primary">Save</Button></Link>
          </div>

        </div>
      </div>
    );

  }
}