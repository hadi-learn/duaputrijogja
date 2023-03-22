import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function MyNavbar() {
  return (
    <div className='mynavbar'>
      <Container fluid>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className='fw-bold fs-5'>
              Dua Putri Jogja
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Harga</Nav.Link>
                <NavDropdown title="Produk" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#product/3.1">Mie Organik 1</NavDropdown.Item>
                  <NavDropdown.Item href="#product/3.2">
                    Mie Organik 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#product/3.3">Mie Organik 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#product/3.4">
                    Produk Lainnya
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Hubungi Kami</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default MyNavbar;