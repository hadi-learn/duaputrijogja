import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import products from '../products/products';

function MyNavbar() {
  return (
    <div className='sticky-top'>
      <Container fluid>
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className='fw-bold fs-5'>
              Dua Putri Jogja
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto text-center">
                <Nav.Link href="#layanan">Layanan</Nav.Link>
                <Nav.Link href="#produkterbaru">Produk Terbaru</Nav.Link>
                <Nav.Link href="#hubungikami">Hubungi Kami</Nav.Link>
                <NavDropdown title="Produk" id="collasible-nav-dropdown">
                  {products.map(product => (
                    <NavDropdown.Item href={`#product/${product.id}`}>{product.heading}</NavDropdown.Item>
                  ))}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#product/3.4">
                    Produk Lainnya
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default MyNavbar;