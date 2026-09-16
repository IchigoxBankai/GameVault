import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section style={styles.section}>
      {/* Corner Organic Blobs & Doodles in Blue & Brown */}
      <div style={styles.bottomLeftBlob}>
        {/* Squiggle Doodle in Brown */}
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" style={styles.blobSquiggle}>
          <path 
            d="M 5 28 C 15 10 25 38 35 18 C 42 6 52 24 55 16" 
            stroke="#80461B" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      <div style={styles.bottomRightBlob}>
        {/* Hatching Marks in Sky Blue */}
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" style={styles.blobHatching}>
          <path d="M12 25L20 15M24 35L32 25M36 45L44 35M28 15L36 5M40 25L48 15M52 35L60 25" stroke="#87CEEB" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container" style={styles.container}>
        {/* LEFT COLUMN */}
        <motion.div 
          style={styles.leftColumn}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Eyebrow with doodle rays */}
          <div style={styles.eyebrowWrapper}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.eyebrowRays}>
              <line x1="4" y1="18" x2="2" y2="12" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="8" y1="14" x2="6" y2="7" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="14" y1="13" x2="14" y2="6" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span style={styles.eyebrowText}>Welcome to GameVault</span>
          </div>

          {/* Headline */}
          <h1 style={styles.headline}>
            Small Games.<br />
            <span style={styles.highlightText}>
              Big Fun.
              {/* Brush / highlighter underline effect in Sky Blue */}
              <svg 
                style={styles.brushUnderline} 
                viewBox="0 0 240 18" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M4 11C40 7 110 5 236 12C180 14 80 17 4 11Z" 
                  fill="#87CEEB" 
                  fillOpacity="0.55" 
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p style={styles.subheading}>
            Discover and download Android games built with passion, creativity, and code.
          </p>

          {/* Action Buttons */}
          <div style={styles.buttonGroup}>
            {/* Primary Pill Button in Sky Blue */}
            <div style={styles.primaryBtnWrapper}>
              {/* Small radiating rays around the button in Brown */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={styles.btnDoodleLeft}>
                <line x1="8" y1="12" x2="2" y2="10" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="10" y1="16" x2="6" y2="21" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              
              <a 
                href="#games" 
                onClick={(e) => {
                  e.preventDefault();
                  const elem = document.getElementById('games');
                  if (elem) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = elem.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }} 
                style={styles.primaryBtn}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 7C5.5 7 4 9.5 4 13C4 17.5 7 21 10.5 21C12.5 21 13.5 19.5 15 19.5C16.5 19.5 17.5 21 19.5 21C23 21 26 17.5 26 13C26 9.5 24.5 7 22 7C19 7 17.5 9 15 9C12.5 9 11 7 8 7Z" transform="scale(0.8) translate(-1, -1)" />
                  <circle cx="8" cy="11.5" r="1.2" fill="#87CEEB" />
                  <circle cx="6" cy="13.5" r="1.2" fill="#87CEEB" />
                  <circle cx="10" cy="13.5" r="1.2" fill="#87CEEB" />
                  <circle cx="8" cy="15.5" r="1.2" fill="#87CEEB" />
                  <circle cx="17.5" cy="12" r="1.1" fill="#87CEEB" />
                  <circle cx="19.5" cy="14" r="1.1" fill="#87CEEB" />
                </svg>
                Explore Games
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Secondary Pill Button with Brown accent */}
            <a 
              href="https://github.com/IchigoxBankai" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.secondaryBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Rich Illustrated Scene */}
        <motion.div 
          style={styles.rightColumn}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div style={styles.artWrapper}>
            {/* Painterly soft sky blue background splash */}
            <div style={styles.paintSplash}></div>

            {/* Doodles around the controller */}

            {/* 1. Sky Blue & Brown Star (Top-Left) */}
            <motion.div 
              style={{ ...styles.doodle, top: '40px', left: '30px' }}
              animate={{ 
                y: [0, -16, 0],
                rotate: [0, 14, -8, 0], 
                scale: [1, 1.12, 1] 
              }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            >
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <path 
                  d="M26 4L32 18L47 19L35 30L39 45L26 37L13 45L17 30L5 19L20 18L26 4Z" 
                  fill="#87CEEB" 
                  stroke="#80461B" 
                  strokeWidth="3.5" 
                  strokeLinejoin="round" 
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            {/* 2. Brown Sparkle Cross (Top Center) */}
            <motion.div 
              style={{ ...styles.doodle, top: '25px', left: '180px' }}
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.25, 0.9, 1],
                rotate: [0, 90, 180, 0]
              }}
              transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut", delay: 0.2 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 3V21M3 12H21" stroke="#80461B" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* 3. Sky Blue Curved Loop (Middle-Left) */}
            <motion.div 
              style={{ ...styles.doodle, top: '150px', left: '15px' }}
              animate={{ 
                y: [0, -18, 0],
                rotate: [-6, 10, -6],
                scale: [1, 1.08, 1]
              }}
              transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut", delay: 0.4 }}
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path 
                  d="M26 12C24 6 14 6 10 12C5 18 8 28 17 28C24 28 29 23 27 18" 
                  stroke="#58B9DE" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </motion.div>

            {/* 4. Small Brown Star (Bottom-Left) */}
            <motion.div 
              style={{ ...styles.doodle, bottom: '80px', left: '35px' }}
              animate={{ 
                y: [0, -14, 0],
                rotate: [0, -18, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ repeat: Infinity, duration: 3.0, ease: "easeInOut", delay: 0.5 }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path 
                  d="M14 2L17.5 9.5L25 10.5L19 16L21 24L14 20L7 24L9 16L3 10.5L10.5 9.5L14 2Z" 
                  fill="#A76535" 
                  stroke="#80461B" 
                  strokeWidth="2.5" 
                  strokeLinejoin="round" 
                />
              </svg>
            </motion.div>

            {/* 5. Radiating Rays in Sky Blue */}
            <motion.div 
              style={{ ...styles.doodle, top: '15px', right: '190px' }}
              animate={{ 
                y: [0, -18, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ repeat: Infinity, duration: 3.3, ease: "easeInOut", delay: 0.15 }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <line x1="20" y1="30" x2="12" y2="10" stroke="#58B9DE" strokeWidth="3" strokeLinecap="round" />
                <line x1="20" y1="30" x2="22" y2="6" stroke="#58B9DE" strokeWidth="3" strokeLinecap="round" />
                <line x1="20" y1="30" x2="34" y2="14" stroke="#58B9DE" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* 6. Brown Doodle Crown (Top Right) */}
            <motion.div 
              style={{ ...styles.doodle, top: '20px', right: '100px' }}
              animate={{ 
                y: [0, -22, 0],
                rotate: [-4, 8, -4],
                scale: [1, 1.1, 1]
              }}
              transition={{ repeat: Infinity, duration: 3.1, ease: "easeInOut", delay: 0.3 }}
            >
              <svg width="42" height="34" viewBox="0 0 42 34" fill="none">
                <path 
                  d="M5 26L7 11L16 19L21 8L26 19L35 11L37 26H5Z" 
                  stroke="#80461B" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <circle cx="7" cy="9" r="2" fill="#80461B" />
                <circle cx="21" cy="6" r="2" fill="#80461B" />
                <circle cx="35" cy="9" r="2" fill="#80461B" />
              </svg>
            </motion.div>

            {/* 7. Sky Blue Doodle 'M' Shape (Far Right) */}
            <motion.div 
              style={{ ...styles.doodle, top: '45px', right: '35px' }}
              animate={{ 
                y: [0, -16, 0],
                rotate: [0, 12, 0]
              }}
              transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut", delay: 0.45 }}
            >
              <svg width="34" height="38" viewBox="0 0 34 38" fill="none">
                <path 
                  d="M5 32L7 8L17 22L27 8L29 32" 
                  stroke="#58B9DE" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </motion.div>

            {/* 8. Brown Doodle Heart (Right) */}
            <motion.div 
              style={{ ...styles.doodle, top: '140px', right: '40px' }}
              animate={{ 
                y: [0, -18, 0],
                scale: [1, 1.22, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path 
                  d="M16 26C16 26 5 19 5 11C5 6.5 8.5 4 12 4C14.5 4 16 6 16 6C16 6 17.5 4 20 4C23.5 4 27 6.5 27 11C27 19 16 26 16 26Z" 
                  stroke="#80461B" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </motion.div>

            {/* Dynamic Ground Shadow */}
            <motion.div 
              style={styles.groundShadow}
              animate={{
                scaleX: [1, 0.74, 1],
                scaleY: [1, 0.60, 1],
                opacity: [0.22, 0.08, 0.22],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.8,
                ease: "easeInOut",
              }}
            />

            {/* MAIN GAME CONTROLLER (Extra Bouncy with Playful Tilts & Spring Interaction) */}
            <motion.div 
              style={styles.controllerBox}
              initial={{ rotate: 18 }}
              animate={{ 
                y: [0, -28, 0],
                rotate: [18, 14, 22, 18],
                scale: [1, 1.03, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.8, 
                ease: "easeInOut" 
              }}
              whileHover={{ 
                scale: 1.08, 
                rotate: 12,
                transition: { type: "spring", stiffness: 350, damping: 12 } 
              }}
              whileTap={{ 
                scale: 0.93, 
                rotate: 24 
              }}
            >
              <svg width="340" height="230" viewBox="0 0 340 230" fill="none" style={styles.controllerSvg}>
                {/* Controller Outer Shell Outline */}
                <path 
                  d="M75 42C110 36 230 36 265 42C295 48 318 85 315 130C312 170 290 205 260 205C240 205 230 185 200 178C182 174 158 174 140 178C110 185 100 205 80 205C50 205 28 170 25 130C22 85 45 48 75 42Z" 
                  fill="#FFFFFF" 
                  stroke="#231B16" 
                  strokeWidth="5" 
                  strokeLinejoin="round" 
                />

                {/* Left Sky Blue Grip Accent */}
                <path 
                  d="M75 42C55 46 38 65 30 92C23 120 25 155 45 185C56 200 70 205 80 205C88 205 94 198 98 185C85 160 70 115 75 42Z" 
                  fill="#87CEEB" 
                />

                {/* Right Sky Blue Grip Accent */}
                <path 
                  d="M265 42C285 46 302 65 310 92C317 120 315 155 295 185C284 200 270 205 260 205C252 205 246 198 242 185C255 160 270 115 265 42Z" 
                  fill="#87CEEB" 
                />

                {/* D-Pad (Brown Cross) */}
                <g transform="translate(85, 95)">
                  <path 
                    d="M13 0H27V13H40V27H27V40H13V27H0V13H13V0Z" 
                    fill="#80461B" 
                    stroke="#231B16" 
                    strokeWidth="3.5" 
                    strokeLinejoin="round" 
                  />
                  <polygon points="20,4 17,8 23,8" fill="#A76535" />
                  <polygon points="20,36 17,32 23,32" fill="#A76535" />
                  <polygon points="4,20 8,17 8,23" fill="#A76535" />
                  <polygon points="36,20 32,17 32,23" fill="#A76535" />
                </g>

                {/* Left Analog Thumbstick */}
                <g transform="translate(138, 122)">
                  <circle cx="18" cy="18" r="22" fill="#E5F3F9" stroke="#231B16" strokeWidth="4" />
                  <circle cx="18" cy="18" r="16" fill="#80461B" stroke="#231B16" strokeWidth="3" />
                  <circle cx="18" cy="18" r="10" fill="#5C2F10" />
                </g>

                {/* Right Analog Thumbstick */}
                <g transform="translate(196, 122)">
                  <circle cx="18" cy="18" r="22" fill="#E5F3F9" stroke="#231B16" strokeWidth="4" />
                  <circle cx="18" cy="18" r="16" fill="#80461B" stroke="#231B16" strokeWidth="3" />
                  <circle cx="18" cy="18" r="10" fill="#5C2F10" />
                </g>

                {/* Four Action Buttons */}
                <g transform="translate(240, 78)">
                  {/* Top: Sky Blue */}
                  <circle cx="20" cy="6" r="7" fill="#87CEEB" stroke="#231B16" strokeWidth="3" />
                  {/* Left: Warm Brown */}
                  <circle cx="7" cy="20" r="7" fill="#80461B" stroke="#231B16" strokeWidth="3" />
                  {/* Right: Deep Sky Blue */}
                  <circle cx="33" cy="20" r="7" fill="#58B9DE" stroke="#231B16" strokeWidth="3" />
                  {/* Bottom: Light Brown */}
                  <circle cx="20" cy="34" r="7" fill="#A76535" stroke="#231B16" strokeWidth="3" />
                </g>

                {/* Center Start/Select Buttons */}
                <circle cx="152" cy="85" r="3.5" fill="#80461B" />
                <circle cx="188" cy="85" r="3.5" fill="#80461B" />
              </svg>
            </motion.div>

            {/* 9. Brown Curved Doodle Arrow */}
            <motion.div 
              style={{ ...styles.doodle, bottom: '70px', right: '120px' }}
              animate={{ 
                y: [0, -14, 0],
                x: [0, 4, 0]
              }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.4 }}
            >
              <svg width="44" height="40" viewBox="0 0 44 40" fill="none">
                <path 
                  d="M10 5C16 12 24 24 24 35M24 35L15 28M24 35L29 26" 
                  stroke="#80461B" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </motion.div>

            {/* 10. Polaroid Picture Card in Blue & Brown */}
            <motion.div 
              style={styles.polaroidCard}
              animate={{ 
                y: [0, -22, 0],
                rotate: [16, 11, 21, 16],
                scale: [1, 1.04, 1]
              }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.25 }}
              whileHover={{ rotate: 0, scale: 1.12, transition: { type: "spring", stiffness: 300 } }}
              whileTap={{ scale: 0.95 }}
            >
              <div style={styles.polaroidImage}>
                {/* Mountain Art */}
                <svg width="58" height="46" viewBox="0 0 58 46" fill="none">
                  <rect width="58" height="46" fill="#87CEEB" />
                  <circle cx="44" cy="14" r="7" fill="#80461B" />
                  <polygon points="4,46 22,22 36,46" fill="#58B9DE" />
                  <polygon points="24,46 42,16 58,46" fill="#80461B" />
                </svg>
              </div>
            </motion.div>

            {/* Small brown ticks below photo */}
            <motion.div 
              style={{ ...styles.doodle, bottom: '25px', right: '35px' }}
              animate={{ y: [0, -10, 0], opacity: [0.65, 1, 0.65] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.35 }}
            >
              <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
                <line x1="6" y1="14" x2="12" y2="4" stroke="#80461B" strokeWidth="3" strokeLinecap="round" />
                <line x1="18" y1="16" x2="24" y2="6" stroke="#80461B" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* FLOATING SECTION SEPARATOR BADGE in Sky Blue & Brown */}
      <div style={styles.sectionBadgeWrapper}>
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
          <line x1="4" y1="14" x2="12" y2="8" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="8" y1="4" x2="14" y2="6" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        <div style={styles.featuredPill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#80461B">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
          </svg>
          Featured Game
        </div>

        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
          <line x1="20" y1="14" x2="12" y2="8" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="4" x2="10" y2="6" stroke="#80461B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: 'relative',
    paddingTop: '60px',
    paddingBottom: '80px',
    overflow: 'hidden',
    backgroundColor: 'var(--bg-primary)',
  },
  bottomLeftBlob: {
    position: 'absolute',
    bottom: '-30px',
    left: '-30px',
    width: '180px',
    height: '180px',
    backgroundColor: '#87CEEB',
    borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blobSquiggle: {
    position: 'absolute',
    top: '30px',
    right: '25px',
  },
  bottomRightBlob: {
    position: 'absolute',
    bottom: '-40px',
    right: '-40px',
    width: '210px',
    height: '210px',
    backgroundColor: '#80461B',
    borderRadius: '40% 60% 40% 60% / 60% 40% 60% 40%',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blobHatching: {
    position: 'absolute',
    top: '25px',
    left: '25px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 2,
    gap: '40px',
    minHeight: '480px',
  },
  leftColumn: {
    flex: '1 1 50%',
    maxWidth: '560px',
  },
  eyebrowWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '16px',
    transform: 'rotate(-4deg)',
    transformOrigin: 'left bottom',
  },
  eyebrowRays: {
    marginTop: '-6px',
  },
  eyebrowText: {
    fontFamily: "'Caveat', cursive",
    fontSize: '1.65rem',
    fontWeight: '700',
    color: '#80461B',
    letterSpacing: '0.02em',
  },
  headline: {
    fontSize: '4.75rem',
    fontWeight: '900',
    color: 'var(--text-main)',
    lineHeight: 1.06,
    letterSpacing: '-0.03em',
    marginBottom: '22px',
  },
  highlightText: {
    color: '#80461B',
    position: 'relative',
    display: 'inline-block',
  },
  brushUnderline: {
    position: 'absolute',
    bottom: '-2px',
    left: '-5%',
    width: '110%',
    height: '18px',
    zIndex: -1,
  },
  subheading: {
    fontSize: '1.2rem',
    color: 'var(--text-muted)',
    lineHeight: 1.55,
    marginBottom: '36px',
    maxWidth: '460px',
    fontWeight: '500',
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  primaryBtnWrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  btnDoodleLeft: {
    position: 'absolute',
    top: '50%',
    left: '-24px',
    transform: 'translateY(-50%)',
  },
  primaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#87CEEB',
    color: '#1C313D',
    border: '2px solid #58B9DE',
    padding: '16px 34px',
    borderRadius: 'var(--border-radius-pill)',
    fontSize: '1.1rem',
    fontWeight: '800',
    boxShadow: 'var(--shadow-pill)',
    transition: 'all var(--transition-fast)',
  },
  secondaryBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#FFFFFF',
    color: '#80461B',
    padding: '16px 32px',
    borderRadius: 'var(--border-radius-pill)',
    fontSize: '1.1rem',
    fontWeight: '800',
    boxShadow: '0 4px 16px rgba(128, 70, 27, 0.08)',
    border: '2px solid rgba(128, 70, 27, 0.15)',
    transition: 'all var(--transition-fast)',
  },
  rightColumn: {
    flex: '1 1 50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  artWrapper: {
    position: 'relative',
    width: '480px',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paintSplash: {
    position: 'absolute',
    width: '380px',
    height: '300px',
    backgroundColor: '#D6EFF9',
    borderRadius: '45% 55% 60% 40% / 50% 60% 40% 50%',
    filter: 'blur(28px)',
    opacity: 0.9,
    zIndex: 1,
  },
  groundShadow: {
    position: 'absolute',
    bottom: '48px',
    left: '50%',
    marginLeft: '-110px',
    width: '230px',
    height: '24px',
    backgroundColor: '#231B16',
    borderRadius: '50%',
    filter: 'blur(6px)',
    zIndex: 4,
    pointerEvents: 'none',
  },
  controllerBox: {
    position: 'relative',
    zIndex: 5,
    cursor: 'pointer',
    filter: 'drop-shadow(0 12px 20px rgba(35, 27, 22, 0.10))',
  },
  controllerSvg: {
    display: 'block',
  },
  doodle: {
    position: 'absolute',
    zIndex: 6,
    pointerEvents: 'none',
  },
  polaroidCard: {
    position: 'absolute',
    bottom: '45px',
    right: '15px',
    backgroundColor: '#FFFFFF',
    padding: '8px 8px 18px 8px',
    borderRadius: '10px',
    boxShadow: '0 10px 24px rgba(35, 27, 22, 0.14)',
    border: '2px solid #231B16',
    zIndex: 7,
    cursor: 'pointer',
  },
  polaroidImage: {
    borderRadius: '4px',
    overflow: 'hidden',
    display: 'flex',
  },
  sectionBadgeWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '50px',
    position: 'relative',
    zIndex: 3,
  },
  featuredPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#D6EFF9',
    color: '#80461B',
    border: '1.5px solid rgba(128, 70, 27, 0.2)',
    padding: '7px 18px',
    borderRadius: 'var(--border-radius-pill)',
    fontWeight: '800',
    fontSize: '0.88rem',
    boxShadow: '0 2px 8px rgba(135, 206, 235, 0.35)',
  }
};

const mediaQueryStyle = `
  @media (max-width: 992px) {
    div[style*="minHeight: '480px'"] {
      flex-direction: column;
      text-align: center;
      gap: 30px;
    }
    div[style*="maxWidth: '560px'"] {
      max-width: 100%;
    }
    p[style*="maxWidth: '460px'"] {
      margin-left: auto;
      margin-right: auto;
    }
    div[style*="buttonGroup"] {
      justify-content: center;
    }
    div[style*="artWrapper"] {
      transform: scale(0.85);
      margin-top: 10px;
    }
  }

  @media (max-width: 600px) {
    h1[style*="fontSize: '4.75rem'"] {
      font-size: 3.2rem !important;
    }
    div[style*="artWrapper"] {
      transform: scale(0.7);
      width: 100%;
      height: 320px;
    }
    a[style*="primaryBtn"], a[style*="secondaryBtn"] {
      width: 100%;
      justify-content: center;
    }
    div[style*="btnDoodleLeft"] {
      display: none;
    }
  }

  a[style*="primaryBtn"]:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 28px rgba(135, 206, 235, 0.6) !important;
  }
  a[style*="secondaryBtn"]:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(128, 70, 27, 0.15) !important;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = mediaQueryStyle;
document.head.appendChild(styleSheet);

export default Hero;
