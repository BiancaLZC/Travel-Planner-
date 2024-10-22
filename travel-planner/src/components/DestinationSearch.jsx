import React, { useState } from 'react';

const DestinationSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addDestination = () => {
    if (searchTerm) {
      setSelectedDestinations([...selectedDestinations, searchTerm]);
      setSearchTerm(''); // resetăm câmpul de căutare
    }
  };

  return (
    <div>
      <h2>Select your destination</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Type a destination..."
      />
      <button onClick={addDestination}>Add</button>

      <ul>
        {selectedDestinations.map((destination, index) => (
          <li key={index}>{destination}</li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationSearch;
