import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Head from '../components/hoc/Head/Head';

// fullpage
import {SectionsContainer, Section} from 'react-fullpage';
// page views
import LandingView from '../components/landing/landing-view';
import IntroView from '../components/landing/intro-view';

let fullpage_options = {
  arrowNavigation : true,
  delay : 500,
  scrollingSpeed : 400,
 sectionClassName : 'section',
 scrollBar : true,
 navigation : true,
 verticalAlign : false,
 recordHistory : false
};

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
        <Head title="Gila PHX" />

        <SectionsContainer {...fullpage_options}>
          <Section><LandingView onClick={this.hereRedirect} /></Section>
          <Section>
            <IntroView />
          </Section>
        </SectionsContainer>
      </div>
    )
  };
}

export default RootIndex;
