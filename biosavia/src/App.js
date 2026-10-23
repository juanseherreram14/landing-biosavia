import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Applications from './Components/Applications';
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs';
import Quote from './Components/Quote';
import './App.css';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <AboutUs />
        <Applications />
        <Quote />
        <Gallery />
        <ContactUs />
      </main>
      <footer className="footer container">
        <a href="#inicio" aria-label="BIOSAVIA, volver al inicio"><img src={`${process.env.PUBLIC_URL}/media/logo.webp`} alt="BIOSAVIA" width="170" height="58" /></a>
        <p>Bienestar natural. Orgullosamente ecuatoriano.</p>
        <a href="#inicio">Volver arriba <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}
