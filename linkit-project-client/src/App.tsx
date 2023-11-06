import './App.css'
import { Route, Routes } from 'react-router-dom'


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
