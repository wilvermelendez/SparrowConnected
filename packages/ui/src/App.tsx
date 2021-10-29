import './App.css'
import { Container, Typography } from '@mui/material'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PortalNavBar } from './components/PortalNavBar/PortalNavBar'
import { PostForm } from './components/PostForm/PostForm'
import { Posts } from './pages/Posts'
import { Compliances } from './pages/Compliances'

const Users = () => (
  <Typography variant="h3" component="h1">
    User Page
  </Typography>
)
const Authors = () => (
  <Typography variant="h3" component="h1">
    Authors Page
  </Typography>
)
const Analytics = () => (
  <Typography variant="h3" component="h1">
    Analytics Page
  </Typography>
)
function App() {
  return (
    <BrowserRouter>
      <Container>
        <PortalNavBar />
        <main>
          <Container maxWidth="lg">
            <Switch>
              <Route path="/" exact component={Posts} />
              <Route path="/post" component={PostForm} />
              <Route path="/compliance" component={Compliances} />
              <Route path="/users" component={Users} />
              <Route path="/authors" component={Authors} />
              <Route path="/analytics" component={Analytics} />
            </Switch>
          </Container>
        </main>

        {/* <HeaderBar />
      <BasicTab></BasicTab> */}
      </Container>
    </BrowserRouter>
  )
}

export default App
