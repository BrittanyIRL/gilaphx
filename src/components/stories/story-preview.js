import React from 'react';
import styles from './story-preview.module.css';
import Link from 'gatsby-link';
import Media from 'react-media';

// image query ?fit=scale&w=350&h=196
export default (props) => {
  let article = props.article;
  let containerStyles = [styles.previewContainer];
  console.log("props; ", props);
  if(props.even){
    containerStyles = [styles.previewContainer, styles.even];
  }

  return (
    <div className={containerStyles.join(' ')}>
      <div className={styles.previewImage}>
        <img src={`${article.heroImage.file.url}`} alt="" />
      </div>

      <div className={styles.previewContent}>
        <h2>
          {article.title}
        </h2>
        <p className={styles.small}><author>Author Name</author> | <date>{article.publishDate}</date></p>
        <p
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
        <Link to={`/stories/${article.slug}`}>Read More</Link>
      </div>
    </div>
  );
}
