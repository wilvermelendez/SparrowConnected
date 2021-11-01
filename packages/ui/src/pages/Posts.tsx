import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'

import { EnhancedTable } from '../components/EnhancedTable/EnhancedTable'
import usePostStore from '../stores/usePostStore'
import { headCells } from '../utils/tableHead'
import { Filters } from '../components/Filters/Filters'

export const Posts = () => {
  const { posts, fetch: getPost } = usePostStore()
  const [filteredPosts, setFilteredPosts] = useState([])
  const [authors, setAuthors] = useState([])
  const [authorFilter, setAuthorFilter] = useState()
  const [typeFilter, setTypeFilter] = useState()

  useEffect(() => {
    getPost()
  }, [getPost])

  useEffect(() => {
    const authors = new Set<string>()
    posts.forEach((post) => {
      authors.add(post.author)
    })
    setAuthors(Array.from(authors))
    setFilteredPosts(posts)
  }, [posts])

  useEffect(() => {
    setFilteredPosts(posts)

    if (authorFilter && !typeFilter) {
      console.log('filteredPosts', posts, filteredPosts)
      console.log('authorFilter', authorFilter)
      setFilteredPosts(posts.filter((p) => p.author === authorFilter))
    }

    if (typeFilter && !authorFilter) {
      console.log('filteredPosts 1', filteredPosts)
      console.log('typeFilter', typeFilter)
      setFilteredPosts(posts.filter((p) => p.postType === typeFilter))
    }

    if (typeFilter && authorFilter) {
      console.log('filteredPosts 1', filteredPosts)
      console.log('typeFilter', typeFilter)
      setFilteredPosts(posts.filter((p) => p.author === authorFilter && p.postType === typeFilter))
    }
  }, [posts, authorFilter, typeFilter])

  return (
    <Box sx={{ width: '100%' }}>
      <Filters authors={authors} setTypeFilter={setTypeFilter} setAuthorFilter={setAuthorFilter} />
      <EnhancedTable tableTitle="Posts" rows={filteredPosts} headCells={headCells}></EnhancedTable>
    </Box>
  )
}
