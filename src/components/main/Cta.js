import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Cta = () => {
  const customerService = [
    {
      name: 'Arifin',
      phone: '+6281804095747',
      message: 'Halo Kak Arifin Dua Putri Jogja'
    },
    {
      name: 'Tyas',
      phone: '+628175453045',
      message: 'Halo Kak Tyas Dua Putri Jogja'
    },
    {
      name: 'CS-3',
      phone: '+6281804095747',
      message: 'Halo Kak CS-3 Dua Putri Jogja'
    },
    {
      name: 'CS-4',
      phone: '+628175453045',
      message: 'Halo Kak CS-4 Dua Putri Jogja'
    },
    {
      name: 'Acong',
      phone: '+6281337646100',
      message: 'Halo Kak Acong Dua Putri Jogja'
    }
  ]

  return (
    <section className='cta' id='contact'>
    <Container fluid>
      <Row className='mb-4'>
        <Col className='text-center'>
          <h2 className='fw-bold'>Hubungi Kami</h2>
          <p>Untuk informasi lebih lanjut CS kami siap melayani Anda</p>
        </Col>
      </Row>
      <Row className='cs-row'>
        {customerService.map((cs, index) => (
          <div
            className='cs-container text-center'
            key={index}
            onClick={(e) => {
              e.preventDefault();
              window.open(`https://api.whatsapp.com/send?phone=${cs.phone}&text=${cs.message}`, '_blank');
            }} 
          >
          <i className="fa-brands fa-whatsapp wa-button"></i>
          <p><span>{cs.name}</span>{`: ${cs.phone}`}</p>
        </div>
        ))}
        {/* <Col onClick={handleWhatsAppClick1} className='cs-container text-center'>
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
        </Col> */}
      </Row>
    </Container>
    </section>
  );
}

export default Cta