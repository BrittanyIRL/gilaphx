import React from 'react';
import Link from 'gatsby-link';

import styles from './navigation.module.css';
import Backdrop from '../UI/Backdrop/Backdrop';

export default (props) => {
  let attachedClasses = [styles.navigation, styles.Close];
  if (props.open) {
      attachedClasses = [styles.navigation, styles.Open];
  }
  return (
    <div>
      <div className={styles.navigationLogo} onClick={props.navigationToggleClicked}>
      </div>

      <nav role="navigation" className={attachedClasses.join(' ')} onClick={props.closed}>
        <p className={styles.closeX} onClick={props.closed}>x</p>
        <h2>
          <Link to="/">Gila</Link>
        </h2>

        <ul>
          <li className={styles.navigationItem}>
            <Link to="/about" activeStyle={{ color: '#E5E5E5' }}>About</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/stories" activeStyle={{ color: '#E5E5E5' }}>Stories</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/events" activeStyle={{ color: '#E5E5E5' }}>Events</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};
