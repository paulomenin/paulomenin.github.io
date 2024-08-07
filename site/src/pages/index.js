import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/postList"
import TagListContainer from "../components/tagListContainer"
import YearListContainer from "../components/yearListContainer"

function LandingPage({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const blogPosts = data.blogPosts.nodes
  const articlePosts = data.articlePosts.nodes
  const slidesPosts = data.slidesPosts.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Latest Posts" />

      <div className="card flex justify-center">
        <div className="lg:min-w-[700px] max-w-[700px]">
          {articlePosts.length > 0 && (
            <>
              <div className="flex justify-between mb-4 ml-2">
                <h1>Latest Articles</h1>
              </div>
              <PostList posts={articlePosts} />
              <hr className="separator mt-4" />
            </>
          )}

          {blogPosts.length > 0 && (
            <>
              <div className="flex justify-between mb-4 ml-2 mt-4">
                <h1>Latest Blog Posts</h1>
              </div>
              <PostList posts={blogPosts} />
              <hr className="separator mt-4" />
            </>
          )}

          {blogPosts.length > 0 && (
            <>
              <div className="flex justify-between mb-4 ml-2 mt-4">
                <h1>Latest Slide Decks</h1>
              </div>
              <PostList posts={slidesPosts} />
              <hr className="separator mt-4" />
            </>
          )}

          <div className="ml-2 mt-4">
            <div className="flex justify-between mb-4">
              <h1>Tags</h1>
            </div>
            <TagListContainer />
            <div className="h-4" />
            <YearListContainer />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    blogPosts: allMdx(
      filter: { fields: { category: { eq: "blog" }, visible: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      nodes {
        excerpt
        fields {
          slug
          category
          published
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    articlePosts: allMdx(
      filter: { fields: { category: { eq: "article" }, visible: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      nodes {
        excerpt
        fields {
          slug
          category
          published
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    slidesPosts: allMdx(
      filter: {
        fields: { category: { eq: "slidedeck" }, visible: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      nodes {
        excerpt
        fields {
          slug
          category
          published
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
