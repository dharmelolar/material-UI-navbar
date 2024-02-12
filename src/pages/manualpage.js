// manualpage.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
            <div className="manual">
            <h1><Button variant="fab" color="inherit" onClick={""}>Bot - 1</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>X - Axis</Button>
                <Button variant="contained" color="inherit" >Y1 - Axis</Button>
                <Button variant="contained" color="inherit" >Y2 - Axis</Button>
                <Button variant="contained" color="inherit" >Z - Axis</Button>
              </Stack>
            </div>

            <div className="manual">
            <h1><Button variant="fab" color="inherit">Bot - 2</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit">X - Axis</Button>
                <Button variant="contained" color="inherit">Y1 - Axis</Button>
                <Button variant="contained" color="inherit">Y2 - Axis</Button>
                <Button variant="contained" color="inherit">Z - Axis</Button>
              </Stack>
            </div>

            <div className="manual">
            <h1><Button variant="fab" color="inherit">Bot - 3</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit">X - Axis</Button>
                <Button variant="contained" color="inherit">Y1 - Axis</Button>
                <Button variant="contained" color="inherit">Y2 - Axis</Button>
                <Button variant="contained" color="inherit">Z - Axis</Button>
              </Stack>
            </div>

            <div className="manual">
            <h1><Button variant="fab" color="inherit">Bot - 4</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit">X - Axis</Button>
                <Button variant="contained" color="inherit">Y1 - Axis</Button>
                <Button variant="contained" color="inherit">Y2 - Axis</Button>
                <Button variant="contained" color="inherit">Z - Axis</Button>
              </Stack><br/>
            </div>

            <div>
              <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="center" paddingBottom={0.5}>
                <Button variant="contained" color="primary">Lift - 1</Button>
                <Button variant="contained" color="primary">Indexer -1</Button>
                <Button variant="contained" color="secondary">Quick Stick</Button>
                <Button variant="contained" color="secondary">Setup</Button>
              </Stack>
              <Stack direction="row" spacing={0.6} alignItems="center" justifyContent="center">
                <Button variant="contained" color="primary">Lift - 2</Button>
                <Button variant="contained" color="primary">Indexer - 2</Button>
                <Button variant="contained" color="secondary">Charging</Button>
                <Button variant="contained" color="secondary">PackML</Button>
              </Stack>
            </div>
            
          </>
        )}
      </div>

      {/* Define the route for the X_axispage_B1 component */}
      {showX_axispage_B1 && <Route path="/" component={X_axispage_B1} />}
    </Router>
  );
}

export default ManualPage;
