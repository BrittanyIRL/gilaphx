import React from 'react'
import { Link, withRouter } from 'gatsby-link'
import base from './base.css'
import Container from '../components/container';
import Navigation from '../components/navigation/navigation';
import Loading from '../components/loading-view';
import FooterView from '../components/footer';


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
    this.setState( { showNavigation: false } );
  }

  navigationToggleHandler(){
      this.setState( ( prevState ) => {
          return { showNavigation: !prevState.showNavigation };
      } );
  }


  render() {
    const { location, children, history } = this.props;
    console.log(this.props);
    let header;

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    /** Hide navigation on home ("/") **/
    let navigation = null;
    if(this.props.location.pathname == "/"){
      navigation = null;
    } else {
      navigation = (
        <Navigation
          open={this.state.showNavigation}
          closed={this.navigationClosedHandler}
          navigationToggleClicked={this.navigationToggleHandler}
        />
      );
    }

    return (
      <Container>
        {navigation}
        {children()}
        <FooterView year={this.state.year} />
      </Container>
    )
  }
}

export default Template;
