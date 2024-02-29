import React, { useState} from "react";
import { Stack, Button } from '@mui/material';
import TextField from '@mui/material/TextField';


function QuickStick() {
  const [velocity, setVelocity] = useState("");

  const updateVelocity = async () => {
    try {
       fetch("http://localhost:8000/update_velocity", {
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

        

        <TextField
          size='small'
          id="outlined-basic"
          variant="outlined"
          style={{ width: 100 }}
          value={velocity}
          onChange={(e) => setVelocity(e.target.value)}
        />
        
        <Button onClick={updateVelocity}>Update</Button>
      </Stack>
    </div>
  );
}

export default QuickStick;
