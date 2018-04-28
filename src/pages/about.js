import React, { Component } from "react";
import Link from 'gatsby-link';
import Helmet from 'react-helmet'

import Head from '../components/hoc/Head/Head';

// fullpage

import PageHeader from '../components/page-header';
import AboutBody from '../components/about/about-body';
import defaultStyles from '../components/default.module.css';

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
    };
  };


  twitterWindow() {
    // add in a "leaving site" screen before redirecting location
    if (typeof window !== 'undefined') {
      window.location = 'https://mailchi.mp/61694d9ee225/gila-letter';
    }
  };

  render() {
    return (
      <div>
      <Head title="About Gila" />

      <div className={defaultStyles.sectionWrapper}>
        <PageHeader header="What is Gila?" />
        <AboutBody />
      </div>

      </div>
    )
  };
}

export default AboutPage;
