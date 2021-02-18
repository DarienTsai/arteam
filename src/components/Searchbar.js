// Component adopted from material-ui documentation

import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Searchbar() {

  return (
    <Paper className="search-parent">
      <InputBase 
        className="search"
        placeholder="Search"
        inputProps={{ 'aria-label': 'Search' }}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}