import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import SignUpView from '../components/sign-up-view';
import Footer from '../components/footer';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    // @TODO move this to template so footer stays consistent but not duplicative
    this.state = { year : new Date().getFullYear()};
  }


  render() {
    return (
      <div>
        <SignUpView />
        <Footer year={this.state.year}/>
      </div>
    )
  }
}

export default SignUp;
