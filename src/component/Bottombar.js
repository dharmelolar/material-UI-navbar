
import React from 'react';
import { useHistory } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, ArrowBackIos} from '@material-ui/icons';
import { DarkMode } from '@mui/icons-material';

function MyBottomNavigation() {
  const history = useHistory();

  // Function to handle the back button click
  const handleBack = () => {
    history.goBack(); // Use history.goBack() to go back one step
  };

  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction label="Back" icon={<ArrowBackIos />} onClick={handleBack} />
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Dark mode" icon={<DarkMode />} />
    </BottomNavigation>
  );
}

export default MyBottomNavigation;

