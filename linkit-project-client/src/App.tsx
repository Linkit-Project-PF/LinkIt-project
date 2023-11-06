import './App.css'
import { Route, Routes } from 'react-router-dom'
import Recursos from './components/recursos/recursos'
import QuienesSomos from './components/quienesSomos/quienesSomos'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Empresas from './components/Empresas/Empresas'
import Talentos from './components/Talentos/Talentos'

function App() {
  return (
    <>
      <Routes>
        <NavBar></NavBar>
        <Route path='/' element={<Home />} />
        <Route path='/soyEmpresa' element={<Empresas />} />
        <Route path='/soyTalento' element={<Talentos />} />
        <Route path='/recursos' element={<Recursos />} />
        <Route path='/quienesSomos' element={<QuienesSomos />} />
      </Routes>
    </>
  )
}

export default App
