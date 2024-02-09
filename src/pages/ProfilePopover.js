import React from 'react';
import { Popover, List, ListItem, ListItemText } from "@material-ui/core";

function ProfilePopover({ open, anchorEl, onClose }) {
  const id = open ? 'simple-popover' : undefined;

  return (
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
        <ListItem button>
          <ListItemText primary="Profile Settings" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="User Info" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Popover>
  );
}

export default ProfilePopover;
