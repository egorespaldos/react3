import Mmovil from "../components/main/Mmovil"


const Movil = ({carrito, setCarrito}) => {
  return (
    <>
    <h1 className="text-center  text-black py-3">Moviles</h1>
    <Mmovil carrito={carrito} setCarrito={setCarrito}/>
    </>
  )
}

export default Movil