import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/index.css'
import Home from './pages/home'
import Mensajes from './pages/mensajes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Mensajes' element={<Mensajes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
