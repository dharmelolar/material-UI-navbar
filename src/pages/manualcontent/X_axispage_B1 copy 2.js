// X_axispage_B1
import {Stack, Button} from '@mui/material';
import { Tooltip, FormControlLabel, Typography, Switch, TextField, Fab, InputAdornment} from '@mui/material';
import {Home} from '@material-ui/icons';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import SelectionButton from '../../component/selectionbutton';
import React,{useState} from 'react';


function App() {
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
    <div className="App">
       {/* for STATUS */}
       <div className="column" style={{ textAlign: "center" }}>
        <h2>Status</h2>
        <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            <Tooltip title={enabled ? "Enabled" : "Disabled"} placement="bottom">
            <FormControlLabel 
            control={<Switch checked={enabled} onChange={toggleEnable} color="success" />}/>
            </Tooltip>
          
            <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'disabled'}`}>
            {enabled ? 'Enabled' : 'Disabled'}
          </Typography>
          
          <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'disabled'}`}>
            {enabled ? 'At Home' : 'Not Home'}
          </Typography>

          <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'fault'}`}>
            {enabled ? 'No Fault' : 'Fault'}
          </Typography>
        </Stack>

          <Stack direction="row" paddingTop={2} spacing={2}>
          <TextField
              variant="outlined"
              label="Actual Velocity"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
              }}
            />

            <TextField
              variant="outlined"
              label="Actual Position"
              size="small" 
              defaultValue="NaN"
              style={{ width: 140 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm</InputAdornment>,
              }}
            />  
          </Stack>

          <Stack direction="row" paddingTop={2} spacing={2}>
            <TextField
              variant="outlined"
              label="Actual Current"
              size="small" // Set custom size as per your requirement
              defaultValue="NaN"
              style={{ width: 145 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">A</InputAdornment>,
              }}
            />

            <TextField
              variant="outlined"
              label="Actual Torque"
              size="small" // Set custom size as per your requirement
              defaultValue="NaN"
              style={{ width: 145 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
              }}
            />  
          </Stack>

          <Stack direction="row" paddingTop={2} spacing={2}>
          <TextField type="number" size='small' id="outlined-basic" label="Enter Max Torque" variant="outlined" style={{ width: 310 }}
          InputProps={{
            endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          </Stack>
          

          <Stack direction="row" paddingTop={1.5} spacing={1.8}>
          <Fab size="small" variant="contained" color="error">
          <Tooltip title="Reset"><RestartAltIcon/></Tooltip>
            </Fab>
          </Stack>
        </div>
      
      {/* for JOG */}
        <div className="column" style={{ textAlign: "center"}}>
        <h2>Jog</h2>
          <Stack direction="column" paddingTop={2} spacing={2}>
          <TextField
              variant="outlined"
              label="Jog Velocity"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
              }}
            />

            <TextField
              variant="outlined"
              label="Jog Acceleration"
              size="small" 
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{

                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />  
            
          <TextField
              variant="outlined"
              label="Jog Deceleration"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
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
      {/* for HOME */}
      <div className="column" style={{ textAlign: "center"}}>
        <h2>Home</h2>
          <Stack direction="column" paddingTop={2} spacing={2}>
          <TextField
              variant="outlined"
              label="Homing Velocity"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
              }}
            />

            <TextField
              variant="outlined"
              label="Homing Acceleration"
              size="small" 
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />  
            
          <TextField
              variant="outlined"
              label="Homing Deceleration"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
            <Button variant="contained" color="inherit"><Home/>Home</Button>
          </Stack>
        </div>
      {/* for MOVE */}
      <div className="column" style={{ textAlign: "center"}}>
        <h2>Move</h2>
          <Stack direction="column" paddingTop={2} spacing={2}>
          <TextField
              variant="outlined"
              label="Move Velocity"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
              }}
            />

            <TextField
              variant="outlined"
              label="Move Acceleration"
              size="small" 
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />  
            
          <TextField
              variant="outlined"
              label="Move Deceleration"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
            />
          </Stack>
        </div>
    </div>
  );
}

export default App;