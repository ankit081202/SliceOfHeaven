import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useDispatch,useSelector} from 'react-redux';
function NavBar() {
  const cartstate = useSelector(state => state.cartReducer);
  function logout(){
    localStorage.clear();   
    window.location.href='/login'
  }
  return (
    <Navbar className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand href="/">SLICE OF HEAVEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav> 
          <Nav>
            <Nav.Link className="navlinks" onClick={logout}>Logout</Nav.Link>
            <Nav.Link className="navlinks" eventKey={2} href="/cart">Cart {cartstate.cartItems.length}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;