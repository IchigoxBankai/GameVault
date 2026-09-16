import React, { useState } from 'react';
import GameCard from './GameCard';
import { games, getAllCategories } from '../data/games';

const GameGrid = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...getAllCategories()];

  const filteredGames = filter === 'All' 
    ? games 
    : games.filter(game => game.categories.includes(filter));

  return (
    <section id="games" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>Game Library</h2>
          
          <div style={styles.filters}>
            {categories.map(cat => (
              <button 
                key={cat} 
                style={{
                  ...styles.filterBtn,
                  ...(filter === cat ? styles.filterBtnActive : {})
                }}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={styles.grid}>
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '48px',
    gap: '24px',
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--text-main)',
    margin: 0,
  },
  filters: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  filterBtn: {
    background: 'var(--bg-card)',
    border: '1px solid rgba(45, 45, 50, 0.1)',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
  },
  filterBtnActive: {
    background: 'var(--color-primary)',
    color: '#fff',
    borderColor: 'var(--color-primary)',
    boxShadow: '0 4px 12px rgba(108, 92, 231, 0.3)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '32px',
  }
};

export default GameGrid;
