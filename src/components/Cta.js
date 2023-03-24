import React from 'react'
import { Button } from 'react-bootstrap'

const Cta = () => {
  const phoneNumber = '+6281908198060'; // replace with the recipient's phone number
  const message = 'Hello Dua Putri Jogja'; // replace with the message you want to send
  
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  }

  return (
    <Button href="#" onClick={handleWhatsAppClick}>
      Open WhatsApp
    </Button>
  );
}

export default Cta