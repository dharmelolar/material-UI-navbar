import React, {useState} from 'react';
import {Stack,  IconButton, Grid, Tooltip} from '@mui/material';
import { TextField, InputAdornment} from '@mui/material';
import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';




function ManualQS() {
    const [data, setData] = useState([
      ['Path ID', '', '', '', ''],
      ['Position(mm)', 'Data 1', 'Data 2', 'Data 3', 'Data 4'],
      ['Station ID', 'Data 5', 'Data 6', 'Data 7', 'Data 8'],
      ['Bot Number', 'Data 9', 'Data 10', 'Data 11', 'Data 12'],
      ['Mover ID', '', '', '', ''],
    ]);
  
    const handleChange = (e, row, col) => {
      const newData = [...data];
      newData[row][col] = e.target.value;
      setData(newData);
    };


  return (
    <Grid container className='App' justifyContent="center" alignItems="center">

      {/* --------------------------Block -1------------------------------------------------------------------- */}
      <Grid item xs={12} sm={6} lg={3}>
      <Box className="column" style={{ textAlign: "center"}}>
        
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
          InputProps={{readOnly: true, sx: { backgroundColor: '#f0f0f0' }}}/>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField variant="outlined" label="Path State" size="small" defaultValue="NaN" style={{ width: 150 }}
          InputProps={{readOnly: true, sx: { backgroundColor: '#f0f0f0' }}}/>

          <TextField variant="outlined" label="Path Movement Status" size="small" defaultValue="NaN" style={{ width: 150 }}
          InputProps={{readOnly: true, sx: { backgroundColor: '#f0f0f0' }}}/>
        </Stack>

        <Stack direction="row" paddingTop={1.5} spacing={0.5}>
          <TextField variant="outlined" label="Upstream link status" size="small" defaultValue="NaN" style={{ width: 150 }}
          InputProps={{readOnly: true, sx: { backgroundColor: '#f0f0f0' }}}/>
        </Stack>

        
      </Box>
      </Grid>


  {/* ------------------Block - 2 (Table)--------------------------------------------------- */}
  <Grid item xs={12} sm={6} lg={3}>
      <Box className="column" style={{ textAlign: "center" }} minHeight={428}>
          

        <Stack direction="row" spacing={0.5} padding={1}>

            <IconButton><Tooltip  title="Move"><GpsFixedIcon/></Tooltip></IconButton>
            <IconButton><Tooltip title="Startup"><PlayCircleFilledIcon/></Tooltip></IconButton>
            <IconButton><Tooltip title="Suspend"><StopCircleIcon/></Tooltip></IconButton>
            <IconButton><Tooltip title="Reset Target Path"><FiberManualRecordIcon/></Tooltip></IconButton>
            <IconButton><Tooltip title="Move"><FiberManualRecordIcon/></Tooltip></IconButton>
            <IconButton><Tooltip title="Move"><FiberManualRecordIcon/></Tooltip></IconButton>
            <IconButton><Tooltip title="Stop"><StopCircleIcon/></Tooltip></IconButton>
            
            
        </Stack>
        <Stack direction="row" padding={1} spacing={1}>

            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th><strong>Mover ID</strong></th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>
                          {i === 4 && j !== 0 ? (
                            <input type="text" value={cell} onChange={(e) => handleChange(e, i, j)} />
                          ) : (
                            <input type="text" value={cell} readOnly />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
                
            
        </Stack>
        <Stack direction="row" spacing={1} padding={1}>
            <IconButton><Tooltip title="Reset Target Path"><FiberManualRecordIcon/></Tooltip></IconButton>
            <IconButton><Tooltip title="Move"><FiberManualRecordIcon/></Tooltip></IconButton>
            
            
        </Stack>
        <Stack direction="row" padding={1} spacing={1}></Stack>

        
      </Box>
      </Grid>
    </Grid>
  );
}

export default ManualQS;