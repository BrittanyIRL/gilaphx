import React from 'react'
import { Link, withRouter } from 'gatsby-link'
import base from './base.css'
import Container from '../components/container';
import Navigation from '../components/navigation/navigation';
import Loading from '../components/loading-view';


class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year : new Date().getFullYear(),
      showNavigation : false
    };
    this.navigationClosedHandler = this.navigationClosedHandler.bind(this);
    this.navigationToggleHandler = this.navigationToggleHandler.bind(this);

  };

  navigationClosedHandler(){
    console.log("CLOSING NAV ");
    this.setState( { showNavigation: false } );
  }

  navigationToggleHandler(){
    console.log('CLICK SEEN! ', this);
      this.setState( ( prevState ) => {
          return { showNavigation: !prevState.showNavigation };
      } );
  }


  render() {
    const { location, children, history } = this.props
    let header;

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    return (
      <Container>
        <Navigation
          open={this.state.showNavigation}
          closed={this.navigationClosedHandler}
          navigationToggleClicked={this.navigationToggleHandler}
        />
        {children()}
      </Container>
    )
  }
}

export default Template;
