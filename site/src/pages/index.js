import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"
import PostList from "../components/postList"
import TagListContainer from "../components/tagListContainer"
import YearListContainer from "../components/yearListContainer"

const LandingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const blogPosts = data.blogPosts.nodes
  const articlePosts = data.articlePosts.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Recent Posts" />

      <div className="flex flex-wrap flex-col gap-4 sm:flex-row sm:gap-2">
        <div className="flex flex-col shrink-0 grow sm:grow-0 basis-1/4 gap-2">
          <div className="card">
            <Bio />
          </div>
          <div className="card text-center">
            <h1 className="mb-3">Tags</h1>
            <TagListContainer />
            <div className="h-4" />
            <YearListContainer />
          </div>
        </div>

        <div className="basis-1/2 grow">
          <div>
            <div className="flex justify-between card mb-4">
              <h1>Recent Articles</h1>
              <Link className="menu-link" to="/article">
                <span className="inline-block align-middle font-normal">
                  All Articles
                </span>
              </Link>
            </div>
            <PostList posts={articlePosts} />
          </div>
          <div>
            <div className="flex justify-between card mb-4 mt-4">
              <h1>Recent Blog Posts</h1>
              <Link className="menu-link" to="/blog">
                <span className="inline-block align-middle font-normal">
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
    blogPosts: allMdx(
      filter: { fields: { category: { eq: "blog" }, visible: { eq: true } } }
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
  }
`
