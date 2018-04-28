import React, { Component } from "react";
import Link from 'gatsby-link';
import Helmet from 'react-helmet'

// fullpage

import FooterView from '../components/footer';
import PageHeader from '../components/page-header';

import mainStyles from '../components/about/about.module.css';

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

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year : new Date().getFullYear()
    };
  };


  twitterWindow() {
    // add in a "leaving site" screen before redirecting location
    if (typeof window !== 'undefined') {
      window.location = 'https://mailchi.mp/61694d9ee225/gila-letter';
    }
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
      <Helmet defaultTitle={`About Gila`}>
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="About Gila" />
        <html lang="en" />
      </Helmet>
            <div className={mainStyles.sectionWrapper}>
              <PageHeader header="What is Gila?" />
              <div className={mainStyles.bodyText}>
                <p>Gila is a collaborative effort to centralize and amplify the arts and music of Phoenix.
                  With its diverse culture and crucial geographical importance in our country's immigration conversation, our city is a vital and necessary contribution to the national artistic voice.
                  We want to facilitate this in radical ways.
                  We want Phoenix to be louder.
                </p>
                <p>Gila is, primarily, a handful of artists and curators working together to create an online hub for Phoenix’s arts and music.
                  We are forming a unique and desirable brand collective that will highlight the vast amount of talent living in our city.
                  Phoenix is the quintessential horizontal sprawl.
                  Gila will vertically align Phoenix’s talent, centralizing the scene and bringing talent together in a forum that demands presence.
                </p>
                <p>Gila has a few simple desires.
                  Gentrification does not have to facilitate appropriation, nor does it equate to suffocating the prevailing narrative of our city.
                  We want to embody a conscious acknowledgement of this fact.
                  We want to facilitate creation in a strip mall city where consumption is the primary language.
                  Like Siddhartha, we have found our river. Now it's time to be the ferryman.
                </p>
              </div>
              <span className={mainStyles.invert_text}><Link to="/">Home</Link></span>
            </div>

            <FooterView year={this.state.year} />

      </div>
    )
  };
}

export default AboutPage;
