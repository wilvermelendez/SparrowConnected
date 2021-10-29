import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'

import { EnhancedTable } from '../components/EnhancedTable/EnhancedTable'
import usePostStore from '../stores/usePostStore'
import { headCells } from '../utils/tableHead'
import { PostTypes } from 'sparrow-connected-shared'

export const Compliances = () => {
  const { posts, fetch: getPost } = usePostStore()

  useEffect(() => {
    getPost()
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <p>Filter</p>
      <EnhancedTable
        rows={posts.filter((p) => p.postType === PostTypes.compliance)}
        headCells={headCells}
        tableTitle="Compliances"></EnhancedTable>
    </Box>
  )
}
