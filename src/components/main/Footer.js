import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer text-white">
      <Container>
        <Row>
          <Col xs={12} md={6} className='footer-about text-center'>
            <h4>Dua Putri Jogja</h4>
            <ul className="list-unstyled">
              <li><a href='/tentang'>Tentang</a></li>
              <li><a href='/produk'>Produk</a></li>
              <li><a href='/kemitraan'>Kemitraan</a></li>
            </ul>
          </Col>
          <Col xs={12} md={6} className='footer-social-icons text-center'>
            <h4>Follow Us</h4>
            <ul>
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