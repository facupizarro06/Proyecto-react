import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">

        <Container>
          <Navbar.Brand to="/"> <Logo /> </Navbar.Brand>
          <Nav className="me-auto">
            <link to="/" className='pestaña'>Home</link>

            <link to="/category/monitores" className='pestaña'>Monitores</link>

            <link to="/category/teclados" className='pestaña'>Teclados</link>
            <link to="/category/auriculares" className='pestaña'>Auriculares</link>
          </Nav>
          <link to="/cart"> <cartWidget/></link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;