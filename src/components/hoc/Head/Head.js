import React from "react";
import Helmet from 'react-helmet'


export default (props) => {
  return (
    <Helmet defaultTitle={props.title}>
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Gila" />
      <html lang="en" />
    </Helmet>
  )
}
