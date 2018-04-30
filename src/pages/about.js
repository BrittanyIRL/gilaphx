import React, { Component } from "react";
import Link from 'gatsby-link';

import Head from '../components/hoc/Head/Head';

import PageHeader from '../components/page-header';
import AboutBody from '../components/about/about-body';
import Socials from '../components/about/socials';
import defaultStyles from '../components/default.module.css';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };


  twitterClick() {
    if (typeof window !== 'undefined') {
      window.location = 'https://twitter.com/gilaphx';
    }
  };

  instagramClick() {
    if (typeof window !== 'undefined') {
      window.location = 'https://www.instagram.com/gila_phx/';
    }
  };

  facebookClick() {
    if (typeof window !== 'undefined') {
      window.location = 'https://www.facebook.com/GilaPHX/';
    }
  };

  render() {
    return (
      <div>
      <Head title="About Gila" />

      <div className={defaultStyles.sectionWrapper}>
        <PageHeader header="What is Gila?" />
        <AboutBody />
        <Socials onTwitter={this.twitterClick} onInstagram={this.instagramClick} onFacebook={this.facebookClick} email="gilaphx@gmail.com"/>
      </div>

      </div>
    )
  };
}

export default AboutPage;
