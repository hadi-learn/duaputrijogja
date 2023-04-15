import { Container, Col, Row } from 'react-bootstrap'
import video1 from '../../assets/videos/video1.mov'

const Highlight = () => {
  return (
    <section className='highlights'>
      <Container fluid>
        <Row>
          <Col className='text-center my-5'>
            {/* <h2>Produk Kami</h2> */}
            <div>
              <video src={video1} controls>Produk Kami</video>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Highlight