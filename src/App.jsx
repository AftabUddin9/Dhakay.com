import { BrowserRouter } from 'react-router-dom'
import MainComponent from './components/MainComponent.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </>
  )
}

export default App
