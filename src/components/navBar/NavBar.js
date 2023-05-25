
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Icono de la tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/products">Ofertas</Nav.Link>
            <Nav.Link href="/login">Iniciar sesion</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/products">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="">Pantalones</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Camperas</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Buzos</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Camisas</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Gorras</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Calzado</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action10">asd</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="button" variant="outline-success">
              Buscar
            </Button>
          </Form> */}
          <Nav.Link href="/shoppingCart">Carrito</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
