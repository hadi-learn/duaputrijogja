import React, { useState, useEffect } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import products from '../products/products'

const Hero = () => {

  const [imageSource, setImageSource] = useState(window.innerWidth > 992 ? 'srcHeroLandscape': 'srcHeroPortrait')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setImageSource('srcHeroLandscape');
      } else {
        setImageSource('srcHeroPortrait');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = products.map((product) => {
    const {
      id, srcHeroPortrait, srcHeroLandscape, srcLatest, alt, heading, subheading
    } = product
    const imageSrc = imageSource === 'srcHeroLandscape' ? srcHeroLandscape : srcHeroPortrait
    return { id, imageSrc, srcLatest, alt, heading, subheading }
  })

  return (
    <section className='hero' id='home'>
      <Container fluid>
        <Carousel fade>
          {images.map((images) => (
            <Carousel.Item key={images.id}>
            <img
              className="d-block w-100"
              src={images.imageSrc}
              alt={images.alt}
            />
            <Carousel.Caption>
              <h3>{images.heading}</h3>
              <p>{images.subheading}</p>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}

export default Hero