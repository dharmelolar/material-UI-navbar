import React, { useState } from 'react';
import {Stack, Button,Grid} from '@mui/material';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { Typography, TextField, Fab, InputAdornment, Tooltip} from '@mui/material';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
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

export default function Manual_Ind_lif() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [isEnabled, setIsEnabled] = useState(false);



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  

  

  return (
    <Grid container className='App' justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6} lg={3}>
      <Box className="column" style={{ textAlign: "center", backgroundColor: isEnabled ? '#e6fff2' : '#fff5eb' }}>
      
    <h2>Indexer & Lift</h2>

<Stack direction="row" padding={0.5} spacing={0.5}>


<Button variant="contained" color={isEnabled ? "success" : "inherit"} onClick={() => setIsEnabled(true)}>Enable</Button>
<Button variant="contained" color={isEnabled ? "inherit" : "warning"} onClick={() => setIsEnabled(false)}>Disable</Button>
<Button variant='outlined' color='error'> Fault</Button>
</Stack>


<h4>Indexer</h4>
<Stack direction="row" padding={0.5} spacing={0.5}>
  <TextField type="number" size='small' id="outlined-basic" label="Position" variant="outlined" style={{ width: 130 }} 
  InputProps={{readOnly:true, sx: { backgroundColor: '#f0f0f0' }, endAdornment: <InputAdornment position="end">mm</InputAdornment>}} />

  <TextField type="number" size='small' id="outlined-basic" label="Velocity" variant="outlined" style={{ width: 127 }} 
  InputProps={{readOnly:true, sx: { backgroundColor: '#f0f0f0' }, endAdornment: <InputAdornment position="end">mm/s</InputAdornment>}} />
</Stack>


<h4>Lift</h4>
<Stack direction="row" padding={0.5} spacing={0.5} justifyContent="center" alignItems="center">

  <TextField type="number" size='small' id="outlined-basic" label="Axis-1 Position" variant="outlined" style={{ width: 130 }} 
  InputProps={{
    readOnly:true, sx: { backgroundColor: '#f0f0f0' },
    endAdornment: <InputAdornment position="end">mm</InputAdornment>,
  }} />

  <TextField type="number" size='small' id="outlined-basic" label="Axis-1 Velocity" variant="outlined" style={{ width: 127 }} 
  InputProps={{
    readOnly:true, sx: { backgroundColor: '#f0f0f0' },
    endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
  }} />
</Stack>

<Stack direction="row" padding={0.5} spacing={0.5} justifyContent="center" alignItems="center">

  <TextField type="number" size='small' id="outlined-basic" label="Axis-2 Position" variant="outlined" style={{ width: 130 }} 
  InputProps={{
    readOnly:true, sx: { backgroundColor: '#f0f0f0' },
    endAdornment: <InputAdornment position="end">mm</InputAdornment>,
  }} />

  <TextField type="number" size='small' id="outlined-basic" label="Axis-2 Velocity" variant="outlined" style={{ width: 127 }} 
  InputProps={{
    readOnly:true, sx: { backgroundColor: '#f0f0f0' },
    endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
  }} />
</Stack>


<Stack direction="row" padding={0.5} spacing={1.5}>
  <Fab size="small" variant="contained" color="error">
  <Tooltip title="Reset"><RestartAltIcon/></Tooltip>
    </Fab>
</Stack>
      </Box>
      </Grid>


  {/* ------------------JOG, HOME, MOVE--------------------------------------------------- */}
      <Grid item xs={12} sm={6} lg={3}>
      <Box sx={{bgcolor: 'background.paper'}}>
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



            <h4>Indexer</h4>
    
                <Stack direction="column" paddingTop={0} paddingBottom={1} spacing={1}>
                  <TextField variant="outlined" label="Jog Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,}}/>

                  <TextField variant="outlined" label="Jog Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                    InputProps={{endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>,}}/>  
                
                  <TextField variant="outlined" label="Jog Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>,}}/>
              
                </Stack>

                <Stack direction="row" paddingTop={0.5} paddingBottom={1} spacing={2}>
                  <Tooltip title="Jogg Increase">
                      <Fab size="small" variant="contained"><AddIcon /></Fab>
                  </Tooltip>

                  <Tooltip title="Jogg Decrease">
                      <Fab size="small" variant="contained"><RemoveIcon/></Fab>
                  </Tooltip>

                </Stack>

                <h4>Lift</h4>

                <Stack direction="column" paddingTop={2} spacing={1}>
                  <TextField variant="outlined" label="Jog Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,}}/>

                  <TextField variant="outlined" label="Jog Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                    InputProps={{endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>,}}/>  
                
                  <TextField variant="outlined" label="Jog Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>,}}/>
              
                </Stack>

                <Stack direction="row" paddingTop={1} spacing={1}>
                  <Tooltip title="Jogg Increase"><Fab size="small" variant="contained"><AddIcon /></Fab>
                  </Tooltip>

                  <Tooltip title="Jogg Decrease"><Fab size="small" variant="contained"><RemoveIcon/></Fab>
                  </Tooltip>

                </Stack>
                
            </div>
          </TabPanel>
          {/* --------------------------------------------------------------------------------------- */}




 {/* -------------HOME------------------------------------------------ */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="column" style={{ textAlign: "center" }}>
            <h4>Indexer</h4>
              <Stack direction="column" paddingTop={0.5} paddingBottom={1} spacing={1}>
                  <TextField variant="outlined" label="Homing Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s</InputAdornment>}}/>

                  <TextField variant="outlined" label="Homing Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

                  <TextField variant="outlined" label="Homing Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

                  <Button variant="contained" color="inherit"><OtherHousesIcon/>Home Indexer</Button>
              </Stack>

              <h4>Lift</h4>
              <Stack direction="column" paddingTop={0.5} spacing={1}>
                  <TextField variant="outlined" label="Homing Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s</InputAdornment>}}/>

                  <TextField variant="outlined" label="Homing Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

                  <TextField variant="outlined" label="Homing Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

                  <Button variant="contained" color="inherit"><OtherHousesIcon/>Home Lift</Button>
              </Stack>
            </div>
          </TabPanel>
{/* --------------------------------------------------------------------------------------- */}






{/* -------------MOVE------------------------------------------------ */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="column" style={{ textAlign: "center" }}>
              <h4>Indexer</h4>
              <Stack direction="column" paddingTop={0.5} spacing={1}>
                  <TextField variant="outlined" label="Moving Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s</InputAdornment>}}/>

                  <TextField variant="outlined" label="Moving Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

                  <TextField variant="outlined" label="Moving Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

              </Stack>

              <Stack direction="row" paddingTop={0.5} paddingBottom={1} spacing={1}>
                  <TextField variant="outlined" label="Move Position" size="small" defaultValue="NaN" style={{ width: 150 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">Degree</InputAdornment>}}/> 

                      <Tooltip title= "Move Indexer">
                    <Fab size="small" variant="contained">
                    <FiberManualRecordIcon/>
                    </Fab>
                  </Tooltip> 
              </Stack>


              <h4>Lift</h4>
              <Stack direction="column" paddingTop={0.5} spacing={1}>
                  <TextField variant="outlined" label="Moving Velocity" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s</InputAdornment>}}/>

                  <TextField variant="outlined" label="Moving Acceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

                  <TextField variant="outlined" label="Moving Deceleration" size="small" defaultValue="NaN" style={{ width: 200 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>  

              </Stack>

              <Stack direction="row" paddingTop={0.5} paddingBottom={1} spacing={1}>
                  <TextField variant="outlined" label="Move Position" size="small" defaultValue="NaN" style={{ width: 150 }}
                      InputProps={{readOnly: true, endAdornment: <InputAdornment position="end">Degree</InputAdornment>}}/> 

                      <Tooltip title= "Move Lift">
                    <Fab size="small" variant="contained">
                    <FiberManualRecordIcon/>
                    </Fab>
                  </Tooltip> 
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
