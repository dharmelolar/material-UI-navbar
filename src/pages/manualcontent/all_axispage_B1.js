import React, { useState, useEffect } from 'react';
import { Stack, Grid } from '@mui/material';
import { Button, TextField, InputAdornment, Fab, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import axios from 'axios';

export default function Manual_charge() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [actualPosition, setActualPosition] = useState('');

// ---------------------fetch PLC tag values ----------------------------------------------------------------------


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/velocity");
        console.log("Response data:", response.data);
        setActualPosition(response.data.actual_position);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const interval = setInterval(fetchData, 1000); // Fetch data every 1000 milliseconds (1 second)

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, []);
// -------------------------------------------------------------------------------------------------------------------

  const handleEnable = () => {
    setIsEnabled(true);
  };

  const handleDisable = () => {
    setIsEnabled(false);
  };

  return (
    <Grid container className='App' justifyContent="center" alignItems="center">

      {/*----------------------------------------Enable and Disable Buttons---------------------------------------------------------- */}
      <Grid item xs={12}>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Button variant={isEnabled ? 'contained' : 'outlined'} color='success' onClick={handleEnable}>Enable</Button>
          <Button variant={!isEnabled ? 'contained' : 'outlined'} color='error' onClick={handleDisable}>Disable</Button>
        </Stack>
      </Grid>

      {/* -------------------------------------------Width Adjuster------------------------------------------------------ */}
      <Grid item xs={12} sm={6} lg={3}>
        <Box className="column" style={{ textAlign: "center", backgroundColor: isEnabled ? '#e6fff2' : '#fff5eb' }} >

          <h2>Width Adjuster</h2>
          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            <Button variant='outlined' color='success'> Home</Button>
            <Button variant='outlined' color='error'> Fault</Button>
          </Stack>

          <Stack direction="row" paddingTop={2} spacing={0.5}>
            <TextField type="number" size='small' id="outlined-basic" value={actualPosition} label="Actual Velocity" variant="outlined" style={{ width: 130 }}
              InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' }, endAdornment: <InputAdornment position="end">mm/s</InputAdornment> }} />

            <TextField variant="outlined" label="Actual Position" size="small" defaultValue="NaN" style={{ width: 170 }}
              InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' }, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
          </Stack>

          <Stack direction="row" padding={1} spacing={2.1}>
            <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 130 }}
              InputProps={{ endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />

            <Tooltip title="Moving"><Fab size="small" variant="contained"><FiberManualRecordIcon /></Fab></Tooltip>

            <Tooltip title="Jogg Increase"><Fab size="small" variant="contained"><AddIcon /></Fab></Tooltip>

            <Tooltip title="Jogg Decrease"><Fab size="small" variant="contained"><RemoveIcon /></Fab></Tooltip>
          </Stack>

       </Box>



{/* ----------------------------BOT Arm-1------------------------------------------------------------------------------------------------------------------------- */}
       
        <Box className="column" style={{ textAlign: "center", backgroundColor: isEnabled ? '#e6fff2' : '#fff5eb' }} >

          <h2>Bot Arm-1</h2>
          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            <Button variant='outlined' color='success'> Home</Button>
            <Button variant='outlined' color='error'> Fault</Button>
          </Stack>

          <Stack direction="row" paddingTop={2} spacing={0.5}>
            <TextField type="number" size='small' id="outlined-basic" label="Actual Velocity" variant="outlined" style={{ width: 130 }}
              InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' }, endAdornment: <InputAdornment position="end">mm/s</InputAdornment> }} />

            <TextField variant="outlined" label="Actual Position" size="small" defaultValue="NaN" style={{ width: 170 }}
              InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' }, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
          </Stack>

          <Stack direction="row" padding={1} spacing={2.1}>
            <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 130 }}
              InputProps={{ endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />

            <Tooltip title="Moving"><Fab size="small" variant="contained"><FiberManualRecordIcon /></Fab></Tooltip>

            <Tooltip title="Jogg Increase"><Fab size="small" variant="contained"><AddIcon /></Fab></Tooltip>

            <Tooltip title="Jogg Decrease"><Fab size="small" variant="contained"><RemoveIcon /></Fab></Tooltip>
          </Stack>

          

        </Box>
      </Grid>


      

   
{/* -------------------------------------------Bot Lift------------------------------------------------------ */}



      <Grid item xs={12} sm={6} lg={3}>
        <Box className="column" style={{ textAlign: "center", backgroundColor: isEnabled ? '#e6fff2' : '#fff5eb' }} >

          <h2>Bot Lift</h2>
          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            <Button variant='outlined' color='success'> Home</Button>
            <Button variant='outlined' color='error'> Fault</Button>
          </Stack>

          <Stack direction="row" paddingTop={2} spacing={0.5}>
            <TextField type="number" size='small' id="outlined-basic" label="Actual Velocity" variant="outlined" style={{ width: 130 }}
              InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' }, endAdornment: <InputAdornment position="end">mm/s</InputAdornment> }} />

            <TextField variant="outlined" label="Actual Position" size="small" defaultValue="NaN" style={{ width: 170 }}
              InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' }, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
          </Stack>

          <Stack direction="row" padding={1} spacing={2.1}>
            <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 130 }}
              InputProps={{ endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />

            <Tooltip title="Moving"><Fab size="small" variant="contained"><FiberManualRecordIcon /></Fab></Tooltip>

            <Tooltip title="Jogg Increase"><Fab size="small" variant="contained"><AddIcon /></Fab></Tooltip>

            <Tooltip title="Jogg Decrease"><Fab size="small" variant="contained"><RemoveIcon /></Fab></Tooltip>
          </Stack>

       </Box>



{/* ----------------------------BOT Arm-2------------------------------------------------------------------------------------------------------------------------- */}
       
        <Box className="column" style={{ textAlign: "center", backgroundColor: isEnabled ? '#e6fff2' : '#fff5eb' }} >

          <h2>Bot Arm-2</h2>
          <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            <Button variant='outlined' color='success'> Home</Button>
            <Button variant='outlined' color='error'> Fault</Button>
          </Stack>

          <Stack direction="row" paddingTop={2} spacing={0.5}>
            <TextField type="number" size='small' id="outlined-basic" label="Actual Velocity" variant="outlined" style={{ width: 130 }}
              InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' }, endAdornment: <InputAdornment position="end">mm/s</InputAdornment> }} />

            <TextField variant="outlined" label="Actual Position" size="small" defaultValue="NaN" style={{ width: 170 }}
              InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' }, endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />
          </Stack>

          <Stack direction="row" padding={1} spacing={2.1}>
            <TextField type="number" size='small' id="outlined-basic" label="Target Position" variant="outlined" style={{ width: 130 }}
              InputProps={{ endAdornment: <InputAdornment position="end">mm</InputAdornment> }} />

            <Tooltip title="Moving"><Fab size="small" variant="contained"><FiberManualRecordIcon /></Fab></Tooltip>

            <Tooltip title="Jogg Increase"><Fab size="small" variant="contained"><AddIcon /></Fab></Tooltip>

            <Tooltip title="Jogg Decrease"><Fab size="small" variant="contained"><RemoveIcon /></Fab></Tooltip>
          </Stack>

          

        </Box>
      </Grid>
    </Grid>
  );
}
