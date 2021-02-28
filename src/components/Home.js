// Component adopted from material-ui documentation

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Bar from './Bar';
import ProjectsTab from './ProjectsTab';
import CollabTab from './CollabTab';
import Profile from './Profile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.clear();
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(1);
  const [heading, setHeading] = React.useState("My Projects");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch(newValue){
      case 0:
        setHeading("Find a Project");
        break;
      case 1:
        setHeading("My Projects");
        break;
      case 2:
        setHeading("My Profile");
        break;
    }
  };

  

  return (
    
    <div id="home">
      <Bar text={heading}/>
      <TabPanel value={value} index={0} className="home-tab">
        <CollabTab/>
      </TabPanel>
      <TabPanel value={value} index={1} className="home-tab">
        <ProjectsTab/>
      </TabPanel>
      <TabPanel value={value} index={2} className="home-tab">
        <Profile/>
      </TabPanel>
      <AppBar position="static" className="home-nav">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<PeopleIcon />} aria-label="phone" {...a11yProps(0)} />
          <Tab icon={<DescriptionIcon />} aria-label="favorite" {...a11yProps(1)} />
          <Tab icon={<AccountCircleIcon />} aria-label="person" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
}