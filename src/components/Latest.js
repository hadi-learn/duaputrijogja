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
    <section className='latest mt-5 bg-secondary text-white'>
      <div className='svg-wrapper'>
        <SVG1 className='svg1'/>
        <SVG2 className='svg2'/>
        {/* <SVG3 /> */}
        {/* <SVG4 /> */}
      </div>
      <Container fluid>
        <Row className='mb-4'>
          <Col className='text-center pt-3'>
            <h2 className='fw-bold'>Produk Terbaru</h2>
            <p>Berbagai macam produk sehat dan higienis</p>
          </Col>
        </Row>
        <Row className='row-cols-lg-3'>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <a href='#product1'>
                <Image src={image1} fluid style={{ width: '100%', height: 'auto' }}/>
              </a>
              <div className="image-title">
                <h5><a href='#product1'>Tepung Bumbu Krispi Serbaguna</a></h5>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <a href='#product2'>
                <Image src={image2} fluid style={{ width: '100%', height: '100%' }}/>
              </a>
              <div className="image-title">
                <h5><a href='#product2'>Kaldu Ayam</a></h5>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <a href='#product3'>
                <Image src={image3} fluid style={{ width: '100%', height: '100%' }}/>
              </a>
              <div className="image-title">
                <h5><a href='#product3'>Bumbu Instan Rempah</a></h5>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <a href='#product4'>
                <Image src={image4} fluid style={{ width: '100%', height: '100%' }}/>
              </a>
              <div className="image-title">
                <h5><a href='#product4'>Abon 100% Daging Asli</a></h5>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
            <a href='#product5'>
              <Image src={image5} fluid style={{ width: '100%', height: '100%' }}/>
            </a>
              <div className="image-title">
                <h5><a href='#product5'>Beras Organik</a></h5>
              </div>
            </div>
          </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <a href='#product6'>
                <Image src={image6} fluid style={{ width: '100%', height: '100%' }}/>
              </a>
              <div className="image-title">
                <h5><a href='#product6'>Bubur Organik</a></h5>
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