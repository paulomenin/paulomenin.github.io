import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"
import PostList from "../components/postList"
import TagListContainer from "../components/tagListContainer"

const LandingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const blogPosts = data.blogPosts.nodes
  const articlePosts = data.articlePosts.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Recent Posts" />

      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
        <div className="flex flex-col shrink-0 grow sm:grow-0 basis-1/4 gap-2">
          <div className="card">
            <Bio />
          </div>
          <div className="card text-center">
            <h1 className="mb-3">Tags</h1>
            <TagListContainer />
          </div>
        </div>

        <div className="basis-1/2 grow">
          <div>
            <div className="flex justify-between card mb-4">
              <h1>Recent Articles</h1>
              <Link className="menu-link" to="/article">
                <span className="inline-block align-middle">All Articles</span>
              </Link>
            </div>
            <PostList posts={articlePosts} />
          </div>
          <div>
            <div className="flex justify-between card mb-4 mt-4">
              <h1>Recent Blog Entries</h1>
              <Link className="menu-link" to="/blog">
                <span className="inline-block align-middle">
                  All Blog Posts
                </span>
              </Link>
            </div>
            <PostList posts={blogPosts} />
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
    blogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: { fields: { category: { eq: "blog" }, visible: { eq: true } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
          category
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    articlePosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: { fields: { category: { eq: "article" }, visible: { eq: true } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
          category
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
