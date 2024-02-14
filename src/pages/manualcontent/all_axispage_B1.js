// All_axispage_B1
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import React,{useState} from 'react';


function App() {
  const [maxTorque, setMaxTorque] = useState('');

  const handleMaxTorqueChange = (event) => {
    setMaxTorque(event.target.value);
  };

  return (
    <div className="App">
       {/* for Width */}
       <div className="column" style={{ textAlign: "center" }}>
       <Stack direction="row" paddingTop={1} spacing={1}>
            <Button size="small" variant="contained" color="secondary">Enable</Button>
            <Button size="small" variant="contained" color="secondary">Disable</Button>
            <Button size="small" variant="contained" color="secondary">Reset</Button>
          </Stack>
        <h2>Width</h2>
          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            <Button variant="outlined" color="success">Jog Hold</Button>
            <Button variant="outlined" color="success">Jog unhold</Button>  
          </Stack>

          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
          <Button variant="outlined" color="success">Move</Button>
          <TextField type="number" size='small' id="outlined-basic" label="Max Torque" variant="outlined" style={{ width: 162 }} value={maxTorque} 
          onChange={handleMaxTorqueChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          </Stack>

          <Stack direction="row" paddingTop={1} spacing={0.5}>
          <TextField
              variant="outlined"
              label="Actual Velocity"
              size="small"
              defaultValue="NaN"
              style={{ width: 120 }}
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
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm</InputAdornment>,
              }}
            />  
          </Stack>

          <Stack direction="row" paddingTop={1} spacing={1}>
            <Button size="small" variant="contained" color="inherit">Enable</Button>
            <Button size="small" variant="contained" color="inherit">Disable</Button>
            <Button size="small" variant="contained" color="inherit">Reset</Button>
          </Stack>

          <h2>Bot Arm-1</h2>
          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            <Button variant="outlined" color="success">Jog right</Button>
            <Button variant="outlined" color="success">Jog left</Button>  
          </Stack>

          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
          <Button variant="outlined" color="success">Move</Button>
          <TextField type="number" size='small' id="outlined-basic" label="Max Torque" variant="outlined" style={{ width: 162 }} value={maxTorque} 
          onChange={handleMaxTorqueChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          </Stack>

          <Stack direction="row" paddingTop={1} spacing={0.5}>
          <TextField
              variant="outlined"
              label="Actual Velocity"
              size="small"
              defaultValue="NaN"
              style={{ width: 120 }}
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
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm</InputAdornment>,
              }}
            />  
          </Stack>

          <Stack direction="row" paddingTop={1} spacing={1}>
            <Button size="small" variant="contained" color="inherit">Enable</Button>
            <Button size="small" variant="contained" color="inherit">Disable</Button>
            <Button size="small" variant="contained" color="inherit">Reset</Button>
          </Stack>
        </div>
        <div className="column" style={{ textAlign: "center" }}>
        <Stack direction="row" paddingTop={1} spacing={1}>
            <Button size="small" variant="contained" color="secondary">Test Run</Button>
            <Button size="small" variant="contained" color="secondary">Test Reset</Button>
          </Stack>
        <h2>Bot Lift</h2>
          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            
            <Button variant="outlined" color="success">Jog Up</Button>
            <Button variant="outlined" color="success">Jog Down</Button>  
          </Stack>

          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
          <Button variant="outlined" color="success">Move</Button>
          <TextField type="number" size='small' id="outlined-basic" label="Max Torque" variant="outlined" style={{ width: 162 }} value={maxTorque} 
          onChange={handleMaxTorqueChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          </Stack>

          <Stack direction="row" paddingTop={1} spacing={0.5}>
          <TextField
              variant="outlined"
              label="Actual Velocity"
              size="small"
              defaultValue="NaN"
              style={{ width: 120 }}
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
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm</InputAdornment>,
              }}
            />  
          </Stack>

          <Stack direction="row" paddingTop={1} spacing={1}>
            <Button size="small" variant="contained" color="inherit">Enable</Button>
            <Button size="small" variant="contained" color="inherit">Disable</Button>
            <Button size="small" variant="contained" color="inherit">Reset</Button>
          </Stack>

            <h2>Bot Arm-2</h2>
            <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            
            <Button variant="outlined" color="success">Jog Right</Button>
            <Button variant="outlined" color="success">Jog Left</Button>  
          </Stack>

          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
          <Button variant="outlined" color="success">Move</Button>
          <TextField type="number" size='small' id="outlined-basic" label="Max Torque" variant="outlined" style={{ width: 162 }} value={maxTorque} 
          onChange={handleMaxTorqueChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          </Stack>

          <Stack direction="row" paddingTop={1} spacing={0.5}>
          <TextField
              variant="outlined"
              label="Actual Velocity"
              size="small"
              defaultValue="NaN"
              style={{ width: 120 }}
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
              style={{ width: 120 }}
              InputProps={{
                readOnly: true,
                endAdornment: <InputAdornment position="end">mm</InputAdornment>,
              }}
            />  
          </Stack>

          <Stack direction="row" paddingTop={1} spacing={1}>
            <Button size="small" variant="contained" color="inherit">Enable</Button>
            <Button size="small" variant="contained" color="inherit">Disable</Button>
            <Button size="small" variant="contained" color="inherit">Reset</Button>
          </Stack>
        </div>
    </div>
  );
}

export default App;