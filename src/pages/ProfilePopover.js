import React, { useState } from 'react';
import { Popover, List, ListItem, ListItemText } from "@material-ui/core";

function ProfilePopover({ open, anchorEl, onClose }) {
  const [profileSettingsPopoverOpen, setProfileSettingsPopoverOpen] = useState(false);
  const id = open ? 'simple-popover' : undefined;
  const profileSettingsId = profileSettingsPopoverOpen ? 'profile-settings-popover' : undefined;

  const handleProfileSettingsClick = () => {
    setProfileSettingsPopoverOpen(!profileSettingsPopoverOpen);
  };

  return (
    <React.Fragment>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List>
          <ListItem button onClick={handleProfileSettingsClick}>
            <ListItemText primary="Profile Settings"/>
          </ListItem>
          <ListItem button>
            <ListItemText primary="User Info" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Popover>
      
      <Popover
        id={profileSettingsId}
        open={profileSettingsPopoverOpen}
        onClose={handleProfileSettingsClick}
        anchorReference="anchorPosition"
        anchorPosition={{ top: '50%', left: '50%' }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        {/* Content of the second popover */}
        {/* Add your content here */}
      </Popover>
    </React.Fragment>
  );
}

export default ProfilePopover;
