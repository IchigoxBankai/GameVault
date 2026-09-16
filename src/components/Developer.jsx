import React, { useState } from 'react';
import { User, Mail, Check } from 'lucide-react';

const Developer = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText('niharputhran03@gmail.com');
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=niharputhran03@gmail.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section style={styles.section}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.title}>Built by Nihar</h2>
          <p style={styles.text}>
            GameVault is where I showcase the Android games and interactive experiences I've crafted.
          </p>
          <div style={styles.buttons}>
            <a 
              href="https://github.com/IchigoxBankai" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.primaryBtn}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/nihar-puthran-336029372/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.secondaryBtn}
            >
              <User size={20} />
              LinkedIn
            </a>
            <button 
              onClick={handleEmailClick}
              style={styles.emailBtn}
              title="Click to copy email and open Gmail"
            >
              {copied ? <Check size={20} color="#2E7D32" /> : <Mail size={20} />}
              {copied ? "Copied Email!" : "Email Me"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px 0 80px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#FFFFFF',
    padding: '48px',
    borderRadius: 'var(--border-radius-lg)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
    boxShadow: 'var(--shadow-sm)',
    border: '1.5px solid rgba(128, 70, 27, 0.08)',
  },
  title: {
    fontSize: '2rem',
    color: 'var(--text-main)',
    marginBottom: '14px',
    fontWeight: '900',
  },
  text: {
    fontSize: '1.1rem',
    color: 'var(--text-muted)',
    marginBottom: '32px',
    lineHeight: 1.6,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#87CEEB',
    color: '#1C313D',
    border: '1.5px solid #58B9DE',
    padding: '14px 28px',
    borderRadius: 'var(--border-radius-pill)',
    fontWeight: '800',
    boxShadow: 'var(--shadow-pill)',
    transition: 'all var(--transition-fast)',
  },
  secondaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'var(--bg-primary)',
    color: '#80461B',
    border: '1.5px solid rgba(128, 70, 27, 0.15)',
    padding: '14px 28px',
    borderRadius: 'var(--border-radius-pill)',
    fontWeight: '800',
    transition: 'all var(--transition-fast)',
  },
  emailBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FFEAE6',
    color: '#D9534F',
    border: '1.5px solid rgba(217, 83, 79, 0.25)',
    padding: '14px 28px',
    borderRadius: 'var(--border-radius-pill)',
    fontWeight: '800',
    fontSize: '1rem',
    fontFamily: 'inherit',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
  }
};

const mediaQueryStyle = `
  @media (max-width: 768px) {
    div[style*="padding: '48px'"] { padding: 28px 20px !important; }
    div[style*="buttons"] { flex-direction: column; width: 100%; }
    a[style*="primaryBtn"], a[style*="secondaryBtn"], a[style*="emailBtn"] { width: 100%; justify-content: center; }
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = mediaQueryStyle;
document.head.appendChild(styleSheet);

export default Developer;
