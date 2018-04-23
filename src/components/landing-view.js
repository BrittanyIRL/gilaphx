import React from 'react';
import Link from 'gatsby-link';

import Media from 'react-media';

import introStyles from './intro.module.css';
import landingStyles from './landing-view.module.css';

export default (props) => (
  <div className={introStyles.section}>
    <Media query="(min-width: 501px)">
      <div className={[landingStyles.landing, landingStyles.large].join(' ')}>
        <h1>Be
          <span className={ [introStyles.invert_text, landingStyles.invert_text].join(' ') } onClick={props.onClick}>
            here.
          </span>
        </h1>
      </div>
    </Media>
    <Media query="(max-width: 500px)">
      <div className={landingStyles.landing}>
        <h1>Be
          <span className={introStyles.invert_text} onClick={props.onClick}>
            here.
          </span>
        </h1>
      </div>
    </Media>


  </div>
);
