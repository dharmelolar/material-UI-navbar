import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




function Demo() {
  return (
      <div style={{ textAlign: "center" }}>
        <br/>
        <Stack paddingTop={2} alignItems="center" variant='outlined' justifyContent="center" paddingRight={60}>Status</Stack>
        <Stack direction="row" paddingTop={2} spacing={2} alignItems="center" justifyContent="center" paddingRight={60}>
          <Button variant="contained" color="success">Enable</Button>
          <Button variant="contained" color="success">At Home</Button>
          <Button variant="contained" color="error">Faults</Button>  
        </Stack>
      </div>
  );
}
export default Demo;