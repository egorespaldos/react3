import Mlaptop from '../components/main/Mlaptop'

const Laptop = ({carrito, setCarrito}) => {
  return (
    <>
    <h1 className="text-center text-black py-3">Portatiles</h1>
    <Mlaptop carrito={carrito} setCarrito={setCarrito}/>
    </>
  )
}

export default Laptop