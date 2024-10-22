import React from 'react';
import './App.css';
import Header from './components/Header';
import DestinationSearch from './components/DestinationSearch';
import DailyPlanner from './components/DailyPlanner';

function App() {
  return (
    <div className="App">
      <Header />
      <DestinationSearch />
       <DailyPlanner />
    </div>
  );
}

export default App;
