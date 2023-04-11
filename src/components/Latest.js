import React from 'react'
import products from '../products/products'
import { Container, Row, Col, Image } from 'react-bootstrap'
// import { ReactComponent as SVG1 } from '../assets/images/background/01. Blob Filled (1).svg'
// import { ReactComponent as SVG2 } from '../assets/images/background/02. Blob Filled (2).svg'

const Latest = () => {
  return (
    <section className='latest'>
      <Container fluid>
        <Row>
          <Col className='text-center'>
            <div className='new-product-title'>
              <h2 className='fw-bold'>Produk Terbaru</h2>
              <p>Berbagai macam produk sehat dan higienis</p>
            </div>
          </Col>
        </Row>
        <Row className='row-cols-lg-3'>
          {products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4}>
          <div className='single-product'>
            <div className="image-container">
              <a href={`#product${product.id}`}>
                <Image src={product.srcLatest} fluid style={{ width: '100%', height: 'auto' }}/>
              </a>
              <div className="image-title">
                <h5><a href={`#product${product.id}`}>{product.heading}</a></h5>
              </div>
            </div>
          </div>
          </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Latest