import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import products from '../products/products'

const Hero = () => {

  const images = products
  
  return (
    <section className='hero'>
      <Container fluid>
        <Carousel fade>
          {images.map((image) => (
            <Carousel.Item key={image.id}>
            <img
              className="d-block w-100"
              src={image.srcHero}
              alt={image.alt}
            />
            <Carousel.Caption>
              <h3>{image.heading}</h3>
              <p>{image.subheading}</p>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}

export default Hero