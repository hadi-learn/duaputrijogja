import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Products = () => {
  return (
    <section className='products'>
      <Container fluid>
        <Row>
          <Col className='text-center my-5'>
            <h2>Produk Kami</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Products