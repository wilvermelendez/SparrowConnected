import * as React from 'react'
import { Box, CircularProgress, Typography, Modal } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  p: 4,
  opacity: 0.5
}

export const ModalLoading = ({ createLoading }) => {
  return (
    <div>
      <Modal
        open={createLoading}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              alignContent: 'center'
            }}>
            <CircularProgress />
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
