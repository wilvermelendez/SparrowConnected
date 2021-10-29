import AllInboxIcon from '@mui/icons-material/AllInbox'
import GavelIcon from '@mui/icons-material/Gavel'
import PostAddIcon from '@mui/icons-material/PostAdd'
import PeopleIcon from '@mui/icons-material/People'
import CreateIcon from '@mui/icons-material/Create'
import TimelineIcon from '@mui/icons-material/Timeline'
import { Routes } from '../../interfaces/Routes'
import React from 'react'
const Home: React.FC = () => {
  return <h1>Home</h1>
}

export const routesPosts: Routes[] = [
  {
    path: '/',
    sidebarName: 'Post',
    itemIcon: <AllInboxIcon />
  },
  {
    path: '/compliance',
    sidebarName: 'Compliance post',
    itemIcon: <GavelIcon />
  },
  {
    path: '/post',
    sidebarName: 'New Post',
    itemIcon: <PostAddIcon />
  }
]

export const routesAdmin: Routes[] = [
  {
    path: '/users',
    sidebarName: 'Users',
    itemIcon: <PeopleIcon />
  },
  {
    path: '/authors',
    sidebarName: 'Authors',
    itemIcon: <CreateIcon />
  },
  {
    path: '/analytics',
    sidebarName: 'Analytics',
    itemIcon: <TimelineIcon />
  }
]
