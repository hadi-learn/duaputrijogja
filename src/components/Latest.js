import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image1 from '../assets/images/organik tanpa msg - Bubur Beras Organik-Salmon Wortel.jpeg'
import image2 from '../assets/images/2.png'
import image3 from '../assets/images/3.png'
import image4 from '../assets/images/4.png'
import image5 from '../assets/images/5.png'
import image6 from '../assets/images/1.png'

const Latest = () => {
  return (
    <section className='latest min-vh-100'>
      <Container fluid>
        <h3>Mie Organik</h3>
        <p>Tanpa MSG, Tanpa Pengawet</p>
        <Row className='row-cols-lg-3'>
          <Col>
            <img 
              src={image1}
              alt='Bubur Beras Organik Rasa Salmon Wortel'
            />
            <h4>Bubur Beras organik</h4>
            <p>Tanpa MSG, Tanpa Pengawet</p>
          </Col>
          <Col>
          <img 
              src={image2}
              alt='organik tanpa msg - Beras Organik'
            />
            <h4>Beras organik</h4>
            <p>Tanpa MSG, Tanpa Pengawet</p>
          </Col>
          <Col>
          <img 
              src={image3}
              alt='organik tanpa msg - Abon Tanpa MSG'
            />
            <h4>Abon 100% Daging Asli</h4>
            <p>Tanpa MSG, Tanpa Pengawet</p>
          </Col>
          <Col>
            <img 
              src={image4}
              alt='organik tanpa msg - Tepung Bumbu Qreezpy'
            />
            <h4>Tepung Bumbu Krispi Serbaguna</h4>
            <p>Tanpa MSG, Tanpa Pengawet</p>
          </Col>
          <Col>
          <img 
              src={image5}
              alt='organik tanpa msg - Kaldu Ayam'
            />
            <h4>Kaldu Jamur</h4>
            <p>Tanpa MSG, Tanpa Pengawet</p>
          </Col>
          <Col>
          <img 
              src={image6}
              alt='organik tanpa msg - Bumbu Instan'
            />
            <h4>Bumbu Instan Rempah</h4>
            <p>Tanpa MSG, Tanpa Pengawet</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Latest