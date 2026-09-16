import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Vault...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const textIntervals = [
      { at: 0, text: 'Initializing Vault...' },
      { at: 22, text: 'Fetching hand-crafted games...' },
      { at: 50, text: 'Polishing pixels & drawing doodles...' },
      { at: 75, text: 'Calibrating analog sticks...' },
      { at: 92, text: 'Ready to play! Let\'s go!' }
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 450);
          return 100;
        }
        // Smooth and steady progress taking ~2.5s to reach 100%
        const increment = Math.random() < 0.3 ? 1 : Math.floor(Math.random() * 3) + 1;
        const next = prev + increment;
        const bounded = Math.min(next, 100);
        
        for (const item of textIntervals) {
          if (bounded >= item.at) {
            setLoadingText(item.text);
          }
        }
        return bounded;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 300);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          style={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          onClick={handleSkip}
        >
          {/* Background Ambient Radial Glow */}
          <div style={styles.glow} />

          {/* Center Card / Content */}
          <motion.div 
            style={styles.card}
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Playful Floating Doodles Around Controller */}
            <motion.div 
              style={styles.starTopLeft}
              animate={{ rotate: [0, 20, -10, 0], scale: [1, 1.15, 1], y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <svg width="34" height="34" viewBox="0 0 52 52" fill="none">
                <path 
                  d="M26 4L32 18L47 19L35 30L39 45L26 37L13 45L17 30L5 19L20 18L26 4Z" 
                  fill="#87CEEB" 
                  stroke="#80461B" 
                  strokeWidth="3.5" 
                  strokeLinejoin="round" 
                />
              </svg>
            </motion.div>

            <motion.div 
              style={styles.sparkleTopRight}
              animate={{ rotate: [0, 90, 180, 0], scale: [1, 1.25, 1], y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.8 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 3V21M3 12H21" stroke="#80461B" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </motion.div>

            <motion.div 
              style={styles.heartBottomLeft}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <path 
                  d="M16 26C16 26 5 19 5 11C5 6.5 8.5 4 12 4C14.5 4 16 6 16 6C16 6 17.5 4 20 4C23.5 4 27 6.5 27 11C27 19 16 26 16 26Z" 
                  fill="#87CEEB"
                  stroke="#80461B" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </motion.div>

            {/* Bouncing Doodle Controller */}
            <motion.div 
              style={styles.controllerBox}
              animate={{ 
                y: [0, -14, 0],
                rotate: [0, -4, 4, 0]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <svg width="180" height="120" viewBox="0 0 340 230" fill="none">
                {/* Outer Shell */}
                <path 
                  d="M75 42C110 36 230 36 265 42C295 48 318 85 315 130C312 170 290 205 260 205C240 205 230 185 200 178C182 174 158 174 140 178C110 185 100 205 80 205C50 205 28 170 25 130C22 85 45 48 75 42Z" 
                  fill="#FFFFFF" 
                  stroke="#231B16" 
                  strokeWidth="6" 
                  strokeLinejoin="round" 
                />
                {/* Left Grip Accent */}
                <path 
                  d="M75 42C55 46 38 65 30 92C23 120 25 155 45 185C56 200 70 205 80 205C88 205 94 198 98 185C85 160 70 115 75 42Z" 
                  fill="#87CEEB" 
                />
                {/* Right Grip Accent */}
                <path 
                  d="M265 42C285 46 302 65 310 92C317 120 315 155 295 185C284 200 270 205 260 205C252 205 246 198 242 185C255 160 270 115 265 42Z" 
                  fill="#87CEEB" 
                />
                {/* D-Pad */}
                <g transform="translate(85, 95)">
                  <path 
                    d="M13 0H27V13H40V27H27V40H13V27H0V13H13V0Z" 
                    fill="#80461B" 
                    stroke="#231B16" 
                    strokeWidth="4" 
                    strokeLinejoin="round" 
                  />
                </g>
                {/* Thumbsticks */}
                <g transform="translate(138, 122)">
                  <circle cx="18" cy="18" r="20" fill="#E5F3F9" stroke="#231B16" strokeWidth="4" />
                  <circle cx="18" cy="18" r="13" fill="#80461B" />
                </g>
                <g transform="translate(196, 122)">
                  <circle cx="18" cy="18" r="20" fill="#E5F3F9" stroke="#231B16" strokeWidth="4" />
                  <circle cx="18" cy="18" r="13" fill="#80461B" />
                </g>
                {/* Buttons */}
                <g transform="translate(240, 78)">
                  <circle cx="20" cy="6" r="7" fill="#87CEEB" stroke="#231B16" strokeWidth="3" />
                  <circle cx="7" cy="20" r="7" fill="#80461B" stroke="#231B16" strokeWidth="3" />
                  <circle cx="33" cy="20" r="7" fill="#58B9DE" stroke="#231B16" strokeWidth="3" />
                  <circle cx="20" cy="34" r="7" fill="#A76535" stroke="#231B16" strokeWidth="3" />
                </g>
              </svg>
            </motion.div>

            {/* Hand-drawn Brand Header */}
            <div style={styles.titleWrapper}>
              <span style={styles.eyebrow}>Ready to Play?</span>
              <h1 style={styles.brandTitle}>
                Game<span style={styles.brandHighlight}>Vault</span>
              </h1>
            </div>

            {/* Progress Bar Container */}
            <div style={styles.progressSection}>
              <div style={styles.progressBarTrack}>
                <motion.div 
                  style={{ 
                    ...styles.progressBarFill, 
                    width: `${progress}%` 
                  }}
                  transition={{ ease: "easeOut", duration: 0.15 }}
                />
              </div>

              <div style={styles.progressStatusRow}>
                <span style={styles.statusText}>{loadingText}</span>
                <span style={styles.percentageText}>{progress}%</span>
              </div>
            </div>

            {/* Tap to skip hint */}
            <button style={styles.skipBtn} onClick={handleSkip}>
              Click anywhere to skip
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#F2F9FC',
    zIndex: 99999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    cursor: 'pointer',
    userSelect: 'none',
  },
  glow: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    backgroundColor: '#D6EFF9',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.8,
    pointerEvents: 'none',
  },
  card: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '40px 48px',
    maxWidth: '440px',
    width: '90%',
  },
  starTopLeft: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    pointerEvents: 'none',
  },
  sparkleTopRight: {
    position: 'absolute',
    top: '15px',
    right: '25px',
    pointerEvents: 'none',
  },
  heartBottomLeft: {
    position: 'absolute',
    bottom: '85px',
    left: '10px',
    pointerEvents: 'none',
  },
  controllerBox: {
    marginBottom: '16px',
    filter: 'drop-shadow(0 12px 20px rgba(35, 27, 22, 0.12))',
  },
  titleWrapper: {
    marginBottom: '28px',
  },
  eyebrow: {
    fontFamily: "'Caveat', cursive",
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#80461B',
    display: 'block',
    marginBottom: '-4px',
    transform: 'rotate(-3deg)',
  },
  brandTitle: {
    fontSize: '2.8rem',
    fontWeight: '900',
    color: '#231B16',
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
  },
  brandHighlight: {
    color: '#80461B',
    position: 'relative',
  },
  progressSection: {
    width: '100%',
    maxWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  progressBarTrack: {
    width: '100%',
    height: '14px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50px',
    padding: '3px',
    border: '2px solid #231B16',
    boxShadow: '0 4px 12px rgba(35, 27, 22, 0.08)',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#87CEEB',
    backgroundImage: 'linear-gradient(45deg, #58B9DE 25%, #87CEEB 25%, #87CEEB 50%, #58B9DE 50%, #58B9DE 75%, #87CEEB 75%, #87CEEB 100%)',
    backgroundSize: '24px 24px',
    borderRadius: '50px',
  },
  progressStatusRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.88rem',
    color: '#5F676C',
    fontWeight: '600',
  },
  statusText: {
    fontFamily: "'Caveat', cursive",
    fontSize: '1.15rem',
    color: '#80461B',
    fontWeight: '700',
  },
  percentageText: {
    fontWeight: '800',
    color: '#231B16',
    fontVariantNumeric: 'tabular-nums',
  },
  skipBtn: {
    marginTop: '24px',
    background: 'transparent',
    border: 'none',
    color: '#A76535',
    fontSize: '0.78rem',
    fontWeight: '700',
    cursor: 'pointer',
    opacity: 0.75,
    transition: 'opacity 0.2s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  }
};

export default SplashScreen;
