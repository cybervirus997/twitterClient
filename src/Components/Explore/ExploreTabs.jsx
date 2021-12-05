import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SearchBar from './SearchBar'
import {Covid,Technology,Business,Sports,Politics} from "./DisplayNews"
import "../../App.css"

const explore_tabs = {
    color:"black",
    fontWeight: "bold",
    fontSize: "15px"
};

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  
  return (
    <>
    <SearchBar/>
    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} variant="fullWidth" >
          <TabList onChange={handleChange} aria-label="lab API tabs example" >              
            <Tab label="COVID-19" value="1" style={explore_tabs}/>
            <Tab label="Technology" value="2" style={explore_tabs}/>
            <Tab label="Business" value="3" style={explore_tabs}/>
            <Tab label="Sports" value="4" style={explore_tabs}/>
            <Tab label="Politics" value="5" style={explore_tabs}/>
          </TabList>
        </Box>
        <TabPanel value="1" ><Covid /></TabPanel>
        <TabPanel value="2"><Technology /></TabPanel>
        <TabPanel value="3"><Business /></TabPanel>
        <TabPanel value="4"><Sports /></TabPanel>
        <TabPanel value="5"><Politics /></TabPanel>
      </TabContext>
    </Box>


</>
  );
}
