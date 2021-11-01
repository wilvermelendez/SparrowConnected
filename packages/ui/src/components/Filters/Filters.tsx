import { Autocomplete, Button, TextField, Grid } from '@mui/material'
import { PostTypes } from 'sparrow-connected-shared'
import { MoreFiltersDialog } from '../MoreFiltersDialog/MoreFiltersDialog'

export const Filters = ({
  authors,
  setTypeFilter,
  setAuthorFilter,
  setTitleFilter,
  setTopicsFilter
}) => {
  const handleAuthorChange = (events, value) => {
    setAuthorFilter(value)
  }
  const handleTypeChange = (events, value) => {
    setTypeFilter(value)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={authors}
          onChange={handleAuthorChange}
          renderInput={(params) => <TextField {...params} label="Author" />}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          onChange={handleTypeChange}
          options={Object.values(PostTypes).map((option) => option)}
          renderInput={(params) => <TextField {...params} label="Type" />}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <MoreFiltersDialog
          authors={authors}
          setTitleFilter={setTitleFilter}
          setTopicsFilter={setTopicsFilter}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}></Grid>
    </Grid>
  )
}
