import React, { useState } from 'react';
import {Stack,  IconButton, Grid} from '@mui/material';
import {Typography, TextField, InputAdornment} from '@mui/material';
import Box from '@mui/material/Box';
import {Home} from '@material-ui/icons';




function ManualQS() {


  return (
    <Grid container className='App' justifyContent="center" alignItems="center">

      {/* --------------------------Block -1------------------------------------------------------------------- */}
      <Grid item xs={12} sm={6} lg={3}>
      <Box className="column" style={{ textAlign: "center" }}>
        
        <Stack direction="row" paddingTop={2} spacing={0.5}>
          <TextField variant="outlined" label="Startup path ID" size="small" defaultValue="NaN" style={{ width: 150 }}/>

          <TextField variant="outlined" label="PID" size="small" defaultValue="NaN" style={{ width: 150 }}/>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField variant="outlined" label="Move Mover path ID" size="small" defaultValue="NaN" style={{ width: 150 }}/>

          <TextField variant="outlined" label="Link/Unlink Node" size="small" defaultValue="NaN" style={{ width: 150 }}/>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField variant="outlined" label="Target path ID" size="small" defaultValue="NaN" style={{ width: 150 }}/>

          <TextField variant="outlined" label="Control Path" size="small" defaultValue="NaN" style={{ width: 150 }}/>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField variant="outlined" label="Position" size="small" defaultValue="NaN" style={{ width: 150 }} 
          InputProps={{endAdornment: <InputAdornment position="end">mm</InputAdornment>}}/>

          <TextField variant="outlined" label="Peer Path" size="small" defaultValue="NaN" style={{ width: 150 }}/>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField variant="outlined" label="Velocity" size="small" defaultValue="NaN" style={{ width: 150 }}
          InputProps={{endAdornment: <InputAdornment position="end">mm/s</InputAdornment>}}/>

          <TextField variant="outlined" label="Link Mover ID" size="small" defaultValue="NaN" style={{ width: 150 }}/>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField variant="outlined" label="Acceleration" size="small" defaultValue="NaN" style={{ width: 150 }}
          InputProps={{endAdornment: <InputAdornment position="end">mm/s²</InputAdornment>}}/>

          <TextField variant="outlined" label="Downstream link status" size="small" defaultValue="NaN" style={{ width: 150 }}
          InputProps={{readOnly: true}}/>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField variant="outlined" label="Path State" size="small" defaultValue="NaN" style={{ width: 150 }}
          InputProps={{readOnly: true}}/>

          <TextField variant="outlined" label="Path Movement Status" size="small" defaultValue="NaN" style={{ width: 150 }}
          InputProps={{readOnly: true}}/>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField variant="outlined" label="Upstream link status" size="small" defaultValue="NaN" style={{ width: 150 }}
          InputProps={{readOnly: true}}/>
        </Stack>

        
      </Box>
      </Grid>


  {/* ------------------Block - 2 (Table)--------------------------------------------------- */}
  <Grid item xs={12} sm={6} lg={3}>
      <Box className="column" style={{ textAlign: "center" }}>
          

        <Stack direction="row" spacing={1}>
            <IconButton><Home/> </IconButton>

            <IconButton><Home /></IconButton>
            <IconButton><Home /></IconButton>
            <IconButton><Home /></IconButton>
            <IconButton><Home /></IconButton>
            <IconButton><Home /></IconButton>
            <IconButton><Home /></IconButton>
            
        </Stack>
      </Box>
      </Grid>
    </Grid>
  );
}

export default ManualQS;