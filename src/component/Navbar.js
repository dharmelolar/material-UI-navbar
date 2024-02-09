import React, { useState, useEffect } from "react";
import HomeIcon from "@material-ui/icons/Home";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { IconButton, Tooltip, Avatar, Box,} from "@material-ui/core";
import ProfilePopover from "../pages/ProfilePopover";
import CKlogo from './CKlogo.svg'


import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import MyBottomNavigation from "./Bottombar";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  // This is for navbar main content decoration
  link: {
    textDecoration: "none",
    color:'white',
    fontSize: "20px",
    marginLeft: theme.spacing(5),
  },
  dateTime: {
    marginLeft: "auto", // Aligns date and time to the right
    color: "white",
    fontSize: "16px",
  },
  appBar: {
    backgroundColor: "teal", // Navbar Color change
  },
  BottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [dateTime, setDateTime] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <div >
      <AppBar position="static" className={classes.appBar}>
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
          <img src={CKlogo} alt="Logo" style={{ height: 55, paddingTop:'10px' , marginRight: 10 }} />
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                <IconButton>
                  <HomeIcon />
                  Home
                </IconButton>
              </Link>

              <Link to="/manualpage" className={classes.link}>
                <IconButton>
                  <EngineeringIcon />
                  Manual
                </IconButton>
              </Link>

              <Link to="/" className={classes.link}>
                <IconButton>
                  <EngineeringIcon />
                  Parameter
                </IconButton>
              </Link>

              <Link to="/" className={classes.link}>
                <IconButton>
                  <EngineeringIcon />
                  Alarm
                </IconButton>
              </Link>

              <Link to="/settingspage" className={classes.link}>
                <IconButton>
                  <SettingsIcon />
                  Settings
                </IconButton>
              </Link>
            </div>
          )}
          <div className={classes.dateTime}>{dateTime.toLocaleString()}</div>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile Settings">
              <IconButton sx={{ p: 2 }} onClick={handleProfileClick}>
                <Avatar alt="login" />
              </IconButton>
            </Tooltip>
            <ProfilePopover open={open} anchorEl={anchorEl} onClose={handleProfileClose} />
          </Box>
        </Toolbar>
      </AppBar>
      </div>

      <div className={classes.BottomNav}>
        <MyBottomNavigation/>
      </div>
    </div>
  );
}
export default Navbar;
