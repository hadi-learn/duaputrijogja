import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image1 from '../assets/images/organik tanpa msg - Bubur Beras Organik-Salmon Wortel.jpeg'
import image2 from '../assets/images/hero/2.png'
import image3 from '../assets/images/hero/3.png'
import image4 from '../assets/images/hero/4.png'
import image5 from '../assets/images/hero/5.png'
import image6 from '../assets/images/hero/1.png'
import { ReactComponent as SVG1 } from '../assets/images/background/01. Blob Filled (1).svg'
import { ReactComponent as SVG2 } from '../assets/images/background/02. Blob Filled (2).svg'
import { ReactComponent as SVG3 } from '../assets/images/background/15. Abstract Shape 2.svg'
import { ReactComponent as SVG4 } from '../assets/images/background/16. Abstract Shape 3.svg'

const Latest = () => {
  return (
    <section className='latest min-vh-100'>
      <div className='svg-wrapper'>
        <SVG1 className='svg1'/>
        <SVG2 className='svg2'/>
        {/* <SVG3 /> */}
        {/* <SVG4 /> */}
      </div>
      <Container fluid>
          <h3>Produk Terbaru</h3>
          <p>Berbagai macam produk sehat dan higienis</p>
          <Row className='row-cols-lg-3'>
            <Col>
              <img 
                src={image1}
                alt='Bubur Beras Organik Rasa Salmon Wortel'
              />
              <h5>Bubur Beras organik</h5>
              <p>Tanpa MSG, Tanpa Pengawet</p>
            </Col>
            <Col>
            <img 
                src={image2}
                alt='organik tanpa msg - Beras Organik'
              />
              <h5>Beras organik</h5>
              <p>Tanpa MSG, Tanpa Pengawet</p>
            </Col>
            <Col>
            <img 
                src={image3}
                alt='organik tanpa msg - Abon Tanpa MSG'
              />
              <h5>Abon 100% Daging Asli</h5>
              <p>Tanpa MSG, Tanpa Pengawet</p>
            </Col>
            <Col>
              <img 
                src={image4}
                alt='organik tanpa msg - Tepung Bumbu Qreezpy'
              />
              <h5>Tepung Bumbu Krispi Serbaguna</h5>
              <p>Tanpa MSG, Tanpa Pengawet</p>
            </Col>
            <Col>
            <img 
                src={image5}
                alt='organik tanpa msg - Kaldu Ayam'
              />
              <h5>Kaldu Jamur</h5>
              <p>Tanpa MSG, Tanpa Pengawet</p>
            </Col>
            <Col>
            <img 
                src={image6}
                alt='organik tanpa msg - Bumbu Instan'
              />
              <h5>Bumbu Instan Rempah</h5>
              <p>Tanpa MSG, Tanpa Pengawet</p>
            </Col>
          </Row>
      </Container>
    </section>
  )
}

export default Latest