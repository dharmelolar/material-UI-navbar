// Manual Indexer
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SelectionButton from '../../component/selectionbutton';
import React, {useState} from 'react';
import '../../App.css'


function App() {
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
    <div className="App">
       {/* for Indexter */}
      <div className="column" style={{ textAlign: "center" }}>
        <h2>Indexer</h2>

        <Stack direction="row" paddingTop={0.5} spacing={0.5}>
          <Tooltip title={enabled ? "Enabled" : "Disabled"} placement="bottom">
          <FormControlLabel 
          control={<Switch checked={enabled} onChange={toggleEnable} color="success" />}/>
          </Tooltip>
          {
            <Typography variant="body1" 
            style={{ width: '100px', color: 'white', backgroundColor: enabled ? 'green' : 'gray', padding: '6px 12px', borderRadius: '4px', display: 'inline-block', margin: 0}}>
            {enabled ? 'Enabled' : 'Disabled'}
            </Typography>
          }

          <Button variant="outlined" color="error">Fault</Button>  
        </Stack>

        <Stack direction="row" paddingTop={0.5} spacing={0.5}>
          <TextField type="number" size='small' id="outlined-basic" label="Position" variant="outlined" style={{ width: 130 }} 
          InputProps={{
            readOnly:true,
            endAdornment: <InputAdornment position="end">mm</InputAdornment>,
          }} />

          <TextField type="number" size='small' id="outlined-basic" label="Velocity" variant="outlined" style={{ width: 127 }} 
          InputProps={{
            readOnly:true,
            endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
          }} />
        </Stack>
        
        <Stack direction="row" paddingTop={2} spacing={1.5}>
          <Fab size="small" variant="contained" color="inherit">
          <Tooltip title="Reset"><RestartAltIcon/></Tooltip>
            </Fab>

          <Tooltip title={isMoving ? "Moving" : "Move"} style={{ backgroundColor: isMoving ? "success" : "" }}>
            <Fab size="small" variant="contained" color={isMoving ? "success" : ""}onClick={toggleMoving}>
            <FiberManualRecordIcon/>
            </Fab>
          </Tooltip>

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
      
      {/* for HOME, JOG, MOVE */}
      <div className="column" style={{ textAlign: "center"}}>
        <SelectionButton/>
        <Stack direction="column" paddingTop={2} spacing={2}>
        <TextField size='small'
          label="Velocity"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '20ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">mm/s</InputAdornment>,
          }}
        />
        <TextField size='small'
          label="Acceleration"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '20ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">mm/s²</InputAdornment>,
          }}
        />
        <TextField size='small'
          label="Deceleration"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '20ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">mm/s²</InputAdornment>,
          }}
        />
        
        </Stack>
      </div>
    </div>
  );
}

export default App;