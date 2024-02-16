import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Typography, TextField, Fab, InputAdornment, Tooltip, FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Tab from '@mui/material/Tab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';
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

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      sx: fabStyle,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      sx: fabStyle,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      sx: { ...fabStyle, ...fabGreenStyle },
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];
  const [enabled, setEnabled] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isJogUp, setIsJogUp] = useState(false);
  const [isJogDown, setIsJogDown] = useState(false);

  const toggleEnable = () => {
    setEnabled(prevEnabled => !prevEnabled);
  };
  const toggleMoving = () => {
    setIsMoving(!isMoving);
  };
  const toggleJogUp = () => {
    setIsJogUp(!isJogUp);
  };
  const toggleJogDown = () => {
    setIsJogDown(!isJogDown);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div direction="row" paddingTop={0.5} spacing={0.5}>
        <Tooltip title={enabled ? "Enabled" : "Disabled"} placement="bottom">
          <FormControlLabel
            control={<Switch checked={enabled} onChange={toggleEnable} color="success" />}
          />
        </Tooltip>
        <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'fault'}`}>
            {enabled ? 'No Fault' : 'Fault'}
          </Typography>
        <TextField size='small'
                  label="Position"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm</InputAdornment>,
                  }}
                />
        <TextField size='small'
                  label="Jog Velocity"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm/s</InputAdornment>,
                  }}
                />
      </div>
      <Box
        sx={{
          bgcolor: 'background.paper',
          width: 350,
          position: 'relative',
          minHeight: 200,
        }}
      >
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
                <TextField size='small'
                  label="Jog Velocity"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm/s</InputAdornment>,
                  }}
                />
                <TextField size='small'
                  label="Jog Acceleration"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm/s²</InputAdornment>,
                  }}
                />
                <TextField size='small'
                  label="Jog Deceleration"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm/s²</InputAdornment>,
                  }}
                />
                <Stack direction="row" paddingTop={1.5} spacing={2.5}>
                  <Tooltip title={isJogUp ? "Jogging" : "Jog Up"} style={{ backgroundColor: isJogUp ? "success" : "" }}>
                    <Fab size="small" variant="contained" color={isJogUp ? "success" : ""} onClick={toggleJogUp}>
                      <KeyboardArrowUpIcon />
                    </Fab>
                  </Tooltip>

                  <Tooltip title={isJogDown ? "Jogging" : "Jog Down"} style={{ backgroundColor: isJogDown ? "success" : "" }}>
                    <Fab size="small" variant="contained" color={isJogDown ? "success" : ""} onClick={toggleJogDown}>
                      <KeyboardArrowDownIcon />
                    </Fab>
                  </Tooltip>
                </Stack>

              </Stack>
            </div>
          </TabPanel>
          {/* --------------------------------------------------------------------------------------- */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            {/* -------------HOME------------------------------------------------ */}
            <div className="column" style={{ textAlign: "center" }}>
              <Stack direction="column" paddingTop={2} spacing={2}>
                <TextField size='small'
                  label="Homing Velocity"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm/s</InputAdornment>,
                  }}
                />
                <TextField size='small'
                  label="Homing Acceleration"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm/s²</InputAdornment>,
                  }}
                />
                <TextField size='small'
                  label="Homing Deceleration"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm/s²</InputAdornment>,
                  }}
                />

              </Stack>
            </div>
          </TabPanel>
          {/* --------------------------------------------------------------------------------------- */}

          <TabPanel value={value} index={2} dir={theme.direction}>
            {/* -------------HOME------------------------------------------------ */}
            <div className="column" style={{ textAlign: "center" }}>
              <Stack direction="column" paddingTop={2} spacing={2}>
                <TextField size='small'
                  label="Move Velocity"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm/s</InputAdornment>,
                  }}
                />
                <TextField size='small'
                  label="Move Acceleration"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm/s²</InputAdornment>,
                  }}
                />
                <TextField size='small'
                  label="Move Deceleration"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">mm/s²</InputAdornment>,
                  }}
                />
                <TextField size='small'
                  label="Move Position"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '20ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Degree</InputAdornment>,
                  }}
                />

              </Stack>
            </div>
          </TabPanel>
          {/* --------------------------------------------------------------------------------------- */}

        </SwipeableViews>
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
          >
            <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </Box>
    </div>
  );
}
