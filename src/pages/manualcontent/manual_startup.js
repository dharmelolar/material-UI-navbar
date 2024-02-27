import React, { useState } from 'react';
import {Stack,Button, Grid} from '@mui/material';
import { Typography} from '@mui/material';
import Box from '@mui/material/Box';


export default function Manual_setup() {

  const [enabled] = useState(false);

  





  return (
    <Grid container className='App' justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6} lg={3}>
      <Box className="column" style={{ textAlign: "center" }}>
      <h2>Lift</h2>
        <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            RHS
            <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'disabled'}`}>
                {enabled ? 'Enabled' : 'Disable'}
            </Typography>

            <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'disabled'}`}>
                {enabled ? 'Enabled' : 'Disable'}
            </Typography>
            Mode
            <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'disabled'}`}>
                {enabled ? 'Enabled' : 'Disable'}
            </Typography>
        </Stack>

        <Stack direction="row" paddingTop={0.5} spacing={0.5}>
            LHS
            <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'disabled'}`}>
                {enabled ? 'Enabled' : 'Disable'}
            </Typography>

            <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'disabled'}`}>
                {enabled ? 'Enabled' : 'Disable'}
            </Typography>
            Mode
            <Typography variant="body1" className={`typography ${enabled ? 'enabled' : 'disabled'}`}>
                {enabled ? 'Enabled' : 'Disable'}
            </Typography>
      

        </Stack>

      
          
      </Box>
      </Grid>
Requirement of the page?
    </Grid>
  );
}
