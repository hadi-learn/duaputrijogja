import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image1 from '../assets/images/organik tanpa msg - Bubur Beras Organik-Salmon Wortel.jpeg'

const Latest = () => {
  return (
    <section className='latest'>
      <Container fluid>
        <h3>Mie Organik</h3>
        <p>Tanpa MSG, Tanpa Pengawet</p>
        <Row>
          <Col>
            <img 
              src={image1}
              alt='Bubur Beras Organik Rasa Salmon Wortel'
            />
          </Col>
          <Col>
            <h3>Beras Organik</h3>
            <p>Tanpa MSG, Tanpa Pengawet</p>
          </Col>
          <Col>
            <h3>Bubur Beras Organik</h3>
            <p>Tanpa MSG, Tanpa Pengawet</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Latest