import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import collage from '../assets/images/background/dua putri jogja collage.png'

const About = () => {
  return (
    <section className='about'>
      <Container fluid>
        <Row className='text-center my-5'>
          <h2>Tentang Kami</h2>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={4} className='about-collage-image'>
            <Image src={collage} alt='collage-product' fluid style={{ width: '100%', height: 'auto' }}/>
          </Col>
          <Col className='about-collage-info'>
            {/* <h3>Dua Putri Jogja</h3> */}
            <h4>Visi Kami</h4>
            <p>Menyediakan produk-produk bahan makanan yang halal, sehat, dan higienis untuk kebutuhan keluarga sehat dan cerdas</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About