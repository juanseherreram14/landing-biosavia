import React from 'react';

const paths = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  leaf: <><path d="M20 4C9 2 3 8 5 15c7 4 15-1 15-11Z" /><path d="m4 21 11-11M8 17l-1-6m5 2 5 1" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  movement: <><circle cx="15" cy="4" r="2" /><path d="m12 8 4 3 4 1M12 8l-3 5 5 3-1 6M9 13l-3 6H2M12 8H8l-3 4" /></>,
  moon: <path d="M21 13a9 9 0 0 1-10-10 9 9 0 1 0 10 10Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  play: <path d="m9 5 11 7-11 7V5Z" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  whatsapp: <><path d="M21 11.5A9 9 0 0 1 7.5 20L3 21l1-4.5A9 9 0 1 1 21 11.5Z" /><path d="M8 7c0 5 4 9 9 9l1-3-3-1-1 1c-2-1-3-2-3-3l1-1-2-3-2 1Z" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export default function Icon({ name, size = 24, ...props }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>;
}
