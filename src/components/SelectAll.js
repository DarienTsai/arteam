import React from 'react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const styleTags = [
  'Abstract',
  'Experimental',
  'Figures',
  'Landscape',
  'Logo',
  'Narration',
  'Portrait',
  'Poster',
  'Record',
  'Still-life',
  'Typography'
];

export default function SelectAll(props) {

  const handleChange = (event) => {
    props.setter(event.target.value);
  };

  return (
    <FormControl className="tags">
      <InputLabel className="tags-label">Styles</InputLabel>
      <Select
        multiple
        value={props.tag}
        onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => selected.join(', ')}
      >
        {styleTags.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox color="primary" checked={props.tag.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
