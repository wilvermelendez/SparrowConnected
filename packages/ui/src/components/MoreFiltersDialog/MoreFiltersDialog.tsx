import { useState } from 'react'
import {
  Autocomplete,
  Button,
  TextField,
  Grid,
  Stack,
  DialogTitle,
  Dialog,
  DialogContent
} from '@mui/material'
import { PostTypes } from 'sparrow-connected-shared'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
export const MoreFiltersDialog = ({ authors, setTitleFilter, setTopicsFilter }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Date | null>(null)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleTitleChange = (events, value) => {
    setTitleFilter(value)
  }
  const handleTopicChange = (events, value) => {
    setTopicsFilter(value)
  }

  return (
    <div>
      <Stack>
        <Button variant="outlined" onClick={handleClickOpen}>
          More Filters
        </Button>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{'More filters'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={authors}
                onChange={handleTitleChange}
                renderInput={(params) => <TextField {...params} label="Title" />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                onChange={handleTopicChange}
                options={Object.values(PostTypes).map((option) => option)}
                renderInput={(params) => <TextField {...params} label="Topic" />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="From"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="To"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Stack>
                <Button variant="outlined" onClick={handleClose}>
                  Apply Filters
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}></Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}
