import { Box, Typography, Autocomplete, Button, TextField, Grid, Stack } from '@mui/material'
import { useState } from 'react'
import { PostTypes } from 'sparrow-connected-shared'
import { ModalLoading } from '../components/ModalLoading/ModalLoading'
import { PostFormButtons } from '../components/PostForm/PostFormButtons'
import { CreatePosts } from '../services/postService'

export const PostForm = () => {
  const [createLoading, setCreateLoading] = useState(null)
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [topics, setTopics] = useState([])
  const [postType, setPostType] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSummaryChange = (event) => {
    setSummary(event.target.value)
  }
  const handleBodyChange = (event) => {
    setBody(event.target.value)
  }
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }
  const handleTopicsChange = (event, value) => {
    setTopics(value)
  }
  const handleTypeChange = (event, value) => {
    setPostType(value)
  }

  const cleanForm = () => {
    setCreateLoading(null)
    setTitle('')
    setSummary('')
    setBody('')
    setAuthor('')
    setTopics([])
    setPostType('')
  }
  const validateForm = () => {
    if (!title || !summary || !body || !author || !topics || !postType) {
      return false
    }
    return true
  }
  const createPost = async () => {
    try {
      if (!validateForm()) {
        return
      }
      setCreateLoading(true)
      const post = {
        title: title,
        summary: summary,
        body: body,
        publishedUser: { name: 'Default', lastName: 'User' },
        author: author,
        topics: topics,
        postType: postType
      }
      await CreatePosts(post)
      cleanForm()
    } catch (error) {
      console.log(error)
    }
    setCreateLoading(false)
  }
  return (
    <form>
      <ModalLoading createLoading={createLoading} />
      <Grid container spacing={2} paddingBottom={10}>
        <Grid item xs={12} sm={12} md={12}>
          <Stack spacing={2}>
            <TextField
              id="outlined-basic"
              required
              error={!title}
              value={title}
              onChange={handleTitleChange}
              label="Title"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              value={summary}
              error={!summary}
              multiline
              onChange={handleSummaryChange}
              maxRows={2}
              rows={2}
              label="Sumarry"
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              value={body}
              error={!body}
              multiline
              maxRows={25}
              rows={15}
              onChange={handleBodyChange}
              label="Body"
              variant="outlined"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <Stack>
            <TextField
              id="outlined-basic"
              onChange={handleAuthorChange}
              value={author}
              error={!author}
              label="Author"
              variant="outlined"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Autocomplete
            value={topics}
            multiple
            limitTags={4}
            id="multiple-limit-tags"
            onChange={handleTopicsChange}
            options={['New', 'Politics', 'Social', 'Family']}
            getOptionLabel={(option) => option}
            renderInput={(params) => <TextField {...params} label="Topics" placeholder="Topics" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Autocomplete
            id="free-solo-demo"
            value={postType}
            freeSolo
            onChange={handleTypeChange}
            options={Object.values(PostTypes).map((option) => option)}
            renderInput={(params) => <TextField {...params} label="Type" />}
          />
        </Grid>
      </Grid>
      <PostFormButtons createPost={createPost} />
    </form>
  )
}
