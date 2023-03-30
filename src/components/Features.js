import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <section className='feature d-flex align-items-center mt-5'>
      <Container fluid>
        <Row className='mb-3'>
          <Col className='text-center pt-3'>
            <h2 className='fw-bold'>Services</h2>
            <p>Transaksi mudah dengan harga yang kompetitif</p>
          </Col>
        </Row>
        <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center'>
          <Col className='text-center py-3 px-2'>
            <i class="fa-solid fa-rupiah-sign fs-3 mb-4"></i>
            <h5 className='fw-bold'>Harga Terjangkau</h5>
            <p>Jaminan harga terbaik</p>
          </Col>
          <Col className='text-center py-3 px-2'>
            <i class="fa-solid fa-truck-fast fs-3 mb-4"></i>
            <h5 className='fw-bold'>Pengiriman Cepat</h5>
            <p>Deal pemesanan langsung proses pengiriman</p>
          </Col>
          <Col className='text-center py-3 px-2'>
            <i class="fa-solid fa-comments fs-3 mb-4"></i>
            <h5 className='fw-bold'>Layanan Pelanggan</h5>
            <p>Customer service kami siap melayani pertanyaan Anda</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features