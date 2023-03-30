import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Cta = () => {
  const phoneNumber = [
    '+6281804095747',
    '+628175453045'
  ]
  const message = 'Hallo Dua Putri Jogja' // replace with the message you want to send
  
  const handleWhatsAppClick1 = (e) => {
    e.preventDefault();
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber[0]}&text=${message}`, '_blank');
  }
  const handleWhatsAppClick2 = (e) => {
    e.preventDefault();
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber[1]}&text=${message}`, '_blank');
  }

  return (
    <section>
    <Container fluid className='mt-5 bg-secondary text-white'>
      <Row className='mb-4'>
        <Col className='text-center pt-3'>
          <h2 className='fw-bold'>Hubungi Kami</h2>
          <p>Untuk informasi lebih lanjut silakan hubungi CS kami</p>
        </Col>
      </Row>
      <Row className='row-cols-md-4 row-cols-1'>
        <Col></Col>
        <Col className='text-center'>
          <i onClick={handleWhatsAppClick1} class="fa-brands fa-whatsapp wa-button"></i>
          <p>CS1-081804095747</p>
        </Col>
        <Col className='text-center'>
          <i onClick={handleWhatsAppClick2} class="fa-brands fa-whatsapp wa-button"></i>
          <p>CS2-08175453045</p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </section>
  );
}

export default Cta