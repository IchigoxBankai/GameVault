import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>About GameVault</h2>
          <p style={styles.text}>
            GameVault is a personal collection of Android games and experiments built with passion, creative mechanics, and clean code.
          </p>
          <div style={styles.features}>
            <div style={styles.feature}>
              <span style={styles.dot}></span>
              Game Development
            </div>
            <div style={styles.feature}>
              <span style={styles.dot}></span>
              Android & Mobile
            </div>
            <div style={styles.feature}>
              <span style={styles.dot}></span>
              Creative Mechanics
            </div>
            <div style={styles.feature}>
              <span style={styles.dot}></span>
              Interactive Fun
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: 'var(--bg-secondary)',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#FFFFFF',
    color: 'var(--text-main)',
    padding: '60px 48px',
    borderRadius: 'var(--border-radius-lg)',
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
    boxShadow: 'var(--shadow-sm)',
    border: '1.5px solid rgba(128, 70, 27, 0.08)',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: '900',
  },
  text: {
    fontSize: '1.15rem',
    marginBottom: '36px',
    color: 'var(--text-muted)',
    lineHeight: 1.7,
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '700',
    fontSize: '0.95rem',
    backgroundColor: 'var(--bg-primary)',
    color: '#80461B',
    border: '1px solid rgba(128, 70, 27, 0.15)',
    padding: '10px 20px',
    borderRadius: 'var(--border-radius-pill)',
  },
  dot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#87CEEB',
    borderRadius: '50%',
  }
};

const mediaQueryStyle = `
  @media (max-width: 768px) {
    div[style*="padding: '60px 48px'"] { padding: 32px 20px !important; }
    h2[style*="fontSize: '2.5rem'"] { font-size: 2rem !important; }
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = mediaQueryStyle;
document.head.appendChild(styleSheet);

export default About;
