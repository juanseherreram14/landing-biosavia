import React from 'react';
import Icon from './Icon';

export const WHATSAPP_URL = 'https://bit.ly/33E2EUL';
export const INSTAGRAM_URL = 'https://www.instagram.com/biosaviausa/';

export default function ContactUs() {
  return <section id="contact" className="contact-section section-space"><div className="container contact-grid"><div><p className="eyebrow">04 / Estamos cerca</p><h2>Tu próximo momento<br /><span>de bienestar empieza aquí.</span></h2><p>Experimenta el poder natural de BIOSAVIA y disfruta de un estilo de vida relajante y sin dolor.</p></div><div className="contact-options"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><span className="contact-icon"><Icon name="whatsapp" size={28} /></span><span><small>Conversemos</small><strong>Escríbenos por WhatsApp</strong></span><Icon name="arrow" /></a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><span className="contact-icon"><Icon name="instagram" size={28} /></span><span><small>Más momentos de BIOSAVIA</small><strong>Síguenos en Instagram</strong></span><Icon name="arrow" /></a></div></div></section>;
}
