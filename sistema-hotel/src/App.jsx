import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Reserva from './pages/Reservas'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App