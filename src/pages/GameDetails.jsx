import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Code } from 'lucide-react';
import { getGameById } from '../data/games';
import ScreenshotGallery from '../components/ScreenshotGallery';
import DownloadCard from '../components/DownloadCard';

const GameDetails = () => {
  const { id } = useParams();
  const game = getGameById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!game) {
    return (
      <div className="container" style={styles.notFound}>
        <h2>Game not found</h2>
        <Link to="/" style={styles.backBtn}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.banner}>
        {game.banner ? (
          <div style={styles.bannerImageWrapper}>
            <img src={game.banner} alt={`${game.title} Banner`} style={styles.crispBannerImage} />
            <div style={styles.crispBannerOverlay} />
          </div>
        ) : game.image ? (
          <div style={styles.bannerImageWrapper}>
            <img src={game.image} alt={game.title} style={styles.bannerImage} />
            <div style={styles.bannerOverlay}>
              <h1 style={styles.bannerTitle}>{game.title}</h1>
            </div>
          </div>
        ) : (
          <div style={styles.placeholderBanner}>
            <h1 style={styles.bannerTitle}>{game.title}</h1>
          </div>
        )}
      </div>

      <div className="container" style={styles.container}>
        <div style={styles.headerRow}>
          <Link to="/" style={styles.backLink}>
            <ChevronLeft size={20} />
            Back to Home
          </Link>
          <a href={game.githubUrl} target="_blank" rel="noopener noreferrer" style={styles.githubBtn}>
            <Code size={18} />
            Source Code
          </a>
        </div>

        <div style={styles.contentGrid}>
          <div style={styles.mainContent}>
            <h1 style={styles.title}>{game.title}</h1>
            <h2 style={styles.tagline}>"{game.tagline}"</h2>
            
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>About the Game</h3>
              <p style={styles.description}>{game.description}</p>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Features</h3>
              <ul style={styles.featureList}>
                {game.features.map((feature, i) => (
                  <li key={i} style={styles.featureItem}>
                    <span style={styles.bullet}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Tech Stack</h3>
              <div style={styles.tags}>
                {game.technologies.map(tech => (
                  <span key={tech} style={styles.tag}>{tech}</span>
                ))}
              </div>
            </div>

            <ScreenshotGallery screenshots={game.screenshots} />
          </div>

          <div style={styles.sidebar}>
            <div style={styles.stickySidebar}>
              <DownloadCard game={game} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    paddingBottom: '80px',
  },
  banner: {
    height: '360px',
    width: '100%',
    backgroundColor: '#1C313D',
    marginBottom: '40px',
    position: 'relative',
    overflow: 'hidden',
  },
  bannerImageWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  crispBannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
  crispBannerOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(28,49,61,0.5) 100%)',
    pointerEvents: 'none',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 30%',
    filter: 'blur(3px) brightness(0.65)',
    transform: 'scale(1.05)',
  },
  bannerOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(28,49,61,0.85) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderBanner: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--color-secondary)',
    color: '#fff',
  },
  bannerTitle: {
    fontSize: '3.5rem',
    color: '#FFFFFF',
    fontWeight: '800',
    textShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
    letterSpacing: '-0.5px',
  },
  container: {
    position: 'relative',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  backLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'var(--text-muted)',
    fontWeight: '600',
    transition: 'color var(--transition-fast)',
  },
  githubBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'var(--bg-card)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: '600',
    boxShadow: 'var(--shadow-sm)',
    transition: 'all var(--transition-fast)',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '48px',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  title: {
    fontSize: '3.5rem',
    margin: 0,
    lineHeight: 1.1,
  },
  tagline: {
    fontSize: '1.5rem',
    color: 'var(--color-primary)',
    margin: 0,
    fontWeight: '700',
  },
  section: {
    marginTop: '16px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '16px',
    color: 'var(--text-main)',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: 'var(--text-muted)',
  },
  featureList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '1.1rem',
    color: 'var(--text-main)',
  },
  bullet: {
    width: '8px',
    height: '8px',
    backgroundColor: 'var(--color-primary)',
    borderRadius: '50%',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  tag: {
    backgroundColor: 'var(--bg-card)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--text-main)',
    border: '1px solid rgba(45, 45, 50, 0.1)',
  },
  sidebar: {
    position: 'relative',
  },
  stickySidebar: {
    position: 'sticky',
    top: '100px',
  },
  notFound: {
    padding: '120px 0',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  },
  backBtn: {
    backgroundColor: 'var(--color-primary)',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: 'var(--border-radius-lg)',
    fontWeight: '700',
  }
};

const mediaQueryStyle = `
  @media (max-width: 992px) {
    div[style*="gridTemplateColumns: '2fr 1fr'"] {
      grid-template-columns: 1fr !important;
    }
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = mediaQueryStyle;
document.head.appendChild(styleSheet);

export default GameDetails;
