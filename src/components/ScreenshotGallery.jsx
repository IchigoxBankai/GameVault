import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScreenshotGallery = ({ screenshots }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Screenshots</h3>
      
      <div style={styles.gallery}>
        {screenshots.map((src, index) => (
          <motion.div 
            key={index} 
            style={styles.thumbnailContainer}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImage(src)}
          >
            <img 
              src={src} 
              alt={`Screenshot ${index + 1}`} 
              style={styles.thumbnail} 
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{ ...styles.placeholderThumbnail, display: 'none' }}>
              Screenshot {index + 1}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            style={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button style={styles.closeBtn} onClick={() => setSelectedImage(null)} aria-label="Close screenshot modal">
              <X size={28} />
            </button>
            <motion.div 
              style={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged screenshot" 
                style={styles.modalImage} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '48px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '24px',
    color: 'var(--text-main)',
  },
  gallery: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    paddingBottom: '16px',
    scrollbarWidth: 'thin',
  },
  thumbnailContainer: {
    flex: '0 0 auto',
    width: '180px',
    height: '320px',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundColor: 'var(--bg-card)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    border: '2px solid rgba(128, 70, 27, 0.1)',
    position: 'relative',
    transition: 'border-color var(--transition-fast)',
  },
  placeholderThumbnail: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--color-primary)',
    fontWeight: '700',
    backgroundColor: '#FFEAE6',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(28, 49, 61, 0.85)',
    backdropFilter: 'blur(8px)',
    zIndex: 2000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  closeBtn: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    borderRadius: '50%',
    color: '#fff',
    cursor: 'pointer',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease',
  },
  modalContent: {
    maxWidth: '90vw',
    maxHeight: '90vh',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImage: {
    maxHeight: '85vh',
    maxWidth: '100%',
    objectFit: 'contain',
    borderRadius: '16px',
  }
};

export default ScreenshotGallery;
