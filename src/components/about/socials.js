import React from 'react'
import socialStyles from './socials.module.css';
import defaultStyles from '../default.module.css';
// twitterClick
// instagramClick
export default (props) => (
  <div className={socialStyles.socialsContainer}>
    <ul>
      <li onClick={props.onInstagram}><span className={defaultStyles.invertText}>Instagram</span></li>
      <li onClick={props.onTwitter}><span className={defaultStyles.invertText}>Twitter</span></li>
      <li onClick={props.onFacebook}><span className={defaultStyles.invertText}>Facebook</span></li>
    </ul>
    <p>Or, email us at {props.email}</p>
  </div>
);
