/* global data */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';

import Join from './Join';
import Details from './Details';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className="view-tab"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ViewOther(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="viewme" className={props.view == true ? "view-open" : "view-close"}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Fab color="primary" aria-label="add" size="small" onClick={props.setter}>
            <CloseIcon />
          </Fab>
          <Typography variant="h6" color="inherit">
                {data.collabs[data.otherIdx].name}
          </Typography>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Details/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Join/>
      </TabPanel>
      <AppBar position="static">
        
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Join" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
    </div>
  );
}
