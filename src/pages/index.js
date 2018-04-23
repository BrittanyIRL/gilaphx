import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// fullpage
import {SectionsContainer, Section, Footer} from 'react-fullpage';
// page views
import LandingView from '../components/landing-view';
import IntroView from '../components/intro-view';
import FooterView from '../components/footer';


class RootIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year : new Date().getFullYear()
    };

  };

  hereRedirect() {
    // add in a "leaving site" screen before redirecting location
    if (typeof window !== 'undefined') {
      window.location = 'https://mailchi.mp/61694d9ee225/gila-letter';
    }
  };

  options = {
    arrowNavigation : true,
    delay : 500,
    scrollingSpeed : 400,
   sectionClassName : 'section',
   scrollBar : true,
   navigation : true,
   verticalAlign : false,
   recordHistory : false
  };

  render() {
    return (
      <div>
        <Footer>
          <FooterView year={this.state.year} />
        </Footer>
        <SectionsContainer {...this.options}>
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
