import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import Badge from 'react-bootstrap/Badge';
import { CartFill } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

import MostrarCarrito from './MostrarCarrito';

const Header = ({carrito, setCarrito}) => {
    
    const [total, setTotal]=useState(0);
    /* PARA TRABAJAR CON LA OFFCANVAS*/
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
 
    /* ACTUALIZA EL TORTAL DEL CARRITO CON LA VARIABLE CARRTO*/
    useEffect(()=>{
        setTotal(carrito.length)
      },[carrito]);

    return (
    <>
    <div>
        <Navbar expand="lg" className="bg-black py-3" data-bs-theme="dark">
        <Container fluid>
            <img src="logo.jpg" alt="" width={100} />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Link to="/Inicio" className="nav-link">Inicio</Link>
                <Link to="/Movil" className="nav-link">Movil</Link>
                <Link to="/Laptop" className="nav-link">Laptop</Link>
                <Link to="/Todos" className="nav-link">Todos</Link>


                <NavDropdown title="Tienda" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
                <Link to="/Contatos" className="nav-link">Contactos</Link>

            </Nav>
            <button className='btn btn-info me-2'  onClick={handleShow} >  <CartFill  size={25} /> <Badge bg="secondary">{total}</Badge></button>

            
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>


    <MostrarCarrito carrito={carrito} setCarrito={setCarrito} show={show} handleClose={handleClose}  />
    </>
  )
}

export default Header