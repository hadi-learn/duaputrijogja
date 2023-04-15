import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import collage from '../../assets/images/background/dua putri jogja collage.png'
import emoji from '../../assets/images/background/shield-check.svg'

const About = () => {
  return (
    <section className='about' id='about'>
      <Container fluid>
        <Row className='text-center my-5'>
          <h2>Tentang Kami</h2>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={4} className='about-collage-image'>
            <Image src={collage} alt='collage-product' fluid style={{ width: '100%', height: 'auto', margin: '15px' }}/>
          </Col>
          <Col className='about-collage-info'>
            <div className='about-vision'>
              <p>Supplier makanan sehat yang bebas dari penguat rasa sintetis MSG, pewarna sintetis, dan bahan pengawet kimia, juga menyediakan produk 'gluten-free'</p>
              <img src={emoji} alt='emoji-icon'></img>
            </div>
            <div className='about-vision'>
              <p>Berkomitmen untuk selalu berusaha agar produk yang Anda terima dalam kualitas yang baik</p>
              <img src={emoji} alt='emoji-icon'></img>
            </div>
            <div>
              <a href='/tentang'><p>Selengkapnya...</p></a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About