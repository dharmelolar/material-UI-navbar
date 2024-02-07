import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import X_axispage_B1 from "./manualcontent/X_axispage_B1";

function ManualPage() {
  const [showX_axispage_B1, setShowX_axispage_B1] = useState(false);

  const handleXAxis_B1Click = () => {
    setShowX_axispage_B1(true);
  };

  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <br />
        <h>Manual</h>
        {showX_axispage_B1 ? null : (
          <>
            <h1>Bot - 1</h1>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>X - Axis</Button>
              <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Y1 - Axis</Button>
              <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Y2 - Axis</Button>
              <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Z - Axis</Button>
            </Stack>
            <h1>Bot - 2</h1>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              <Button variant="contained" color="inherit">X - Axis</Button>
              <Button variant="contained" color="inherit">Y1 - Axis</Button>
              <Button variant="contained" color="inherit">Y2 - Axis</Button>
              <Button variant="contained" color="inherit">Z - Axis</Button>
            </Stack>
            <h1>Bot - 3</h1>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              <Button variant="contained" color="inherit">X - Axis</Button>
              <Button variant="contained" color="inherit">Y1 - Axis</Button>
              <Button variant="contained" color="inherit">Y2 - Axis</Button>
              <Button variant="contained" color="inherit">Z - Axis</Button>
            </Stack>
            <h1>Bot - 4</h1>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              <Button variant="contained" color="inherit">X - Axis</Button>
              <Button variant="contained" color="inherit">Y1 - Axis</Button>
              <Button variant="contained" color="inherit">Y2 - Axis</Button>
              <Button variant="contained" color="inherit">Z - Axis</Button>
            </Stack><br/>
            <stack><ButtonGroup variant="contained" color="inherit" aria-label="Basic button group">
              <Button>Lift - 1</Button>
              <Button>Indexer - 1</Button>
              <Button>Lift - 2</Button>
              <Button>Indexer - 2</Button>
            </ButtonGroup></stack> <br/>
            <stack><ButtonGroup variant="contained" color="inherit" aria-label="Basic button group">
              <Button>Quich Stick</Button>
              <Button>PackML</Button>
              <Button>Setup</Button>
              <Button>Charging</Button>
            </ButtonGroup></stack>
            
          </>
        )}
      </div>

      {/* Define the route for the X_axispage_B1 component */}
      {showX_axispage_B1 && <Route path="/" component={X_axispage_B1} />}
    </Router>
  );
}

export default ManualPage;
