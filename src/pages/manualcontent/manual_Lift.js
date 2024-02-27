import React, { useState } from 'react';
import {Stack, Grid} from '@mui/material';
import { Typography, TextField, Fab, InputAdornment, Tooltip, FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
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

export default function FloatingLift() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  const [Axis1enabled, setAxis1Enabled] = useState(false);
  const [Axis2enabled, setAxis2Enabled] = useState(false);
  const [JOGenabled, setJOGEnabled] = useState(false);
  const [HOMEenabled, setHOMEEnabled] = useState(false);

  const toggleAxis1Enable = () => {
    setAxis1Enabled(prevAxis1Enabled => !prevAxis1Enabled);
  };
  const toggleAxis2Enable = () => {
    setAxis2Enabled(prevAxis2Enabled => !prevAxis2Enabled);
  };
  const toggleJOGEnable = () => {
    setJOGEnabled(prevJOGEnabled => !prevJOGEnabled);
  };
  const toggleHOMEEnable = () => {
    setHOMEEnabled(prevHOMEEnabled => !prevHOMEEnabled);
  };

  

  return (
    <Grid container className='App' justifyContent="center" alignItems="Left">
      <Grid item xs={12} sm={6} lg={3}>
      <Box className="column" style={{ textAlign: "center" }}>
      
    <h2>Indexer</h2>

<Stack direction="row" paddingTop={0.5} spacing={0.5}>
  <Tooltip title={Axis1enabled ? "Enabled" : "Disabled"} placement="bottom">
  <FormControlLabel 
  control={<Switch checked={Axis1enabled} onChange={toggleAxis1Enable} color="success" />}/>
  </Tooltip>
  
    <Typography variant="body1" 
    style={{ width: '100px', color: 'white', backgroundColor: Axis1enabled ? 'green' : 'gray', padding: '6px 12px', borderRadius: '4px', display: 'inline-block', margin: 0}}>
    {Axis1enabled ? 'Axis 1' : 'Axis 1'}
    </Typography>
  
</Stack>

<Stack direction="row" paddingTop={0.5} spacing={0.5}>
  <TextField type="number" size='small' id="outlined-basic" label="Position" variant="outlined" style={{ width: 130 }} 
  InputProps={{
    readOnly:true, sx: { backgroundColor: '#f0f0f0' },
    endAdornment: <InputAdornment position="end">mm</InputAdornment>,
  }} />

  <TextField type="number" size='small' id="outlined-basic" label="Velocity" variant="outlined" style={{ width: 127 }} 
  InputProps={{
    readOnly:true, sx: { backgroundColor: '#f0f0f0' },
    endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
  }} />
</Stack>



{/* ------------------------Axis- 2-------------------------------------------------------------------------------- */}
<Stack direction="row" paddingTop={0.5} spacing={0.5}>
  <Tooltip title={Axis2enabled ? "Enabled" : "Disabled"} placement="bottom">
  <FormControlLabel 
  control={<Switch checked={Axis2enabled} onChange={toggleAxis2Enable} color="success" />}/>
  </Tooltip>
  
    <Typography variant="body1" 
    style={{ width: '100px', color: 'white', backgroundColor: Axis2enabled ? 'green' : 'gray', padding: '6px 12px', borderRadius: '4px', display: 'inline-block', margin: 0}}>
    {Axis2enabled ? 'Axis 2' : 'Axis 2'}
    </Typography>
  
</Stack>

<Stack direction="row" paddingTop={0.5} spacing={0.5}>
  <TextField type="number" size='small' id="outlined-basic" label="Position" variant="outlined" style={{ width: 130 }} 
  InputProps={{
    readOnly:true, sx: { backgroundColor: '#f0f0f0' },
    endAdornment: <InputAdornment position="end">mm</InputAdornment>,
  }} />

  <TextField type="number" size='small' id="outlined-basic" label="Velocity" variant="outlined" style={{ width: 127 }} 
  InputProps={{
    readOnly:true, sx: { backgroundColor: '#f0f0f0' },
    endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
  }} />
</Stack>




<Stack direction="row" paddingTop={2} spacing={1.5}>
  <Fab size="small" variant="contained" color="error">
  <Tooltip title="Reset"><RestartAltIcon/></Tooltip>
    </Fab>

  <Tooltip title= "Moving">
    <Fab size="small" variant="contained">
    <FiberManualRecordIcon/>
    </Fab>
  </Tooltip>

  <Tooltip title="Jogging Up">
    <Fab size="small" variant="contained">
      <KeyboardArrowUpIcon />
    </Fab>
  </Tooltip>

  <Tooltip title="Jogging Down">
    <Fab size="small" variant="contained">
      <KeyboardArrowDownIcon />
    </Fab>
  </Tooltip>
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

            {/* --------------JOG----------------------------------------------- */}

            


          <TabPanel value={value} index={0} dir={theme.direction}>
          
            <div className="column" style={{ textAlign: "center" }}>


            <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
      <Typography variant="body1" style={{width: '130px',  color: 'white', backgroundColor: JOGenabled ? 'green' : 'gray', padding: '6px 12px', borderRadius: '4px', display: 'inline-block', margin: 0 }}>
        {JOGenabled ? 'JOG Enabled' : 'JOG Disabled'}
      </Typography>
      <FormControlLabel
        control={<Switch checked={JOGenabled} onChange={toggleJOGEnable} color="success" />}
      />
            </Stack>

    
                <Stack direction="column" paddingTop={2} spacing={2}>
                  <TextField variant="outlined" label="Jog Velocity" size="small" defaultValue="NaN" checked={JOGenabled} style={{ width: 200 }}
                      InputProps={{endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,}} disabled={!JOGenabled}/>

                  <TextField variant="outlined" label="Jog Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                    InputProps={{endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>,}} disabled={!JOGenabled}/>  
                
                  <TextField variant="outlined" label="Jog Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>,}} disabled={!JOGenabled}/>
                </Stack>

                
            </div>
          </TabPanel>
          {/* --------------------------------------------------------------------------------------- */}




 {/* -------------HOME------------------------------------------------ */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="column" style={{ textAlign: "center" }}>

              <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                  <Typography variant="body1" style={{width: '145px',  color: 'white', backgroundColor: JOGenabled ? 'green' : 'gray', padding: '6px 12px', borderRadius: '4px', display: 'inline-block', margin: 0 }}>
                    {JOGenabled ? 'HOME Enabled' : 'HOME Disabled'}
                  </Typography>
                  <FormControlLabel
                    control={<Switch checked={JOGenabled} onChange={toggleJOGEnable} color="success" />}
                  />
              </Stack>

              <Stack direction="column" paddingTop={2} spacing={2}>
                  <TextField variant="outlined" label="Homing Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s</InputAdornment>}}/>

                  <TextField variant="outlined" label="Homing Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

                  <TextField variant="outlined" label="Homing Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  
            
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
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

                  <TextField variant="outlined" label="Moving Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

                  <TextField variant="outlined" label="Move Position" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">Degree</InputAdornment>}}/>  
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
