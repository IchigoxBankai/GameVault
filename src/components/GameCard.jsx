import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Gamepad2, Smartphone } from 'lucide-react';

const GameCard = ({ game }) => {
  return (
    <motion.div
      style={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: 'var(--shadow-md)' }}
      transition={{ duration: 0.3 }}
    >
      <div style={styles.imageContainer}>
        {game.image ? (
          <img src={game.image} alt={game.title} style={styles.image} />
        ) : (
          <div style={styles.placeholderImage}>
            <Gamepad2 size={48} color="#80461B" />
          </div>
        )}
      </div>

      <div style={styles.content}>
        <div style={styles.header}>
          <h3 style={styles.title}>{game.title}</h3>
          <span style={styles.status}>{game.status}</span>
        </div>

        <p style={styles.tagline}>{game.tagline}</p>

        <div style={styles.meta}>
          <div style={styles.metaItem}>
            <Gamepad2 size={16} />
            <span>{game.categories[0]}</span>
          </div>
          <div style={styles.metaItem}>
            <Smartphone size={16} />
            <span>{game.platform}</span>
          </div>
        </div>

        <div style={styles.tags}>
          {game.technologies.slice(0, 3).map(tech => (
            <span key={tech} style={styles.tag}>{tech}</span>
          ))}
        </div>

        <div style={styles.actions}>
          <a
            href={game.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.downloadBtn}
          >
            <Download size={18} />
            APK
          </a>
          <Link to={`/games/${game.id}`} style={styles.detailsBtn}>
            Details
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const styles = {
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 'var(--border-radius-lg)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    border: '1.5px solid rgba(128, 70, 27, 0.08)',
  },
  imageContainer: {
    height: '210px',
    width: '100%',
    backgroundColor: '#1C313D',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 40%',
    transition: 'transform 0.3s ease',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  title: {
    fontSize: '1.5rem',
    margin: 0,
    fontWeight: '800',
  },
  status: {
    fontSize: '0.75rem',
    fontWeight: '800',
    backgroundColor: '#D6EFF9',
    color: '#80461B',
    border: '1px solid rgba(128, 70, 27, 0.2)',
    padding: '4px 10px',
    borderRadius: '12px',
  },
  tagline: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    marginBottom: '16px',
    flexGrow: 1,
  },
  meta: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: 'var(--text-muted)',
    fontSize: '0.85rem',
    fontWeight: '600',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '24px',
  },
  tag: {
    backgroundColor: 'var(--bg-primary)',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#80461B',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    marginTop: 'auto',
  },
  downloadBtn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    backgroundColor: '#87CEEB',
    color: '#1C313D',
    border: '1.5px solid #58B9DE',
    padding: '12px',
    borderRadius: 'var(--border-radius-pill)',
    fontWeight: '800',
    transition: 'all var(--transition-fast)',
    boxShadow: '0 4px 14px rgba(135, 206, 235, 0.4)',
  },
  detailsBtn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    backgroundColor: 'var(--bg-primary)',
    color: '#80461B',
    border: '1.5px solid rgba(128, 70, 27, 0.15)',
    padding: '12px',
    borderRadius: 'var(--border-radius-pill)',
    fontWeight: '700',
    transition: 'background-color var(--transition-fast)',
  }
};

export default GameCard;
