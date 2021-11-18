import React from "react";
import Navbar from "react-bootstrap";

const Navbar  =  () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Crud Cafe</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Extra</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}


export default Navigation; 