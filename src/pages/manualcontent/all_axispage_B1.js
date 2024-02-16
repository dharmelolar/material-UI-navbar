// All_axispage_B1
import {Stack} from '@mui/material';
import { Tooltip, FormControlLabel, Typography, Switch, TextField, Fab, InputAdornment} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Box from '@mui/material/Box';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import React,{useState} from 'react';


function App() {
  const [enabled, setEnabled] = useState(false);
  const [isRunning, setRunning] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isJogHold, setIsJogHold] = useState(false);
  const [isJogUnhold, setIsJogUnhold] = useState(false);
  const [isJogUp, setIsJogUp] = useState(false);
  const [isJogDown, setIsJogDown] = useState(false);
  const [isJogLeft, setIsJogLeft] = useState(false);
  const [isJogRight, setIsJogRight] = useState(false);

  const toggleEnable = () => {
    setEnabled(prevEnabled => !prevEnabled);
  };
  const toggleRunning = () => {
    setRunning(prevRunning => !prevRunning);
  };
  const toggleMoving = () => {
    setIsMoving(!isMoving);
  };
  const toggleJogHold = () => {
    setIsJogHold(!isJogHold);
  };
  const toggleJogUnhold = () => {
    setIsJogUnhold(!isJogUnhold);
  };
  const toggleJogUp = () => {
    setIsJogUp(!isJogUp);
  };
  const toggleJogDown = () => {
    setIsJogDown(!isJogDown);
  };
  const toggleJogLeft = () => {
    setIsJogLeft(!isJogLeft);
  };
  const toggleJogRight = () => {
    setIsJogRight(!isJogRight);
  };

  return (
    <div className="App">
       <div>
        <Stack direction="column" paddingTop={1} spacing={1}>
          <Tooltip title={enabled ? "Master Enabled" : "Master Disabled"} placement="bottom">
            <FormControlLabel 
            control={<Switch checked={enabled} onChange={toggleEnable} color="success" />}/>
          </Tooltip>
          <Fab size="small" variant="contained" color="error">
            <Tooltip title="Master Reset"><RestartAltIcon/></Tooltip>
          </Fab>
          <Tooltip title={isRunning ? "Test Running" : "Test Run"} style={{ backgroundColor: isRunning ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isRunning ? "success" : ""}onClick={toggleRunning}>
            <DirectionsRunIcon/>
            </Fab>
          </Tooltip>
          <Fab size="small" variant="contained" color="warning">
            <Tooltip title="Test Reset"><RestartAltIcon/></Tooltip>
          </Fab>
        </Stack>
      </div>
       



      {/* for Width */}
      <Box>
      <div className="column" style={{ textAlign: "center" }}>
       <h2>Width</h2>
        <Stack direction="row" paddingTop={1} spacing={0.5}>
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

        <Stack direction="row" paddingTop={1} spacing={1}>
          <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 193 }}
          InputProps={{
            startAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          <Tooltip title={isMoving ? "Moving" : "Move"} style={{ backgroundColor: isMoving ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isMoving ? "success" : ""}onClick={toggleMoving}>
            <FiberManualRecordIcon/>
            </Fab>
          </Tooltip>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField
              variant="outlined"
              label="Actual Velocity"
              size="small"
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                startAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
              }}
          />

          <TextField
              variant="outlined"
              label="Actual Position"
              size="small" 
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                startAdornment: <InputAdornment position="end">mm</InputAdornment>,
              }}
          />  
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={2.5}>
          <Tooltip title={isJogHold ? "Jogging" : "Jog Hold"} style={{ backgroundColor: isJogHold ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isJogHold ? "success" : ""}onClick={toggleJogHold}>
              <KeyboardArrowRightIcon />
            </Fab>
          </Tooltip>

          <Tooltip title={isJogUnhold ? "Jogging" : "Jog Unhold"} style={{ backgroundColor: isJogUnhold ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isJogUnhold ? "success" : ""}onClick={toggleJogUnhold}>
              <KeyboardArrowLeftIcon />
            </Fab>
          </Tooltip>
        </Stack>
      </div>


      {/* for Bot Arm-1 */}
      <div className="column" style={{ textAlign: "center" }}>
       <h2>Bot Arm-1</h2>
       <Stack direction="row" paddingTop={1} spacing={0.5}>
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

        <Stack direction="row" paddingTop={1} spacing={1}>
          <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 193 }}
          InputProps={{
            startAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          <Tooltip title={isMoving ? "Moving" : "Move"} style={{ backgroundColor: isMoving ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isMoving ? "success" : ""}onClick={toggleMoving}>
            <FiberManualRecordIcon/>
            </Fab>
          </Tooltip>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField
              variant="outlined"
              label="Actual Velocity"
              size="small"
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                startAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
              }}
          />

          <TextField
              variant="outlined"
              label="Actual Position"
              size="small" 
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                startAdornment: <InputAdornment position="end">mm</InputAdornment>,
              }}
          />  
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={2.5}>
          <Tooltip title={isJogLeft ? "Jogging" : "Jog Left"} style={{ backgroundColor: isJogLeft ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isJogLeft ? "success" : ""}onClick={toggleJogLeft}>
              <KeyboardArrowLeftIcon />
            </Fab>
          </Tooltip>

          <Tooltip title={isJogRight ? "Jogging" : "Jog Right"} style={{ backgroundColor: isJogRight ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isJogRight ? "success" : ""}onClick={toggleJogRight}>
              <KeyboardArrowRightIcon />
            </Fab>
          </Tooltip>
        </Stack>
      </div>
    </Box>


{/* for Bot Lift */}
    <Box>
      <div className="column" style={{ textAlign: "center" }}>
       <h2>Bot Lift</h2>
       <Stack direction="row" paddingTop={1} spacing={0.5}>
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

        <Stack direction="row" paddingTop={1} spacing={1}>
          <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 193 }}
          InputProps={{
            startAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          <Tooltip title={isMoving ? "Moving" : "Move"} style={{ backgroundColor: isMoving ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isMoving ? "success" : ""}onClick={toggleMoving}>
            <FiberManualRecordIcon/>
            </Fab>
          </Tooltip>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField
              variant="outlined"
              label="Actual Velocity"
              size="small"
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                startAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
              }}
          />

          <TextField
              variant="outlined"
              label="Actual Position"
              size="small" 
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                startAdornment: <InputAdornment position="end">mm</InputAdornment>,
              }}
          />  
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={2.5}>
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



      {/* for Bot Arm-2 */}
      <div className="column" style={{ textAlign: "center" }}>
       <h2>Bot Arm-2</h2>
       <Stack direction="row" paddingTop={1} spacing={0.5}>
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

        <Stack direction="row" paddingTop={1} spacing={1}>
          <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 193 }}
          InputProps={{
            startAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          <Tooltip title={isMoving ? "Moving" : "Move"} style={{ backgroundColor: isMoving ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isMoving ? "success" : ""}onClick={toggleMoving}>
            <FiberManualRecordIcon/>
            </Fab>
          </Tooltip>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField
              variant="outlined"
              label="Actual Velocity"
              size="small"
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                startAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
              }}
          />

          <TextField
              variant="outlined"
              label="Actual Position"
              size="small" 
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                startAdornment: <InputAdornment position="end">mm</InputAdornment>,
              }}
          />  
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={2.5}>
          <Tooltip title={isJogHold ? "Jogging" : "Jog Hold"} style={{ backgroundColor: isJogHold ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isJogHold ? "success" : ""}onClick={toggleJogHold}>
              <KeyboardArrowLeftIcon />
            </Fab>
          </Tooltip>

          <Tooltip title={isJogUnhold ? "Jogging" : "Jog Unhold"} style={{ backgroundColor: isJogUnhold ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isJogUnhold ? "success" : ""}onClick={toggleJogUnhold}>
              <KeyboardArrowRightIcon />
            </Fab>
          </Tooltip>
        </Stack>
      </div>
    </Box>
  </div>
  );
}

export default App;