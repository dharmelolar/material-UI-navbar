// All_axispage_B1
import {Stack, Grid, Button} from '@mui/material';
import { Tooltip, TextField, Fab, InputAdornment} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Box from '@mui/material/Box';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import React,{useState} from 'react';


function App() {
  const [isEnabled, setIsEnabled] = useState(false);


  return (
    <Grid container className='App' justifyContent="center" alignItems="center">
       <Grid>
        <Box>
        <Stack direction="column" paddingTop={1} spacing={1}>
          <Fab size="small" variant="contained" color="error">
            <Tooltip title="Master Reset"><RestartAltIcon/></Tooltip>
          </Fab>
         
          <Fab size="small" variant="contained" color="inherit">
            <Tooltip title="Master Reset"><DirectionsRunIcon/></Tooltip>
          </Fab>

          <Fab size="small" variant="contained" color="warning">
            <Tooltip title="Test Reset"><RestartAltIcon/></Tooltip>
          </Fab>
        </Stack>
      </Box>
      </Grid>
       
      


      {/* for Width Adjuster*/}
      <Grid>
      <Box>
      <div className="column" style={{ textAlign: "center" }}>
       <h2>Width Adjuster</h2>
      

        <Stack direction="row" paddingTop={1} spacing={1}>
          <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 193 }}
          InputProps={{
            startAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          
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
          

          
        </Stack>
      </div>


      {/* for Bot Arm-1 */}
      <div className="column" style={{ textAlign: "center" }}>
       <h2>Bot Arm-1</h2>
       <Stack direction="row" paddingTop={1} spacing={1}>
         
        </Stack>

        <Stack direction="row" paddingTop={1} spacing={1}>
          <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 193 }}
          InputProps={{
            startAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
         
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
          
        </Stack>
      </div>
    </Box>
    </Grid>


{/* for Bot Lift */}
    <Grid item xs={12} sm={6} lg={3}>
    <Box>
      <div>
        <Stack direction="row" paddingTop={1} spacing={1}>
              <Button variant="contained" color={isEnabled ? "success" : "inherit"} onClick={() => setIsEnabled(true)}>Enable</Button>
              <Button variant="contained" color={isEnabled ? "inherit" : "warning"} onClick={() => setIsEnabled(false)}>Disable</Button>
        </Stack>
      </div>
    
      <div className="column" style={{ textAlign: "center" }}>
       <h2>Bot Lift</h2>
       <Stack direction="row" paddingTop={1} spacing={1}>
         
        </Stack>

        <Stack direction="row" paddingTop={1} spacing={1}>
          <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 193 }}
          InputProps={{
            startAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
         
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
         
        </Stack>
      </div>



      {/* for Bot Arm-2 */}
      <div className="column" style={{ textAlign: "center" }}>
       <h2>Bot Arm-2</h2>
       <Stack direction="row" paddingTop={1} spacing={1}>
          
        </Stack>

        <Stack direction="row" paddingTop={1} spacing={1}>
          <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 193 }}
          InputProps={{
            startAdornment: <InputAdornment position="end">Nm</InputAdornment>,
          }} />
          
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
        </div>
      
    </Box>
    </Grid>
  </Grid>
  );
}

export default App;