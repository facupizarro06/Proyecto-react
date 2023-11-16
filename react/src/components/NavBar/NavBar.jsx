import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        
        { <Container>
          <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Consolas</Nav.Link>
            <Nav.Link href="#features">Juegos</Nav.Link>
            <Nav.Link href="#pricing">Mandos</Nav.Link>
            <Nav.Link href="#pricing"> <CartWidget/> </Nav.Link>
          </Nav>
        </Container> }
      </Navbar>
      </div>
  );
}

export default NavBar;