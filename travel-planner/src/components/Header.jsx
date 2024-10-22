import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Travel Planner</h1>
            <nav>
                <a href="/">Home</a> | <a href="/plan">Plan Your Trip</a>
            </nav>
        </header>
    );
};
const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

export default Header;
