import React, { useEffect, useState } from 'react';
import Icon from './Icon';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = event => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navegación principal">
        <a href="#inicio" onClick={() => setOpen(false)} className="brand" aria-label="BIOSAVIA, inicio">
          <img src={`${process.env.PUBLIC_URL}/media/logo.webp`} alt="BIOSAVIA" width="200" height="68" />
        </a>
        <button type="button" className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
        <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          <a href="#about" onClick={() => setOpen(false)}>El gel</a>
          <a href="#usos" onClick={() => setOpen(false)}>Sus usos</a>
          <a href="#gallery" onClick={() => setOpen(false)}>En tu día a día</a>
          <a className="button button-small" href="#contact" onClick={() => setOpen(false)}>Hablemos <Icon name="arrow" size={18} /></a>
        </div>
      </nav>
    </header>
  );
}
