import React from "react";
import Link from 'gatsby-link';
import styles from './PageLink.module.css';

export default (props) => {
  return (
    <span className={styles.invert_text}><Link to={props.to}>{props.text}</Link></span>

  )
}
