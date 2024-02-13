import React from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


function QuickStick() {
  return (
    <div className="manual">
        <Stack className="manual" direction="row" paddingTop={2} spacing={2}>
          <h2>Bot - 1</h2>
          <TextField type="number" size='small' id="outlined-basic" label="Velocity" variant="outlined" style={{ width: 162 }} 
          InputProps={{
            endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
          }} />
        </Stack>
        <Stack className="manual" direction="row" paddingTop={2} spacing={2}>
        <h2>Bot - 2</h2>
        <TextField type="number" size='small' id="outlined-basic" label="Velocity" variant="outlined" style={{ width: 162 }} 
          InputProps={{
            endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
          }} />
        </Stack>
        <Stack className="manual" direction="row" paddingTop={2} spacing={2}>
        <h2>Bot - 3</h2>
        <TextField type="number" size='small' id="outlined-basic" label="Velocity" variant="outlined" style={{ width: 162 }} 
          InputProps={{
            endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
          }} />
        </Stack>
        <Stack className="manual" direction="row" paddingTop={2} spacing={2}>
        <h2>Bot - 4</h2>
        <TextField type="number" size='small' id="outlined-basic" label="Velocity" variant="outlined" style={{ width: 162 }} 
          InputProps={{
            endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
          }} />
        </Stack>
    </div>
  );
}

export default QuickStick;
