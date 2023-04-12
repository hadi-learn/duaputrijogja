import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer text-white">
      <Container>
        <Row>
          <Col xs={12} md={4} className='text-center'>
            <h4>Dua Putri Jogja</h4>
            <ul className="list-unstyled">
              <li>Tentang</li>
              <li>Jobs</li>
              <li>Press</li>
            </ul>
          </Col>
          <Col xs={12} md={4} className='text-center'>
            <h4>Products</h4>
            <ul className="list-unstyled">
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
              <li>Product 4</li>
              <li>Product 5</li>
              <li>Product 6</li>
            </ul>
          </Col>
          <Col xs={12} md={4} className='footer-social-icons text-center'>
            <h4>Follow Us</h4>
            <ul className='p-0'>
              <li>
                <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer