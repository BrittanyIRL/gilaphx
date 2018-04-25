import React from 'react';
import Link from 'gatsby-link';

import styles from './navigation.module.css'

export default () => (
  <div>
  <div className={styles.navigationLogo}></div>

  <nav role="navigation" className={styles.navigation}>
    <h2><Link to="/">Gila</Link></h2>
    <ul>
      <li className={styles.navigationItem}>
        <Link to="/about">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/stories">Stories</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/events">Events</Link>
      </li>
    </ul>
  </nav>
  </div>
)
