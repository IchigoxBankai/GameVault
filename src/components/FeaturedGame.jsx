import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ChevronRight } from 'lucide-react';
import { getGameById } from '../data/games';

const FeaturedGame = () => {
  const game = getGameById('doodlerush');

  if (!game) return null;

  return (
    <section id="featured" style={styles.section}>
      <div className="container">
        <motion.div 
          style={styles.card}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div style={styles.content}>
            <div style={styles.badge}>FEATURED PICK</div>
            <h2 style={styles.title}>{game.title}</h2>
            <h3 style={styles.subtitle}>"{game.tagline}"</h3>
            <p style={styles.description}>{game.description}</p>
            
            <div style={styles.tags}>
              {game.technologies.map(tech => (
                <span key={tech} style={styles.tag}>{tech}</span>
              ))}
            </div>

            <div style={styles.actions}>
              <a href={game.downloadUrl} target="_blank" rel="noopener noreferrer" style={styles.downloadBtn}>
                <Download size={20} />
                Download APK
              </a>
              <Link to={`/games/${game.id}`} style={styles.detailsBtn}>
                View Details
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
          
          <div style={styles.imageContainer}>
            {game.image ? (
              <img src={game.image} alt={game.title} style={styles.featuredImage} />
            ) : (
              <div style={styles.illustrationBox}>
                <div style={styles.screenCard}>
                  <h1 style={styles.screenTitle}>DoodleRush</h1>
                  <p style={styles.screenSub}>Fast & Playful Action</p>
                  <div style={styles.screenDoodles}>
                    <span>★</span>
                    <span>✦</span>
                    <span>●</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    paddingTop: '20px',
    paddingBottom: '80px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 'var(--border-radius-lg)',
    padding: '48px',
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '48px',
    boxShadow: 'var(--shadow-md)',
    alignItems: 'center',
    border: '1.5px solid rgba(128, 70, 27, 0.08)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  badge: {
    display: 'inline-block',
    alignSelf: 'flex-start',
    backgroundColor: '#D6EFF9',
    color: '#1C313D',
    border: '1.5px solid #87CEEB',
    padding: '4px 14px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '800',
    letterSpacing: '1px',
  },
  title: {
    fontSize: '3rem',
    color: 'var(--text-main)',
    margin: 0,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: '1.35rem',
    color: '#80461B',
    margin: 0,
    fontWeight: '800',
  },
  description: {
    fontSize: '1.05rem',
    color: 'var(--text-muted)',
    lineHeight: 1.6,
  },
  tags: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
    marginTop: '4px',
    marginBottom: '8px',
  },
  tag: {
    backgroundColor: 'var(--bg-primary)',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#80461B',
  },
  actions: {
    display: 'flex',
    gap: '16px',
    marginTop: '12px',
    flexWrap: 'wrap',
  },
  downloadBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#87CEEB',
    color: '#1C313D',
    border: '1.5px solid #58B9DE',
    padding: '14px 28px',
    borderRadius: 'var(--border-radius-pill)',
    fontSize: '1rem',
    fontWeight: '800',
    boxShadow: 'var(--shadow-pill)',
    transition: 'transform var(--transition-fast)',
  },
  detailsBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'var(--bg-primary)',
    color: '#80461B',
    border: '1.5px solid rgba(128, 70, 27, 0.15)',
    padding: '14px 24px',
    borderRadius: 'var(--border-radius-pill)',
    fontSize: '1rem',
    fontWeight: '800',
    transition: 'background-color var(--transition-fast)',
  },
  imageContainer: {
    width: '100%',
    height: '340px',
    backgroundColor: '#E5F3F9',
    borderRadius: '24px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '24px',
  },
  illustrationBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  screenCard: {
    backgroundColor: '#87CEEB',
    border: '3px solid #80461B',
    width: '78%',
    height: '80%',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 16px 36px rgba(135, 206, 235, 0.4)',
    color: '#1C313D',
    textAlign: 'center',
    padding: '20px',
    transform: 'rotate(3deg)',
  },
  screenTitle: {
    fontSize: '2.2rem',
    fontWeight: '900',
    color: '#1C313D',
    marginBottom: '4px',
  },
  screenSub: {
    fontSize: '0.95rem',
    color: '#80461B',
    fontWeight: '700',
  },
  screenDoodles: {
    display: 'flex',
    gap: '12px',
    marginTop: '16px',
    fontSize: '1.2rem',
    color: '#80461B',
  }
};

const mediaQueryStyle = `
  @media (max-width: 992px) {
    div[style*="gridTemplateColumns: '1.1fr 0.9fr'"] {
      grid-template-columns: 1fr !important;
      padding: 32px !important;
    }
  }
  @media (max-width: 576px) {
    div[style*="actions"] {
      flex-direction: column;
    }
    a[style*="downloadBtn"], a[style*="detailsBtn"] {
      width: 100%;
      justify-content: center;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = mediaQueryStyle;
document.head.appendChild(styleSheet);

export default FeaturedGame;
