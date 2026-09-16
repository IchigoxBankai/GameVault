import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GameDetails from './pages/GameDetails';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/:id" element={<GameDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
