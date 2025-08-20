// src/components/Footer.jsx
import Container from './Container';
import '../styles/footer.css';
import { FiTwitter, FiGithub, FiLinkedin, FiShield } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-glow" aria-hidden />
      <Container>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <span className="footer-logo" aria-hidden>
                <FiShield />
              </span>
              <div>
                <strong>Artist Armor</strong>
                <div className="muted">A Fortress for Your Talent</div>
              </div>
            </div>
          </div>

          {/* Primary links */}
          <nav className="footer-links" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </nav>

          {/* Social */}
          <div className="footer-social" aria-label="Social links">
            <a href="#" aria-label="Twitter" rel="noreferrer">
              <FiTwitter />
            </a>
            <a href="#" aria-label="GitHub" rel="noreferrer">
              <FiGithub />
            </a>
            <a href="#" aria-label="LinkedIn" rel="noreferrer">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © {year} Artist Armor. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
