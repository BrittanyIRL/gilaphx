import React from 'react';
import styles from './story-preview.module.css';
import Link from 'gatsby-link';
import Media from 'react-media';

// image query ?fit=scale&w=350&h=196
export default (props) => {
  let article = props.article;
  let previewImage = article.previewImage ? <img src={`${article.previewImage.file.url}`} alt={article.previewImage.title} /> : null;
  let abstract = article.abstract ? (<p
    dangerouslySetInnerHTML={{
      __html: article.abstract.childMarkdownRemark.html,
    }}
  />) : null;
  let containerStyles = [styles.previewContainer];
  console.log("props; ", props);
  if(props.even){
    containerStyles = [styles.previewContainer, styles.even];
  }

  return (
    <div className={containerStyles.join(' ')}>
      <div className={styles.previewImage}>
        {previewImage}
      </div>

      <div className={styles.previewContent}>
        <h2>
          {article.title}
        </h2>
        <h3>{article.subtitle}</h3>
        <p className={styles.small}><date>{article.publishDate}</date> | <author>{article.authors}</author></p>
        {abstract}
        <Link to={`/stories/${article.slug}`}>Read More</Link>
      </div>
    </div>
  );
}
