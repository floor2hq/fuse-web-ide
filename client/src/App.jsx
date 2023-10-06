import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import EditorPage from './pages/EditorPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/editor/:roomId' element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
