import React from 'react';
import '../Styles/ContactUs.css';

// Importar imágenes locales
import whatsappIcon from '../Images/whatsapp.png';
import instagramIcon from '../Images/instagram.png';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-icons">
        <a href="https://bit.ly/33E2EUL" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="contact-icon" />
        </a>
        <a href="https://www.instagram.com/biosaviausa?igsh=MWFsNXQ2ZmRnb3hoMg==" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="contact-icon" />
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
