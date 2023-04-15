import { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import { Container, Row, Col } from 'react-bootstrap'

// const onLoad = marker => {
//   console.log('marker: ', marker)
// }

const Map = () => {
  const lat = -7.851595
  const lng = 110.402707
  const center = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng])
  // const center = ({ lat: -7.851615, lng: 110.402748 })

  return (
    <section className='location'>
      <Container>
        <Row className='py-5'>
          <Col className='text-center'>
            <h2>Lokasi Kami</h2>
            <p>Banguntapan, Kepuh Wetan, Wirokerten, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55194</p>
            <GoogleMap
              zoom={13}
              center={center}
              mapContainerClassName='map-container'
            >
              <MarkerF 
                position={{ lat: lat, lng: lng }}
                // onLoad={onLoad}
                onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`)}
              />
            </GoogleMap>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}

const Location = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_PLATFORM_API
  })
  if (!isLoaded) return <div>Loading...</div>
  return (
    <Map />
  )
}

export default Location