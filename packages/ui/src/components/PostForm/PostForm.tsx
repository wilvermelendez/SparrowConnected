import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { MenuItem } from '@mui/material'
import { PostTypes } from 'sparrow-connected-shared'
import { FullWidthTextField } from '../SharedComponents/FullWidthTextField/FullWidthTextField'

export const PostForm = () => {
  const [title, setTitle] = useState()
  const [postType, setPostType] = useState(PostTypes.standard.toString())

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostType(event.target.value)
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off">
      <div>
        <FullWidthTextField label="fullWidth"></FullWidthTextField>
      </div>
      <div>
        <TextField
          id="standard-multiline-static"
          label="Summary"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
        <TextField value={title} required label="Title" variant="standard" />
        <TextField value={title} required label="Title" variant="standard" />
        <TextField
          id="standard-select-currency"
          select
          label="Type"
          value={postType}
          onChange={handleChange}
          helperText="Please select your post type"
          variant="standard">
          {Object.values(PostTypes).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  )
}
