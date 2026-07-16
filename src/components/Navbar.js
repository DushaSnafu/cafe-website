'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navTheme, setNavTheme] = useState('light');

  const toggleMenu = () => setIsOpen((open) => !open);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-bg]');
      let currentTheme = 'light';
      
      // Target an offset near the vertical center of the floating navbar (e.g., 60px from top)
      const targetY = 60; 

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= targetY && rect.bottom >= targetY) {
          const bg = section.getAttribute('data-bg');
          // If the section background is light, we want the dark navbar for contrast
          currentTheme = bg === 'light' ? 'dark' : 'light';
        }
      });
      
      setNavTheme(currentTheme);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${navTheme === 'dark' ? 'theme-dark' : ''}`} aria-label="Navigation principale">
      <div className="container">
        <Link href="/" className="nav-logo" onClick={() => setIsOpen(false)}>L'Équilibre<span>.</span></Link>
        
        <button className={`burger-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={isOpen} aria-controls="main-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div id="main-menu" className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="/#concept" className="nav-item" onClick={() => setIsOpen(false)}>Le lieu</a>
          <a href="/#workspace" className="nav-item" onClick={() => setIsOpen(false)}>Espace Pro</a>
          <a href="/#garderie" className="nav-item" onClick={() => setIsOpen(false)}>Garderie</a>
          <Link href="/programme" className="nav-item" onClick={() => setIsOpen(false)}>Programme</Link>
          <Link href="/reserver" className="nav-cta" onClick={() => setIsOpen(false)}>Réserver</Link>
        </div>
      </div>
    </nav>
  );
}
