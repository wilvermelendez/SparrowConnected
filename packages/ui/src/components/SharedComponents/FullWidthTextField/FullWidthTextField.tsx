import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export const FullWidthTextField = (props) => {
  return (
    <Box
      sx={{
        width: 800,
        maxWidth: '100%'
      }}>
      <TextField {...props} fullWidth id="fullWidth" />
    </Box>
  )
}
