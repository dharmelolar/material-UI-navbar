// manualpage.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import X_axispage_B1 from "./manualcontent/X_axispage_B1";
import All_axispage_B1 from "./manualcontent/all_axispage_B1"
import Indexer from "./manualcontent/Indexer copy"


function ManualPage() {
  const [showAll_axispage_B1, setShowAll_axispage_B1] = useState(false);
  const [showX_axispage_B1, setShowX_axispage_B1] = useState(false);
  const [showIndexer, setShowIndexer] = useState(false);

  const handleXAxis_B1Click = () => {
    setShowX_axispage_B1(true);
  };
  const handleAllAxis_B1Click = () => {
    setShowAll_axispage_B1(true);
    setShowX_axispage_B1(false);
  };
  const handleIndexerClick = () => {
    setShowIndexer(true);
    setShowX_axispage_B1(false);
    setShowAll_axispage_B1(false);
  }

  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <br />
        <h>Manual</h>
        {showX_axispage_B1 || showAll_axispage_B1 || showIndexer ? null : (
          <>
            <div className="manual">
            <h1><Button variant="fab" color="inherit" onClick={handleAllAxis_B1Click}>Bot - 1</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>X - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Y1 - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Y2 - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Z - Axis</Button>
              </Stack>
            </div>

            <div className="manual">
            <h1><Button variant="fab" color="inherit" onClick={handleAllAxis_B1Click}>Bot - 2</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>X - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Y1 - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Y2 - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Z - Axis</Button>
              </Stack>
            </div>

            <div className="manual">
            <h1><Button variant="fab" color="inherit" onClick={handleAllAxis_B1Click}>Bot - 3</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>X - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Y1 - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Y2 - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Z - Axis</Button>
              </Stack>
            </div>

            <div className="manual">
            <h1><Button variant="fab" color="inherit" onClick={handleAllAxis_B1Click}>Bot - 4</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>X - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Y1 - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Y2 - Axis</Button>
                <Button variant="contained" color="inherit" onClick={handleXAxis_B1Click}>Z - Axis</Button>
              </Stack><br/>
            </div>

            <div>
              <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="center" paddingBottom={0.5}>
                <Button variant="contained" color="primary">Lift - 1</Button>
                <Button variant="contained" color="primary" onClick={handleIndexerClick}>Indexer -1</Button>
                <Button variant="contained" color="secondary">Quick Stick</Button>
                <Button variant="contained" color="secondary">Setup</Button>
              </Stack>
              <Stack direction="row" spacing={0.6} alignItems="center" justifyContent="center">
                <Button variant="contained" color="primary">Lift - 2</Button>
                <Button variant="contained" color="primary" onClick={handleIndexerClick}>Indexer - 2</Button>
                <Button variant="contained" color="secondary">Charging</Button>
                <Button variant="contained" color="secondary">PackML</Button>
              </Stack>
            </div>
            
          </>
        )}
      </div>

      {/* Define the route for the X_axispage_B1 component */}
      {showX_axispage_B1 && <Route path="/" component={X_axispage_B1} />}
      {showAll_axispage_B1 && <Route path="/" component={All_axispage_B1} />}
      {showIndexer && <Route path="/" component={Indexer} />}
    </Router>
  );
}

export default ManualPage;
