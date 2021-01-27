import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-primary text-center py-2 border-top'>
      <p>Made by Felipe Falco&copy; {year}</p>
    </footer>
  );
};

export default Footer;
