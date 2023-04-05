import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import collage from '../assets/images/background/collage-h.png'

const About = () => {
  return (
    <section className='about'>
      <Container fluid>
        <Row className='text-center my-5'>
          <h2>Tentang Kami</h2>
        </Row>
        <Row>
          <Col className='about-collage-image'>
            <img src={collage} alt='collage-product'/>
          </Col>
          <Col className='about-collage-info'>
            <h3>Dua Putri Jogja</h3>
            <h5>Visi Kami</h5>
            <p>Menyuguhkan bahan makanan yang sehat dan higienis</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About