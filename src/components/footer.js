import React from 'react';
import styles from './footer.module.css'

export default (props) => (
  <div className={styles.footer}>
    <p>gila phx <span>{props.year}</span></p>
  </div>
)
