// // Settingspage.js
// import React,{useState} from "react";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';


// function SettingsPage() {
//   const [] = useState(false);

//   const handleDemoClick = () => {
//     setShow(true);
//   };


//   return (
//     <div style={{ textAlign: "center" }}>
//       <br/>
//         <h>Settings</h>
//       <Stack direction="row" paddingTop={2} spacing={2} alignItems="center" justifyContent="center">
//         <Button variant="contained" color="inherit" onClick={handleDemoClick}>Loop Demo</Button>
//         <Button variant="contained" color="inherit">Fork Bot Demo</Button>
//       </Stack>
//     </div>
//   );
// }
// export default SettingsPage;






import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Demo from "./manualcontent/Demopage";

function SettingsPage() {
  const [showDemopage, setShowDemopage] = useState(false);

  const handleDemoClick = () => {
    setShowDemopage(true);
  };

  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <br />
        <h>settings</h>
        {showDemopage ? null : (
          <>
            <Stack direction="row" paddingTop={2} spacing={2} alignItems="center" justifyContent="center">
            <Button variant="contained" color="inherit" onClick={handleDemoClick}>Loop Demo</Button>
            <Button variant="contained" color="inherit">Fork Bot Demo</Button>
            </Stack>
          </>
        )}
      </div>

      {/* Define the route for the X_axispage_B1 component */}
      {showDemopage && <Route path="/Demopage" component={""} />}
    </Router>
  );
}

export default SettingsPage;

