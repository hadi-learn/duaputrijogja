import React from 'react'
import { Button } from 'react-bootstrap'

const Cta = () => {
  const phoneNumber = [
    '+6281804095747',
    '+628175453045'
  ]
  const message = 'Hallo Dua Putri Jogja' // replace with the message you want to send
  
  const handleWhatsAppClick1 = (e) => {
    e.preventDefault();
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber[0]}&text=${message}`, '_blank');
  }
  const handleWhatsAppClick2 = (e) => {
    e.preventDefault();
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber[1]}&text=${message}`, '_blank');
  }

  return (
    <>
    <Button href="#" onClick={handleWhatsAppClick1}>
      CS1-081804095747
    </Button>
    <Button href="#" onClick={handleWhatsAppClick2}>
      CS2-08175453045
    </Button>
    </>
  );
}

export default Cta