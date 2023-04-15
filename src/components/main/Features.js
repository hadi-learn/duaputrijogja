import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import transport from '../../assets/images/background/23-transport.svg'
import support from '../../assets/images/background/26-support.svg'
import payment from '../../assets/images/background/9-payment.svg'

const Features = () => {
  return (
    <section className='feature d-flex align-items-center'>
      <Container fluid>
        <Row className='mb-3'>
          <Col className='text-center pt-3'>
            <h2 className='fw-bold'>Layanan Kami</h2>
          </Col>
        </Row>
        <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center feature-row'>
          <Col className='single-feature'>
            <div className='single-feature-container'>              
              <img src={payment} alt='voucher-icon' className='icon'/>
              <h5 className='fw-bold'>Transaksi Mudah</h5>
              <p>Kami siap melayani partai besar, kecil, bahkan ecer dengan harga yang kompetitif</p>
              <p>Kuantiti tertentu dapat harga khusus</p>
            </div>
          </Col>
          <Col className='single-feature'>
            <div className='single-feature-container'>
              <img src={transport} alt='transport-icon' className='icon'/>
              <h5 className='fw-bold'>Pengiriman</h5>
              <p>Kami memiliki kerjasama dengan ekspedisi yang handal dengan harga terjangkau</p>
              <p>Kami carikan ekspedisi yang termurah</p>
            </div>
          </Col>
          <Col className='single-feature'>
          <div className='single-feature-container'>
            <img src={support} alt='support-icon' className='icon'/>
            <h5 className='fw-bold'>Layanan Pelanggan</h5>
            <p>Pertanyaan, konsultasi, dan pemesanan dapat dilakukan dengan marketing kami 24 jam</p>
            <p>Pengiriman dilakukan pada jam kerja</p>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features