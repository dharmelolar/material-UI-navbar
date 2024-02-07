import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import manualpage from "./pages/manualpage";
import SettingsPage from "./pages/settingspage";
import './App.css'



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={""} />
        <Route exact path="/manualpage" component={manualpage} />
        <Route path="/settingspage" component={SettingsPage} />
      </Switch>
    </Router>
  );
}
export default App;
