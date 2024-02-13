import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {Home, ArrowBackIos} from '@material-ui/icons';
import { DarkMode } from '@mui/icons-material';


function MyBottomNavigation() {
  
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="Back" icon={<ArrowBackIos/>}/>
      <BottomNavigationAction label="Home" icon={<Home/>}/>
      <BottomNavigationAction label="Dark mode" icon={<DarkMode/>}/>
    </BottomNavigation>
  );
}

export default MyBottomNavigation;