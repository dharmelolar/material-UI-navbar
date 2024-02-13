// X_axispage_B1
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
// import SelectionButton from '../../component/selectionbutton';
import React,{useState} from 'react';


function App() {
  const [maxTorque, setMaxTorque] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleMaxTorqueChange = (event) => {
    setMaxTorque(event.target.value);
  };
  const toggleEnable = () => {
    setIsEnabled(!isEnabled);
  };
  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="App">
       {/* for STATUS */}
       <div className="column" style={{ textAlign: "center" }}>
        <h2>Status</h2>
          <Stack direction="row" paddingTop={2} spacing={2}>
            <Button variant="outlined" color="success">Enable</Button>
            <Button variant="outlined" color="success">At Home</Button>
            <Button variant="outlined" color="error">Faults</Button>  
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
          <TextField type="number" size='small' id="outlined-basic" label="Enter Max Torque" variant="outlined" style={{ width: 310 }} value={maxTorque} 
          onChange={handleMaxTorqueChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          </Stack>
          

          <Stack direction="row" paddingTop={1.5} spacing={1.8}>
            <Button variant="contained" color={isEnabled ? "success" : "primary"} style={{ width: 100 }} onClick={toggleEnable}>
              {isEnabled ? "Enabled" : "Enable"}
            </Button>
            <Button variant="contained" color={isDisabled ? "success" : "primary"} style={{ width: 100 }} onClick={toggleDisabled}>
              {isDisabled ? "Disabled" : "Disable"}
            </Button>
            <Button variant="contained" color="inherit">Reset</Button>
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
            <Button variant="contained" color="inherit">Jog +</Button>
            <Button variant="contained" color="inherit">Jog -</Button>
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
            <Button variant="contained" color="inherit">Home</Button>
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