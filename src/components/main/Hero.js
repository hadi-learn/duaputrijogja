import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import products from '../../products/products'

const Hero = ({ handleScroll }) => {

  const heroRef = useRef(null)

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

  useLayoutEffect(() => {
    handleScroll(heroRef.current.offsetHeight);
  }, [handleScroll])

  const images = products.map((product) => {
    const {
      id, srcHeroPortrait, srcHeroLandscape, srcLatest, alt, heading, subheading
    } = product
    const imageSrc = imageSource === 'srcHeroLandscape' ? srcHeroLandscape : srcHeroPortrait
    return { id, imageSrc, srcLatest, alt, heading, subheading }
  })

  return (
    <section ref={heroRef} className='hero' id='home'>
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
              <h1>{images.heading}</h1>
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