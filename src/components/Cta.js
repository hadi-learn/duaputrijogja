import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Cta = () => {
  const phoneNumber = [
    process.env.REACT_APP_HP_ARIFIN,
    process.env.REACT_APP_HP_TYAS,
    process.env.REACT_APP_HP_HADI
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
  const handleWhatsAppClick3 = (e) => {
    e.preventDefault();
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber[1]}&text=${message}`, '_blank');
  }

  return (
    <section className='cta'>
    <Container fluid>
      <Row className='mb-4'>
        <Col className='text-center'>
          <h2 className='fw-bold'>Hubungi Kami</h2>
          <p>Untuk informasi lebih lanjut silakan hubungi CS kami</p>
        </Col>
      </Row>
      <Row className='row-cols-md-3 row-cols-1'>
        <Col onClick={handleWhatsAppClick1} className='cs-container text-center'>
          <i class="fa-brands fa-whatsapp wa-button"></i>
          <p><span>Arifin</span>-081804095747</p>
        </Col>
        <Col onClick={handleWhatsAppClick2} className='cs-container text-center'>
          <i class="fa-brands fa-whatsapp wa-button"></i>
          <p><span>Tyas</span>-08175453045</p>
        </Col>
        <Col onClick={handleWhatsAppClick3} className='cs-container text-center'>
          <i class="fa-brands fa-whatsapp wa-button"></i>
          <p><span>Hadi</span>-081908198538</p>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default Cta