import React from 'react';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Gallery from './Components/Gallery';
import ContactUs from './Components/ContactUs';
import Quote from './Components/Quote';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="about">
          <AboutUs />
        </section>
        
        <section id="quote">
          <Quote />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="contact">
          <ContactUs />
        </section>
      </main>
    </>
  );
}

export default App;
