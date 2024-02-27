import React, { useState } from 'react';
import {Stack, Button,Grid} from '@mui/material';
import {Home} from '@material-ui/icons';
import { Typography, TextField, Fab, InputAdornment, Tooltip, FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  const [enabled, setEnabled] = useState(false);
  const [isJogUp, setIsJogUp] = useState(false);
  const [isJogDown, setIsJogDown] = useState(false);

  const toggleEnable = () => {
    setEnabled(prevEnabled => !prevEnabled);
  };
  const toggleJogUp = () => {
    setIsJogUp(!isJogUp);
  };
  const toggleJogDown = () => {
    setIsJogDown(!isJogDown);
  };
  

  return (
    <Grid container className='App' justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6} lg={3}>
      <Box className="column" style={{ textAlign: "center" }}>
      <h2>Status</h2>
        <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            <Tooltip title={enabled ? "Enabled" : "Disabled"} placement="bottom">
            <FormControlLabel 
            control={<Switch checked={enabled} onChange={toggleEnable} color="success" />}/>
            </Tooltip>
          
          <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'disabled'}`}>
            {enabled ? 'At Home' : 'Not Home'}
          </Typography>

          <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'fault'}`}>
            {enabled ? 'No Fault' : 'Fault'}
          </Typography>
        </Stack>

        <Stack direction="row" paddingTop={2} spacing={0.5}>
          <TextField variant="outlined" label="Actual Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
              InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s</InputAdornment>}}/>

          <TextField variant="outlined" label="Actual Position" size="small" defaultValue="NaN" style={{ width: 140 }}
              InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm</InputAdornment>}}/>
        </Stack>

        <Stack direction="row" paddingTop={2} spacing={0.5}>
            <TextField variant="outlined" label="Actual Current" size="small" defaultValue="NaN" style={{ width: 145 }}
              InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">A</InputAdornment>}}/>

            <TextField variant="outlined" label="Actual Current" size="small" defaultValue="NaN" style={{ width: 145 }}
              InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">Nm</InputAdornment>}}/>  
          </Stack>

          <Stack direction="row" paddingTop={2} spacing={2}>
          <TextField type="number" size='small' id="outlined-basic" label="Enter Max Torque" variant="outlined" style={{ width: 295 }}
          InputProps={{
            endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          </Stack>
          

          <Stack direction="row" paddingTop={1.5} spacing={1.8}>
          <Fab size="small" variant="contained" color="error">
          <Tooltip title="Reset"><RestartAltIcon/></Tooltip>
            </Fab>
          </Stack>
      </Box>
      </Grid>


  {/* ------------------JOG, HOME, MOVE--------------------------------------------------- */}
      <Grid item xs={12} sm={6} lg={3}>
      <Box sx={{bgcolor: 'background.paper', minHeight: 330}}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="JOG" {...a11yProps(0)} />
            <Tab label="HOME" {...a11yProps(1)} />
            <Tab label="MOVE" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            {/* --------------JOG----------------------------------------------- */}
            <div className="column" style={{ textAlign: "center" }}>
                <Stack direction="column" paddingTop={2} spacing={2}>
                  <TextField variant="outlined" label="Jog Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,}}/>

                  <TextField variant="outlined" label="Jog Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                    InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>,}}/>  
                
                  <TextField variant="outlined" label="Jog Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">%</InputAdornment>,}}/>
                </Stack>

                <Stack direction="row" paddingTop={2} spacing={2}>
                  <Tooltip title={isJogUp ? "Jogging" : "Jog Up"} style={{ backgroundColor: isJogUp ? "success" : "" }}>
                  <Fab size="small" variant="contained" color={isJogUp ? "success" : ""}onClick={toggleJogUp}>
                    <KeyboardArrowUpIcon />
                  </Fab>
                </Tooltip>

                <Tooltip title={isJogDown ? "Jogging" : "Jog Down"} style={{ backgroundColor: isJogDown ? "success" : "" }}>
                  <Fab size="small" variant="contained" color={isJogDown ? "success" : ""}onClick={toggleJogDown}>
                    <KeyboardArrowDownIcon />
                  </Fab>
                </Tooltip>
              </Stack>
            </div>
          </TabPanel>
          {/* --------------------------------------------------------------------------------------- */}




 {/* -------------HOME------------------------------------------------ */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="column" style={{ textAlign: "center" }}>
              <Stack direction="column" paddingTop={2} spacing={2}>
                  <TextField variant="outlined" label="Homing Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s</InputAdornment>}}/>

                  <TextField variant="outlined" label="Homing Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">%</InputAdornment>}}/>  

                  <TextField variant="outlined" label="Homing Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">%</InputAdornment>}}/>  
            
                  <Button variant="contained" color="inherit"><Home/>Home</Button>
              </Stack>
            </div>
          </TabPanel>
{/* --------------------------------------------------------------------------------------- */}






{/* -------------MOVE------------------------------------------------ */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="column" style={{ textAlign: "center" }}>
              <Stack direction="column" paddingTop={2} spacing={2}>
                  <TextField variant="outlined" label="Moving Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s</InputAdornment>}}/>

                  <TextField variant="outlined" label="Moving Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">%</InputAdornment>}}/>  

                  <TextField variant="outlined" label="Moving Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">%</InputAdornment>}}/>  
              </Stack>
            </div>
          </TabPanel>
{/* --------------------------------------------------------------------------------------- */}




        </SwipeableViews>
      </Box>
      </Grid>
    </Grid>
  );
}
