import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/postList"
import Pagination from "../components/pagination"

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All Blog posts" />

      <div className="flex justify-between card mb-4">
        <h1>All Blog Entries</h1>
      </div>

      <PostList posts={posts} />

      { pageContext.numberOfPages > 1 && (
        <div className="flex justify-between card mt-4">
          <Pagination pageContext={pageContext} />
        </div>
      )}

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: {category: {eq: "blog"}} }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
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
          tags
        }
      }
    }
  }
`
