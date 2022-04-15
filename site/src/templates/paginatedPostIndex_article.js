import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/postList"
import Pagination from "../components/pagination"

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All Articles" />

      <div className="flex justify-between card mb-4">
        <h1>All Articles</h1>
      </div>

      <PostList posts={posts} />

      {pageContext.numberOfPages > 1 && (
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
    allMdx(
      filter: { fields: { category: { eq: "article" }, visible: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
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
          tags
        }
      }
    }
  }
`
