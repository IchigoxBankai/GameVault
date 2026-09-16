import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Dynamic scroll listener to highlight active section in Navbar
  useEffect(() => {
    if (location.pathname !== '/') {
      if (location.pathname.startsWith('/games')) {
        setActiveSection('games');
      } else {
        setActiveSection('');
      }
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const gamesElem = document.getElementById('games');
      const aboutElem = document.getElementById('about');

      if (aboutElem && scrollPosition >= aboutElem.offsetTop) {
        setActiveSection('about');
      } else if (gamesElem && scrollPosition >= gamesElem.offsetTop) {
        setActiveSection('games');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(sectionId);

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
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
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
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.navContainer}>
        {/* LOGO */}
        <Link to="/" onClick={(e) => handleNavClick(e, 'home')} style={styles.logo}>
          <div style={styles.logoIconWrapper}>
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none" style={styles.sunburstIcon}>
              <line x1="18" y1="2" x2="18" y2="6" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6.7" y1="6.7" x2="9.5" y2="9.5" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="2" y1="18" x2="6" y2="18" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="29.3" y1="6.7" x2="26.5" y2="9.5" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M9 13C6.5 13 5 15.5 5 19C5 23.5 8 28 11.5 28C13.5 28 14.5 26.5 16 26.5C17.5 26.5 18.5 28 20.5 28C24 28 27 23.5 27 19C27 15.5 25.5 13 23 13C20 13 18.5 15 16 15C13.5 15 12 13 9 13Z" fill="#87CEEB" />
              <circle cx="9.5" cy="18.5" r="1.5" fill="#80461B" />
              <circle cx="7.5" cy="20.5" r="1.5" fill="#80461B" />
              <circle cx="11.5" cy="20.5" r="1.5" fill="#80461B" />
              <circle cx="9.5" cy="22.5" r="1.5" fill="#80461B" />
              <circle cx="21" cy="18.5" r="1.3" fill="#FFFFFF" />
              <circle cx="23.5" cy="21" r="1.3" fill="#FFFFFF" />
            </svg>
          </div>
          <span style={styles.logoText}>
            Game<span style={{ color: '#80461B' }}>Vault</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div style={styles.desktopMenu}>
          <div style={styles.navLinks}>
            {/* HOME */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')} 
              style={{
                ...styles.link,
                ...(activeSection === 'home' ? styles.activeLink : {})
              }}
            >
              Home
              {activeSection === 'home' && <span style={styles.activeIndicator}></span>}
            </a>

            {/* GAMES */}
            <a 
              href="#games" 
              onClick={(e) => handleNavClick(e, 'games')} 
              style={{
                ...styles.link,
                ...(activeSection === 'games' ? styles.activeLink : {})
              }}
            >
              Games
              {activeSection === 'games' && <span style={styles.activeIndicator}></span>}
            </a>

            {/* ABOUT */}
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')} 
              style={{
                ...styles.link,
                ...(activeSection === 'about' ? styles.activeLink : {})
              }}
            >
              About
              {activeSection === 'about' && <span style={styles.activeIndicator}></span>}
            </a>
          </div>

          <a 
            href="https://github.com/IchigoxBankai" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.githubBtn}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <button style={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={styles.mobileMenu}>
          <a 
            href="#home" 
            style={{ 
              ...styles.mobileLink, 
              color: activeSection === 'home' ? '#80461B' : 'var(--text-main)',
              fontWeight: activeSection === 'home' ? '800' : '600'
            }} 
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a 
            href="#games" 
            style={{ 
              ...styles.mobileLink, 
              color: activeSection === 'games' ? '#80461B' : 'var(--text-main)',
              fontWeight: activeSection === 'games' ? '800' : '600'
            }} 
            onClick={(e) => handleNavClick(e, 'games')}
          >
            Games
          </a>
          <a 
            href="#about" 
            style={{ 
              ...styles.mobileLink, 
              color: activeSection === 'about' ? '#80461B' : 'var(--text-main)',
              fontWeight: activeSection === 'about' ? '800' : '600'
            }} 
            onClick={(e) => handleNavClick(e, 'about')}
          >
            About
          </a>
          <a 
            href="https://github.com/IchigoxBankai" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={styles.mobileGithubBtn}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(242, 249, 252, 0.94)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(128, 70, 27, 0.08)',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '76px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  },
  logoIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sunburstIcon: {
    display: 'block',
  },
  logoText: {
    fontSize: '1.45rem',
    fontWeight: '900',
    color: 'var(--text-main)',
    letterSpacing: '-0.02em',
  },
  desktopMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '36px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  link: {
    position: 'relative',
    fontWeight: '600',
    fontSize: '1rem',
    color: 'var(--text-muted)',
    transition: 'color var(--transition-fast)',
    padding: '6px 0',
    cursor: 'pointer',
  },
  activeLink: {
    color: '#80461B',
    fontWeight: '800',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    right: '0',
    height: '3px',
    backgroundColor: '#80461B',
    borderRadius: '3px',
  },
  githubBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FFFFFF',
    color: 'var(--text-main)',
    padding: '9px 20px',
    borderRadius: 'var(--border-radius-pill)',
    fontWeight: '700',
    fontSize: '0.95rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    border: '1.5px solid rgba(128, 70, 27, 0.12)',
    transition: 'all var(--transition-fast)',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text-main)',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderBottom: '1px solid rgba(128, 70, 27, 0.1)',
    position: 'absolute',
    top: '76px',
    left: 0,
    right: 0,
    boxShadow: 'var(--shadow-md)',
  },
  mobileLink: {
    padding: '14px 0',
    fontSize: '1.1rem',
    borderBottom: '1px solid rgba(128, 70, 27, 0.06)',
    color: 'var(--text-main)',
    cursor: 'pointer',
  },
  mobileGithubBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-main)',
    padding: '14px',
    borderRadius: 'var(--border-radius-pill)',
    marginTop: '18px',
    fontWeight: '700',
  }
};

const mediaQueryStyle = `
  @media (max-width: 768px) {
    div[style*="desktopMenu"] { display: none !important; }
    button[style*="mobileToggle"] { display: block !important; }
  }
  a[style*="githubBtn"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(128, 70, 27, 0.15) !important;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = mediaQueryStyle;
document.head.appendChild(styleSheet);

export default Navbar;
