import React, { useState } from 'react';
import styles from './DestinationSearch.module.css';

const DestinationSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addDestination = () => {
    if (searchTerm) {
      setSelectedDestinations([...selectedDestinations, searchTerm]);
      setSearchTerm('');
    }
  };

  return (
    <div className={styles.searchContainer}>
      <h2>Select your destination</h2>
      <input
        type="text"
        className={styles.searchInput}
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Type a destination..."
      />
      <button className={styles.addButton} onClick={addDestination}>
        Add
      </button>

      <ul className={styles.destinationList}>
        {selectedDestinations.map((destination, index) => (
          <li key={index}>{destination}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationSearch;
