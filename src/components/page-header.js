import React from 'react'
import headerStyles from './page-header.module.css';

export default (props) => (
  <div className={headerStyles.container}>
    <h1>{props.header}</h1>
  </div>
);
