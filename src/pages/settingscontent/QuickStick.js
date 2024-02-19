import React, { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


function QuickStick() {
  const [velocity, setVelocity] = useState("");

  useEffect(() => {
    fetchVelocity();
  }, []);

  const fetchVelocity = async () => {
    try {
      const response = await fetch("http://localhost:8000/get_velocity");
      const data = await response.json();
      setVelocity(data);
    } catch (error) {
      console.error("Error fetching velocity:", error);
    }
  };

  return (
    <div className="manual">
        <Stack className="manual" direction="row" paddingTop={2} spacing={2}>
          <h2>Bot - 1</h2>
          <TextField size='small' id="outlined-basic" label="Velocity" variant="outlined" style={{ width: 162 }} 
          value={velocity} 
          onChange={(e) => setVelocity(e.target.value)} 
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
