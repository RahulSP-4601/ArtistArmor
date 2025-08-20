import { useEffect, useState } from 'react';
import '../styles/header.css';
import Button from './Button';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo-shield.png';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Choose your mobile behavior: 'drawer' | 'dropdown'
  const MENU_MODE = 'drawer';

  // Lock body scroll when the overlay/drawer is open
  useEffect(() => {
    if (MENU_MODE !== 'drawer') return; // only for drawer
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : prev || '';
    return () => (document.body.style.overflow = prev || '');
  }, [open]);

  return (
    <header className="site-header">
      <div className="hdr-row">
        {/* Brand */}
        <a href="/" className="hdr-brand" aria-label="Artist Armor home">
          <img src={logo} width="58" height="58" alt="Artist Armor" />
          <strong>Artist Armor</strong>
        </a>

        {/* Desktop nav */}
        <nav className="hdr-nav-desktop" aria-label="Primary">
          <a href="#features">Features</a>

          <Button href="#waitlist" variant="primary">Join the Waitlist</Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="hdr-toggle"
          aria-controls={MENU_MODE === 'drawer' ? 'mobile-drawer' : 'mobile-dropdown'}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <FiX size={22}/> : <FiMenu size={22}/>}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {/* ===== Mobile: Drawer (right-side) ===== */}
      {MENU_MODE === 'drawer' && (
        <div
          id="mobile-drawer"
          className={`hdr-drawer ${open ? 'open' : ''}`}
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div className="hdr-scrim" />
          <nav
            className="hdr-drawer-panel"
            aria-label="Mobile Navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <Button href="#waitlist" variant="primary" onClick={() => setOpen(false)}>
              Join the Waitlist
            </Button>
          </nav>
        </div>
      )}

      {/* ===== Mobile: Dropdown (below header) ===== */}
      {MENU_MODE === 'dropdown' && (
        <nav
          id="mobile-dropdown"
          className={`hdr-dropdown ${open ? 'open' : ''}`}
          aria-label="Mobile Navigation"
        >
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <Button href="#waitlist" variant="primary" onClick={() => setOpen(false)}>
            Join the Waitlist
          </Button>
        </nav>
      )}
    </header>
  );
}
