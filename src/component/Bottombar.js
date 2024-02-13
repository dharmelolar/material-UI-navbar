import React, {useState} from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import { Home, ArrowBackIos } from '@material-ui/icons';
import { DarkMode, LightMode } from '@mui/icons-material';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function MyBottomNavigation() {
  const history = useHistory(); // Get the history object from react-router-dom
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Function to handle 'Back' button click
  const handleBackClick = () => {
    history.goBack(); // Go back to the previous page
  };

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode state
  };
  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light', // Set the palette type based on dark mode state
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Back" icon={<ArrowBackIos />} onClick={handleBackClick} />
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction
          label={isDarkMode ? "Light Mode" : "Dark Mode"}
          icon={isDarkMode ? <LightMode /> : <DarkMode />}
          onClick={handleDarkModeClick}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default MyBottomNavigation;
