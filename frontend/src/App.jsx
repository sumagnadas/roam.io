import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import DiscoverPage from './components/DiscoverPage';
import EventsPage from './components/EventsPage';
import LocalsPage from './components/LocalsPage';
import HelpButton from './components/HelpButton';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF8D4' }}>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <HomePage 
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 'discover' && <DiscoverPage />}
      {currentPage === 'events' && <EventsPage />}
      {currentPage === 'locals' && <LocalsPage />}
      
      <HelpButton />

      <Footer />
    </div>
  );
};

export default App;