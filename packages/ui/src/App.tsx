import './App.css'
import { Container } from '@mui/material'
import { BasicTab } from './components/Tab/BasicTab'
import { HeaderBar } from './components/HeaderBar/HeaderBar'

function App() {
  return (
    <Container>
      <HeaderBar />
      <BasicTab></BasicTab>
    </Container>
  )
}

export default App
