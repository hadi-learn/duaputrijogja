import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import products from '../products/products';
import logo from '../assets/images/background/dua putri logo.png'

function MyNavbar() {
  return (
    <section className='sticky-top'>
      <Container fluid>
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <span><img height='30px' width='30px' src={logo} alt='dua putri jogja-logo'></img></span><span className='brand-name'>Dua Putri Jogja</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto text-center">
              <NavDropdown title="Produk" id="collasible-nav-dropdown">
                  {products.map(product => (
                    <NavDropdown.Item key={product.id} href={`#product/${product.id}`}>{product.heading}</NavDropdown.Item>
                  ))}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#product/3.4">
                    Produk Lainnya
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#about">Tentang Kami</Nav.Link>
                <Nav.Link href="#latest">Produk Terbaru</Nav.Link>
                <Nav.Link href="#contact">Hubungi Kami</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </section>
  );
}

export default MyNavbar;