import React from "react";
import Helmet from 'react-helmet'


export default (props) => {
  let baseKeywords =  "Phoenix, Gila, GilaPHX, Arizona, Music, Culture";
  let titleContent = props.title;
  let keywords = props.keywords ? props.keywords + baseKeywords : baseKeywords;
  return (
    <Helmet defaultTitle={props.title}>
      <html lang="en-US" />
      <meta charset="utf-8" />
      <meta name="author" content={props.author || "GilaPHX"} />
      <meta name="description" content={props.description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={titleContent} />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="GilaPHX" />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content="./gila_small.png" />
      <meta property="twitter:image" content="./gila_small.png" />
      <meta name="twitter:title" content={titleContent} />
    </Helmet>
  )
};
