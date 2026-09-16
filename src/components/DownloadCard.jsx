import React from 'react';
import { Download, Info, Smartphone, FileArchive, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadCard = ({ game }) => {
  return (
    <motion.div 
      style={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 style={styles.title}>DOWNLOAD {game.title.toUpperCase()}</h3>
      
      <div style={styles.infoGrid}>
        <div style={styles.infoItem}>
          <span style={styles.infoLabel}>Latest Version</span>
          <span style={styles.infoValue}>v{game.version}</span>
        </div>
        <div style={styles.infoItem}>
          <span style={styles.infoLabel}><Smartphone size={16} style={{display: 'inline', verticalAlign: 'text-bottom', marginRight: 4}}/>Platform</span>
          <span style={styles.infoValue}>{game.platform}</span>
        </div>
        <div style={styles.infoItem}>
          <span style={styles.infoLabel}><FileArchive size={16} style={{display: 'inline', verticalAlign: 'text-bottom', marginRight: 4}}/>File</span>
          <span style={styles.infoValue}>APK</span>
        </div>
        <div style={styles.infoItem}>
          <span style={styles.infoLabel}><HardDrive size={16} style={{display: 'inline', verticalAlign: 'text-bottom', marginRight: 4}}/>Size</span>
          <span style={styles.infoValue}>{game.size || "~ 25 MB"}</span>
        </div>
      </div>

      <a 
        href={game.downloadUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={styles.downloadBtn}
      >
        <Download size={22} />
        DOWNLOAD APK
      </a>

      <div style={styles.disclaimer}>
        <Info size={16} />
        <span>Android may ask you to allow installation from unknown sources.</span>
      </div>
    </motion.div>
  );
};

const styles = {
  card: {
    backgroundColor: '#87CEEB',
    border: '2px solid #58B9DE',
    borderRadius: '32px',
    padding: '40px',
    color: '#1C313D',
    boxShadow: '0 16px 36px rgba(135, 206, 235, 0.35)',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  title: {
    fontSize: '1.5rem',
    margin: 0,
    textAlign: 'center',
    fontWeight: '900',
    color: '#1C313D',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    padding: '24px',
    borderRadius: '24px',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  infoLabel: {
    fontSize: '0.85rem',
    color: '#80461B',
    fontWeight: '700',
  },
  infoValue: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#1C313D',
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    backgroundColor: '#80461B',
    color: '#FFFFFF',
    padding: '18px',
    borderRadius: 'var(--border-radius-pill)',
    fontSize: '1.1rem',
    fontWeight: '800',
    boxShadow: '0 8px 20px rgba(128, 70, 27, 0.3)',
    transition: 'transform var(--transition-fast)',
  },
  disclaimer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '0.85rem',
    color: '#2A4A59',
    textAlign: 'center',
    fontWeight: '600',
  }
};

const hoverStyle = `
  a[style*="downloadBtn"]:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 28px rgba(128, 70, 27, 0.4) !important;
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = hoverStyle;
document.head.appendChild(styleSheet);

export default DownloadCard;
