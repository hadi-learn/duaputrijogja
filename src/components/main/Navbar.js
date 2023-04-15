import { useEffect, useRef, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import products from '../../products/products'
import logo from '../../assets/images/background/dua putri logo.png'
import brandName from '../../assets/images/background/Dua Putri Jogja Brand-transparent-white.svg'

function MyNavbar({ heroHeight }) {

  const scrollYRef = useRef(0);

  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY
      setScrollHeight(scrollYRef.current)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [heroHeight, scrollHeight])

  let activeClass = ''

  if (scrollHeight > heroHeight) {
    activeClass = 'active'
  } else {
    activeClass = ''
  }

  return (
    <section className='sticky-top'>
      <Container fluid>
        <Navbar collapseOnSelect expand="md" variant="dark" className={activeClass}>
          <Container>
            <Navbar.Brand href="/">
              <span><img className='logo' height='30px' width='30px' src={logo} alt='dua putri jogja-logo'></img></span><img height='40px' width='200px' src={brandName} alt='dua putri jogja brand name'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto text-center">
              <NavDropdown title="Produk" id="collasible-nav-dropdown">
                  {products.map(product => (
                    <NavDropdown.Item key={product.id} href={`/produk/${product.id}`}>{product.heading}</NavDropdown.Item>
                  ))}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#product/3.4">
                    Produk Lainnya
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/tentang">Tentang Kami</Nav.Link>
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