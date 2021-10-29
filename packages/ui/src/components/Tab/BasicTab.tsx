import { useState, SyntheticEvent, useEffect } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { PostTypes } from 'sparrow-connected-shared'
import { TabPanel } from './TabPanel'
import { EnhancedTable } from '../Table/Table'
import usePostStore from '../../stores/usePostStore'
import { headCells } from '../../utils/tableHead'
import { PostForm } from '../PostForm/PostForm'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export const BasicTab = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  /* eslint-disable no-console */
  console.log('TEST WM')
  const tabMenuItems = ['Posts', 'Compliance Posts', 'New Post']
  const { posts, fetch: getPost } = usePostStore()

  useEffect(() => {
    getPost()
  }, [])

  console.log('Post', posts)
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabMenuItems.map((option, index) => {
            return <Tab key={index} label={option} {...a11yProps(index)} />
          })}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>Filter</p>
        <EnhancedTable rows={posts} headCells={headCells}></EnhancedTable>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>Filter compliance</p>
        <EnhancedTable
          rows={posts.filter((x) => x.postType === PostTypes.compliance)}
          headCells={headCells}></EnhancedTable>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PostForm></PostForm>
      </TabPanel>
    </Box>
  )
}
