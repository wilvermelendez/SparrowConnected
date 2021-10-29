import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'

export const HeaderBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            POST
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
