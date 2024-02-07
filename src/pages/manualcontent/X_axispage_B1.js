import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SelectionButton from '../../component/selectionbutton';




function axisPage_B1() {
  return (
      <div style={{ textAlign: "center" }}>
        <br/>
        <SelectionButton/>
        <Stack paddingTop={2} alignItems="center" variant='outlined' justifyContent="center" paddingRight={60}>Status</Stack>
        <Stack direction="row" paddingTop={2} spacing={2} alignItems="center" justifyContent="center" paddingRight={60}>
          <Button variant="contained" color="success">Enable</Button>
          <Button variant="contained" color="success">At Home</Button>
          <Button variant="contained" color="error">Faults</Button>  
        </Stack>

        <Stack direction="row" paddingTop={2} spacing={2} alignItems="center" justifyContent="center" paddingRight={60}>
        <TextField
            variant="outlined"
            label="Actual Velocity"
            size="small"
            defaultValue="NaN"
            style={{ width: 150 }}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">mm/s</InputAdornment>,
            }}
          />

          <TextField
            variant="outlined"
            label="Actual Position"
            size="small" 
            defaultValue="NaN"
            style={{ width: 140 }}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">mm</InputAdornment>,
            }}
          />  
        </Stack>

        <Stack direction="row" paddingTop={2} spacing={2} alignItems="center" justifyContent="center" paddingRight={60}>
          <TextField
            variant="outlined"
            label="Actual Current"
            size="small" // Set custom size as per your requirement
            defaultValue="NaN"
            style={{ width: 145 }}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">A</InputAdornment>,
            }}
          />

          <TextField
            variant="outlined"
            label="Actual Torque"
            size="small" // Set custom size as per your requirement
            defaultValue="NaN"
            style={{ width: 145 }}
            InputProps={{
              readOnly: true,
              endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
            }}
          />  
        </Stack>

        <Stack direction="row" paddingTop={2} spacing={2} alignItems="center" justifyContent="center" paddingRight={60}>
        <TextField size='small' id="outlined-basic" label="Enter Actual Torque" variant="outlined" style={{ width: 310 }}
        InputProps={{
          endAdornment: <InputAdornment position="end">Nm</InputAdornment>,
        }} />
        </Stack>
        

        <Stack direction="row" paddingTop={1.5} spacing={2.9} alignItems="center" justifyContent="center" paddingRight={60}>
          <Button variant="contained" color="inherit">Enable</Button>
          <Button variant="contained" color="inherit">Disable</Button>
          <Button variant="contained" color="inherit">Reset</Button>
          </Stack>
      </div>
  );
}
export default axisPage_B1;