
// settingspage.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import QuickStick from "./settingscontent/QuickStick";;


function SettingsPage() {
  const [showQuickStick, setShowQuickStick] = useState(false);

  const handleQuickStickClick = () => {
    setShowQuickStick(true);
  };

  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <br />
        <h>Settings</h>
        {showQuickStick ? null : (
          <>
            <div className="manual">
            <h1><Button variant="fab" color="inherit" onClick={""}>Bot - 1</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit">X - Axis</Button>
                <Button variant="contained" color="inherit" >Y - Axis</Button>
                <Button variant="contained" color="inherit" >Z - Axis</Button>
              </Stack>
            </div>

            <div className="manual">
            <h1><Button variant="fab" color="inherit">Bot - 2</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit">X - Axis</Button>
                <Button variant="contained" color="inherit">Y - Axis</Button>
                <Button variant="contained" color="inherit">Z - Axis</Button>
              </Stack>
            </div>

            <div className="manual">
            <h1><Button variant="fab" color="inherit">Bot - 3</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit">X - Axis</Button>
                <Button variant="contained" color="inherit">Y - Axis</Button>
                <Button variant="contained" color="inherit">Z - Axis</Button>
              </Stack>
            </div>

            <div className="manual">
            <h1><Button variant="fab" color="inherit">Bot - 4</Button></h1>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <Button variant="contained" color="inherit">X - Axis</Button>
                <Button variant="contained" color="inherit">Y - Axis</Button>
                <Button variant="contained" color="inherit">Z - Axis</Button>
              </Stack><br/>
            </div>

            <div>
              <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="center" paddingBottom={0.5}>
                <Button variant="contained" color="primary" onClick={handleQuickStickClick}>Quick Stick</Button>
                <Button variant="contained" color="primary">Bypass Modules</Button>
              </Stack>
              <Stack direction="row" spacing={0.2} alignItems="center" justifyContent="center" paddingBottom={0.5}>
              <Button variant="contained" color="primary">Safe Travel Position</Button>
                <Button variant="contained" color="primary">Z offset</Button>
              </Stack>
              <Stack direction="row" spacing={0.6} alignItems="center" justifyContent="center">
              </Stack>
            </div>
          </>
        )}
      </div>

      <Switch>
        {showQuickStick && <Route path="/" component={QuickStick} />}
      </Switch>
    </Router>
  );
}

export default SettingsPage;
