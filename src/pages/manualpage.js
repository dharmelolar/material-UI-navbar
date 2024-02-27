// manualpage.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import X_axispage_B1 from "./manualcontent/X_axispage_B1";
import All_axispage_B1 from "./manualcontent/all_axispage_B1";
import Indexer from "./manualcontent/Indexer";
import manual_QS from './manualcontent/manual_QS';
import manual_startup from './manualcontent/manual_startup';
import manual_charge from "./manualcontent/manual_charge";
import manual_Lift from "./manualcontent/manual_Lift";



function ManualPage() {
  const [showAll_axispage_B1, setShowAll_axispage_B1] = useState(false);
  const [showX_axispage_B1, setShowX_axispage_B1] = useState(false); 
  const [showIndexer, setShowIndexer] = useState(false);
  const [showmanual_QS, setShowmanual_QS] = useState(false);
  const [showmanual_startup, setShowmanual_startup] = useState(false);
  const [showmanual_charge, setShowmanual_charge] = useState(false);
  const [showmanual_Lift, setShowmanual_Lift] = useState(false);

  

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
  const handlemanual_QSClick = () => {
    setShowmanual_QS(true);
    setShowIndexer(false);
    setShowX_axispage_B1(false);
    setShowAll_axispage_B1(false);
  }
  const handlemanual_startupClick = () => {
    setShowmanual_startup(true);
    setShowmanual_QS(false);
    setShowIndexer(false);
    setShowX_axispage_B1(false);
    setShowAll_axispage_B1(false);
  }
  const handlemanual_chargeClick = () => {
    setShowmanual_charge(true);
    setShowmanual_startup(false);
    setShowmanual_QS(false);
    setShowIndexer(false);
    setShowX_axispage_B1(false);
    setShowAll_axispage_B1(false);
  }
  const handlemanual_LiftClick = () => {
    setShowmanual_Lift(true);
    setShowmanual_charge(false);
    setShowmanual_startup(false);
    setShowmanual_QS(false);
    setShowIndexer(false);
    setShowX_axispage_B1(false);
    setShowAll_axispage_B1(false);
  }

 



  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <br />
        <h>Manual</h>
        {showX_axispage_B1 || showAll_axispage_B1 || showIndexer || showmanual_QS || showmanual_startup || showmanual_charge || showmanual_Lift? null : (
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
                <Button variant="contained" color="primary" onClick={handlemanual_LiftClick}>Lift - 1</Button>
                <Button variant="contained" color="primary" onClick={handleIndexerClick}>Indexer -1</Button>
                <Button variant="contained" color="secondary" onClick={handlemanual_QSClick}>Quick Stick</Button>
                <Button variant="contained" color="secondary" onClick={handlemanual_startupClick}>StartUp</Button>
              </Stack>
              <Stack direction="row" spacing={0.6} alignItems="center" justifyContent="center">
                <Button variant="contained" color="primary" onClick={handlemanual_LiftClick}>Lift - 2</Button>
                <Button variant="contained" color="primary" onClick={handleIndexerClick}>Indexer - 2</Button>
                <Button variant="contained" color="secondary" onClick={handlemanual_chargeClick}>Charging</Button>
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
      {showmanual_QS && <Route path="/" component={manual_QS} />}
      {showmanual_startup && <Route path="/" component={manual_startup} />}
      {showmanual_charge && <Route path="/" component={manual_charge} />}
      {showmanual_Lift && <Route path="/" component={manual_Lift} />}

    
  
    </Router>
  );
}

export default ManualPage;
