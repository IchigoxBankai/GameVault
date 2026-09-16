import React from 'react';
import Hero from '../components/Hero';
import FeaturedGame from '../components/FeaturedGame';
import GameGrid from '../components/GameGrid';
import About from '../components/About';
import Developer from '../components/Developer';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedGame />
      <GameGrid />
      <About />
      <Developer />
    </div>
  );
};

export default Home;
