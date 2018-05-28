import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Head from '../components/hoc/Head/Head';

// page views
import LandingView from '../components/landing/landing-view';
import IntroView from '../components/landing/intro-view';

import defaultStyles from '../components/default.module.css';

let homeDescription = "<p>Gila. Seen afar in a Baltimore dream. An eastern province bordering our fair city. A tributary cutting through its heart. A dragon roaming the desert sunset. A people whose culture outlives us all.</p> <p>Gila. Pronounced \ǵē-lə\. Like so much of our modernity, an intentional misplacement. Appropriation disguised as ignorance. A wrong as a reminder. To learn and unlearn.</p> <p>Gila. Nomads preserving the culture of the native tongue. Art activism through radical collectivism. Bridges built in and out of knowledge. Eternal joy. </p>";

class RootIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  hereRedirect() {
    // add in a "leaving site" screen before redirecting location
    if (typeof window !== 'undefined') {
      window.location = 'https://mailchi.mp/61694d9ee225/gila-letter';
    }
  };


  render() {
    return (
      <div>
        <Head title="Gila PHX" description={homeDescription} />
          <div className={defaultStyles.fullPageWrapper}>
            <LandingView onClick={this.hereRedirect} />
          </div>
          <div className={defaultStyles.fullPageWrapper}>
            <IntroView />
          </div>
      </div>
    )
  };
}

export default RootIndex;
