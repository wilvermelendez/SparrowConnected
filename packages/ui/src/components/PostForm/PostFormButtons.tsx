import { Button, Grid, Box, Stack } from '@mui/material'

export const PostFormButtons = ({ createPost }) => {
  return (
    <Grid container spacing={3} paddingBottom={10}>
      <Grid item xs={12} sm={4} md={4}>
        <Button fullWidth onClick={createPost} variant="contained">
          Publish
        </Button>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Button fullWidth variant="outlined">
          Save draf
        </Button>
      </Grid>

      <Grid item xs={12} sm={4} md={4}>
        <Button fullWidth variant="outlined">
          Cancel
        </Button>
      </Grid>
    </Grid>
  )
}
