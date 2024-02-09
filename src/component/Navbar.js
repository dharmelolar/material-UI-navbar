import React, { useState, useEffect } from "react";
import HomeIcon from "@material-ui/icons/Home";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { IconButton, Tooltip, Avatar, Box } from "@material-ui/core";
import Logo from "./logo";
import ProfilePopover from "../pages/ProfilePopover";


import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    borderBottom: "1px solid transparent",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  dateTime: {
    marginLeft: "auto", // Aligns date and time to the right
    color: "white",
    fontSize: "16px",
  },
  appBar: {
    backgroundColor: "teal", // Change this to whatever color you desire for navbar
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar position="static" className={classes.appBar}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
        <img src={Logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
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
            <IconButton sx={{ p: 2 }} onClick={handleClick}>
              <Avatar alt="login" />
            </IconButton>
          </Tooltip>
          <ProfilePopover open={open} anchorEl={anchorEl} onClose={handleClose} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
