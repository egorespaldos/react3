import Mtodos from "../components/main/Mtodos"


const Todos = ({carrito, setCarrito}) => {
  return (
    <>
    <h1 className="text-center text-black py-3">Todos</h1>
    <Mtodos carrito={carrito} setCarrito={setCarrito}/>
    </>
 

  )
}

export default Todos