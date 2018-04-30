import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Head from '../components/hoc/Head/Head';

import defaultStyle from '../components/default.module.css';
import styles from '../components/noPageFound.module.css';

class NoPageFound extends React.Component {
  render() {
    return (
      <div className={defaultStyle.fullPageWrapper}>
        <Head title="Everything is fine" />
        <div className={styles.container}>
          <h1 className={defaultStyle.invertText}><Link to="/">Everything is fine, <br />go home.</Link></h1>
        </div>
      </div>
    );
  }
};

export default NoPageFound;
