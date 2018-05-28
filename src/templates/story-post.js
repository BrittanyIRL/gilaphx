import React from 'react'
import Helmet from 'react-helmet';
import Link from 'gatsby-link'
import get from 'lodash/get';

import Head from '../components/hoc/Head/Head';
import styles from './blog-post.module.css';
import defaultStyles from '../components/default.module.css';
/* old img query : ?w=1180&h=400&fit=fill */
class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title') || "Gila PHX";
    let description = post.description.childMarkdownRemark.html;
    description = description.replace(/<[^>]+>/g, '');
    description = decodeURIComponent(description);

    const photographer = post.photographer ? <p>Photos : <span>{post.photographer}</span></p> : null;
    const illustrator = post.illustrator ? <p>Illustrations : <span>{post.illustrator}</span></p> : null;
    return (
      <div>
        <Head title={post.title} author={post.authors} description={description} keywords={post.tags} />
        <div className={defaultStyles.fullPageWrapper}>
          <div className={styles.leadBackgroundImage} style={{ backgroundImage : `url(${post.leadImage.file.url})`}}>
            <h1 className={styles.storyHeadline}>{post.title}</h1>
          </div>
          <div className={styles.introContainer}>
            <h2>{post.subtitle}</h2>
            <div>
              <p>Published : <date>{post.publishDate}</date></p>
              <p>Author : <author>{post.authors}</author></p>
              {photographer}
              {illustrator}
            </div>
          </div>
          <div className={defaultStyles.sectionWrapper}>
            <div
              className={styles.storyContent}
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
            <span className={defaultStyles.invertText}><Link to="/stories">More Stories</Link></span>

          </div>
        </div>
      </div>

    )
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      publishDate(formatString: "MMMM Do, YYYY")
      authors
      photographer
      tags
      description {
        childMarkdownRemark {
          html
        }
      }
      leadImage {
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
