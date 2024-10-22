import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Travel Planner</h1>
      <nav className={styles.nav}>
        <a href="/">Home</a> | <a href="/plan">Plan Your Trip</a>
      </nav>
    </header>
  );
};

export default Header;
