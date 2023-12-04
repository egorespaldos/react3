import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Movil from './pages/Movil'
import Laptop from './pages/Laptop'
import Todos from './pages/Todos'
import Tienda from './pages/Tienda'
import { useState } from 'react'

function App() {
  console.log();
  const [carrito, setCarrito] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Header carrito={carrito} setCarrito={setCarrito}/>
        <Routes>
            <Route path="/" element={<Inicio/>} />

            <Route path="/Inicio" element={<Inicio/>} />
            <Route path="/Movil" element={<Movil carrito={carrito} setCarrito={setCarrito}/>} />
            <Route path="/Laptop" element={<Laptop carrito={carrito} setCarrito={setCarrito}/>} />
            <Route path="/Tienda" element={<Tienda carrito={carrito} setCarrito={setCarrito}/>} />
            <Route path="/Todos" element={<Todos carrito={carrito} setCarrito={setCarrito}/>} />

            <Route path="*" element={<Inicio/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
