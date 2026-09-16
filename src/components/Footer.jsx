import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const elem = document.getElementById(sectionId);
          if (elem) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = elem.getBoundingClientRect().top;
            const offsetPosition = elementRect - bodyRect - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }
      }, 120);
    } else {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = elem.getBoundingClientRect().top;
          const offsetPosition = elementRect - bodyRect - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.logoSection}>
          <div style={styles.logo} onClick={(e) => handleNavClick(e, 'home')}>
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
              <line x1="18" y1="2" x2="18" y2="6" stroke="#87CEEB" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6.7" y1="6.7" x2="9.5" y2="9.5" stroke="#87CEEB" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="2" y1="18" x2="6" y2="18" stroke="#87CEEB" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="29.3" y1="6.7" x2="26.5" y2="9.5" stroke="#87CEEB" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M9 13C6.5 13 5 15.5 5 19C5 23.5 8 28 11.5 28C13.5 28 14.5 26.5 16 26.5C17.5 26.5 18.5 28 20.5 28C24 28 27 23.5 27 19C27 15.5 25.5 13 23 13C20 13 18.5 15 16 15C13.5 15 12 13 9 13Z" fill="#87CEEB" />
            </svg>
            <span style={styles.logoText}>GameVault</span>
          </div>
          <p style={styles.tagline}>Play. Discover. Download.</p>
        </div>
        
        <div style={styles.linksSection}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} style={styles.link}>Home</a>
          <a href="#games" onClick={(e) => handleNavClick(e, 'games')} style={styles.link}>Games</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} style={styles.link}>About</a>
          <a href="https://github.com/IchigoxBankai" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/nihar-puthran-336029372/" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=niharputhran03@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Email</a>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p>© 2026 GameVault. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#231B16',
    paddingTop: '60px',
    marginTop: '0px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '32px',
    marginBottom: '40px',
  },
  logoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '900',
    color: '#FFFFFF',
  },
  tagline: {
    color: 'rgba(255, 255, 255, 0.65)',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
  linksSection: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
  },
  link: {
    fontWeight: '600',
    color: '#87CEEB',
    transition: 'color var(--transition-fast)',
    opacity: 0.9,
    fontSize: '0.95rem',
    cursor: 'pointer',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '20px 0',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.45)',
    fontSize: '0.85rem',
    fontWeight: '500',
  }
};

export default Footer;
