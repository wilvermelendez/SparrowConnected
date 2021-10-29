import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'

import { EnhancedTable } from '../components/EnhancedTable/EnhancedTable'
import usePostStore from '../stores/usePostStore'
import { headCells } from '../utils/tableHead'
import { PostTypes } from 'sparrow-connected-shared'

export const Posts = () => {
  const { posts, fetch: getPost } = usePostStore()

  useEffect(() => {
    getPost()
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <p>Filter</p>
      <EnhancedTable tableTitle="Posts" rows={posts} headCells={headCells}></EnhancedTable>
    </Box>
  )
}
