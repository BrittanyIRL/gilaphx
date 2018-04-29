import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Head from '../components/hoc/Head/Head';

import StoryPreview from '../components/stories/story-preview';

import defaultStyles from '../components/default.module.css';


class StoryIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div>
        <Head title="Gila Stories" />
          <div className={defaultStyles.fullPageWrapper}>
            {posts.map(({ node }, index ) => {
              let is_even = index % 2 === 0;
              return (
                <StoryPreview key={index} article={node} even={is_even}/>
              )
            })}
        </div>
      </div>
    )
  }
}

export default StoryIndex

export const pageQuery = graphql`
  query StoryIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            file {
              url
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
