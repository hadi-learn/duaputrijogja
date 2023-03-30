import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import image1 from '../assets/images/gallery/1280x720/1.png'
import image2 from '../assets/images/gallery/1280x720/2.png'
import image3 from '../assets/images/gallery/1280x720/3.png'
import image4 from '../assets/images/gallery/1280x720/4.png'
import image5 from '../assets/images/gallery/1280x720/5.png'
import image6 from '../assets/images/gallery/1280x720/6.png'
import { ReactComponent as SVG1 } from '../assets/images/background/01. Blob Filled (1).svg'
import { ReactComponent as SVG2 } from '../assets/images/background/02. Blob Filled (2).svg'

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
        <Row>
          <Col className='mb-5 text-center'>
            <h2 className='fw-bold'>Produk Terbaru</h2>
            <p>Berbagai macam produk sehat dan higienis</p>
          </Col>
        </Row>
        <Row className='row-cols-lg-3'>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <Image src={image1} fluid style={{ width: '100%', height: 'auto' }}/>
              <div className="image-title">
                <h5>Tepung Bumbu Krispi Serbaguna</h5>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <Image src={image2} fluid style={{ width: '100%', height: '100%' }}/>
              <div className="image-title">
                <h5>Kaldu Ayam</h5>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <Image src={image3} fluid style={{ width: '100%', height: '100%' }}/>
              <div className="image-title">
                <h5>Bumbu Instan Rempah</h5>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <Image src={image4} fluid style={{ width: '100%', height: '100%' }}/>
              <div className="image-title">
                <h5>Abon 100% Daging Asli</h5>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <Image src={image5} fluid style={{ width: '100%', height: '100%' }}/>
              <div className="image-title">
                <h5>Beras Organik</h5>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <Image src={image6} fluid style={{ width: '100%', height: '100%' }}/>
              <div className="image-title">
                <h5>Bubur Organik</h5>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Latest