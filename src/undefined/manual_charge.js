import React, { useState } from 'react';
import {Stack, Grid} from '@mui/material';
import { Typography, TextField, Fab} from '@mui/material';
import Box from '@mui/material/Box';


export default function Manual_charge() {

  const [enabled] = useState(false);

  





  return (
    <Grid container className='App' justifyContent="center" alignItems="right">


      {/* ---------------------------------Box-1------------------------------------------------------ */}
      <Grid item xs={12} sm={6} lg={3}>
      <Box className="column" style={{ textAlign: "left" }}>


        <Stack direction="row" paddingTop={0.2} spacing={0.3}>

        <h4 style={{ whiteSpace: 'nowrap', margin: '0' }}>Bot ID</h4>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
        </Stack>

        <Stack direction="row" paddingTop={0.2} spacing={0.3}>
          <h4>Mover ID</h4>
          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>
        </Stack>

        <Stack direction="row" paddingTop={0.2} spacing={0.3}>
          <h4>Current Station ID</h4>
          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>
        </Stack>


        
        <Box className="column" style={{ textAlign: "left" }}>
        <h4>Actual Data</h4>
        <Stack direction="row" paddingTop={0.2} spacing={0.3}>
          
        <h4>Voltage (V)</h4>
          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>
        </Stack>

        <Stack direction="row" paddingTop={0.2} spacing={0.3}>
      
        <h4>Charge Level (%)</h4>
          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>

          <TextField variant="outlined" size="small" style={{ width: 80 }}
          InputProps={{ readOnly: true, sx: { backgroundColor: '#f0f0f0' } }}/>
        </Stack>
        </Box>


        <Box className="column" style={{ textAlign: "left" }}>
        <h4>Threashold</h4>
        <Stack direction="row" paddingTop={0.2} spacing={0.3}>
        <h4>Min (%)</h4>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
        </Stack>

        <Stack direction="row" paddingTop={0.2} spacing={0.3}>
        <h4>Max (%)</h4>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
        </Stack>

        <Stack direction="row" paddingTop={0.2} spacing={0.3}>
        <h4>SCL (%)</h4>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
          <TextField variant="outlined" size="small" style={{ width: 80 }}/>
        </Stack>
      </Box>
      </Box>
      </Grid>

      {/* ------------------------------------------------------------------------------------------- */}

      <Grid item xs={12} sm={6} lg={3}>
      <Box className="column" style={{ textAlign: "center" }} sx={{ minHeight: 362}}>
        <h2>Send to Charge Level</h2>
        <Stack direction="row" paddingTop={2} spacing={1.5}>

           <Typography width="110px" variant="body1" className={`typography ${enabled ? 'disabled' : 'enabled'}`} sx={{ fontSize: 'small' }}>
               {enabled ? 'Bot not Station' : 'Bot at Station'}
            </Typography>
            <Fab variant="contained"  size='small' color="inherit">1</Fab>
            <Fab variant="contained"  size='small' color="inherit">2</Fab>
            <Fab variant="contained"  size='small' color="inherit">3</Fab>
    
            
              
        </Stack>

        <Stack direction="row" paddingTop={2} spacing={1.5}>

            <Typography width="110px" variant="body1" className={`typography ${enabled ? 'disabled' : 'enabled'}`} sx={{ fontSize: 'small' }}>
                {enabled ? 'Bot not Station' : 'Bot at Station'}
            </Typography>
            <Fab variant="contained"  size='small' color="inherit">1</Fab>
            <Fab variant="contained"  size='small' color="inherit">2</Fab>
            <Fab variant="contained"  size='small' color="inherit">3</Fab>

            
              
        </Stack>

        <Stack direction="row" paddingTop={2} spacing={1.5}>

           <Typography width="110px" variant="body1" className={`typography ${enabled ? 'disabled' : 'enabled'}`} sx={{ fontSize: 'small' }}>
               {enabled ? 'Bot not Station' : 'Bot at Station'}
            </Typography>
            <Fab variant="contained"  size='small' color="inherit">1</Fab>
            <Fab variant="contained"  size='small' color="inherit">2</Fab>
            <Fab variant="contained"  size='small' color="inherit">3</Fab>
       
        </Stack>

        <Stack direction="row"paddingTop={2} spacing={1.5}>

           <Typography width="110px" variant="body1" className={`typography ${enabled ? 'disabled' : 'enabled'}`} sx={{ fontSize: 'small' }}>
               {enabled ? 'Bot not Station' : 'Bot at Station'}
            </Typography>
            <Fab variant="contained"  size='small' color="inherit">1</Fab>
            <Fab variant="contained"  size='small' color="inherit">2</Fab>
            <Fab variant="contained"  size='small' color="inherit">3</Fab>
      
            
              
        </Stack>

      </Box>
      </Grid>
    </Grid>
  );
}
