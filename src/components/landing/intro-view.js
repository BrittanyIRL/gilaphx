import React from 'react';
import Link from 'gatsby-link';

import Media from 'react-media';

import introStyles from './intro.module.css';
import introViewStyles from './intro-view.module.css';

import PageLink from '../UI/PageLink/PageLink';

// <li className={introStyles.invert_text}><Link to="/events">events</Link></li>
// <li className={introStyles.invert_text}><Link to="/stories">stories</Link></li>

export default () => (
  <div className={introStyles.section}>
    <Media query="(min-width: 1001px)">
      <div className={ [introViewStyles.intro, introViewStyles.large].join(' ') }>
        <div className={ [introViewStyles.introText, introViewStyles.large].join(' ') }>
        	<h1>Gila<span>phx</span></h1>
          <div className={introViewStyles.about}>
    					<h3>“Pick apart the past, you’re not going back.”</h3>
    					<p><span> Gila.</span> Seen afar in a Baltimore dream. An eastern province bordering our fair city. A tributary cutting through its heart. A dragon roaming the desert sunset. A people whose culture outlives us all.</p>
    					<p><span> Gila.</span> Pronounced \{String.fromCharCode(501) + String.fromCharCode(275) + "-" + "l" + String.fromCharCode(601)}\. Like so much of our modernity, an intentional misplacement. Appropriation disguised as ignorance. A wrong as a reminder. To learn and unlearn.</p>
    					<p><span> Gila.</span> Nomads preserving the culture of the native tongue. Art activism through radical collectivism. Bridges built in and out of knowledge. Eternal joy.</p>
    				</div>
        </div>
        <div className={ [introViewStyles.introNav, introViewStyles.large].join(' ') }>
          <ul>
            <li>
              <PageLink to="/about" text="about"/>
            </li>
          </ul>
        </div>
      </div>
    </Media>
    <Media query="(max-width: 1000px)">
      <div className={introViewStyles.intro}>
        <div className={introViewStyles.introText}>
        	<h1>Gila<span>phx</span></h1>
          <div className={introViewStyles.about}>
    					<h3>“Pick apart the past, you’re not going back.”</h3>
    					<p><span> Gila.</span> Seen afar in a Baltimore dream. An eastern province bordering our fair city. A tributary cutting through its heart. A dragon roaming the desert sunset. A people whose culture outlives us all.</p>
    					<p><span> Gila.</span> Pronounced \{String.fromCharCode(501) + String.fromCharCode(275) + "-" + "l" + String.fromCharCode(601)}\. Like so much of our modernity, an intentional misplacement. Appropriation disguised as ignorance. A wrong as a reminder. To learn and unlearn.</p>
    					<p><span> Gila.</span> Nomads preserving the culture of the native tongue. Art activism through radical collectivism. Bridges built in and out of knowledge. Eternal joy.</p>
    				</div>
        </div>
        <div className={introViewStyles.introNav}>
          <ul>
            <PageLink to="/about" />
          </ul>
        </div>
      </div>
    </Media>
  </div>
);
