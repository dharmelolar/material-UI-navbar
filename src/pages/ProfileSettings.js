import React from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ProfileSettings() {
  return (
    <div className="manual">
        <Stack direction="row" paddingTop={2} spacing={2}>
          <TextField
              variant="outlined"
              label="Current User"
              size="small"
              defaultValue="NaN"
              style={{ width: 150 }}
              InputProps={{
                readOnly: true,
              }}
            />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <Button variant="contained" color="inherit">profile</Button>
            <Button variant="contained" color="inherit">s</Button>
            <Button variant="contained" color="inherit">s</Button>
        </Stack>

    </div>
  );
}

export default ProfileSettings;
