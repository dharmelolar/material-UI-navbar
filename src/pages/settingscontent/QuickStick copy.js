import React, { useState, useEffect } from "react";
import {Stack, button} from '@mui/material';
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


  const updateVelocity = async () => {
    try {
      await fetch("http://localhost:8000/update_velocity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ new_velocity: velocity }),
      });
      console.log("Velocity updated successfully");
    } catch (error) {
      console.error("Error updating velocity:", error);
    }
  };



  return (
    <div className="manual">
        <Stack className="manual" direction="row" paddingTop={2} spacing={2}>
          <h2>Bot - 1</h2>
          <TextField size='small' id="outlined-basic" variant="outlined" style={{ width: 50 }} 
          value={velocity} 
          onChange={(e) => setVelocity(e.target.value)} />

          <TextField size='small' id="outlined-basic" label="update Velocity" variant="outlined" style={{ width: 162 }} 
          InputProps={{
            endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
          }} />
          <button onClick={updateVelocity}>update</button>
        </Stack>
    </div>
  );
}

export default QuickStick;
