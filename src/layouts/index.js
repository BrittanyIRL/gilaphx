import React from 'react'
import { Link, withRouter } from 'gatsby-link'
import base from './base.css'
import Container from '../components/container';
import Navigation from '../components/navigation';
import Loading from '../components/loading-view';


class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year : new Date().getFullYear()
    };

  };


  render() {
    const { location, children, history } = this.props
    let header;

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    // <Navigation />
    return (
      <Container>
        {children()}
      </Container>
    )
  }
}

export default Template;
