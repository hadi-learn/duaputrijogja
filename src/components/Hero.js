import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import image1 from '../assets/images/hero/1280x720/1.png'
import image2 from '../assets/images/hero/1280x720/2.png'
import image3 from '../assets/images/hero/1280x720/3.png'
import image4 from '../assets/images/hero/1280x720/4.png'
import image5 from '../assets/images/hero/1280x720/5.png'
import image6 from '../assets/images/hero/1280x720/6.png'

const Hero = () => {

  const images = [
    {
      src: image1,
      alt: 'organik tanpa msg - Bumbu Instan',
      heading: 'Bumbu Instan Tanpa MSG',
      subheading: 'Dengan bahan alami dan tanpa pengawet'
    },
    {
      src: image2,
      alt: 'organik tanpa msg - Beras Organik',
      heading: 'Beras Organik',
      subheading: 'Alami dan sehat, tidak menggunakan pestisida'
    },
    {
      src: image3,
      alt: 'organik tanpa msg - Abon',
      heading: 'Abon Tanpa MSG',
      subheading: 'Terbuat dari daging asli tanpa MSG dan bahan pengawet'
    },
    {
      src: image4,
      alt: 'organik tanpa msg - Tepung Bumbu Qreezpy',
      heading: 'Tepung Bumbu Serbaguna',
      subheading: 'Tanpa MSG dan tanpa bahan pengawet'
    },
    {
      src: image5,
      alt: 'organik tanpa msg - Kaldu Ayam',
      heading: 'Kaldu Ayam',
      subheading: 'Diproses dari ayam asli tanpa MSG dan bahan pengawet'
    },
    {
      src: image6,
      alt: 'organik tanpa msg - Bubur Organik',
      heading: 'Bubur Organik',
      subheading: '100% tanpa bahan pengawet'
    }
  ]
  
  return (
    <section className='hero'>
      <Container fluid>
        <Carousel fade>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
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