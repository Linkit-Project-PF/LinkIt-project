import './App.css'
import { Route, Routes } from 'react-router-dom'
import Recursos from './components/recursos/recursos'
import QuienesSomos from './components/quienesSomos/quienesSomos'


function App() {
  return (
    <>
      <Routes>
        <NavBar>La navBar XD</NavBar>
        <Route path='/' element={<Home />} />
        <Route path='/soyEmpresa' element={<SoyEmpresa />} />
        <Route path='/soyTalento' element={<SoyTalento />} />
        <Route path='/recursos' element={<Recursos />} />
        <Route path='/quienesSomos' element={<QuienesSomos />} />
      </Routes>
    </>
  )
}

export default App
