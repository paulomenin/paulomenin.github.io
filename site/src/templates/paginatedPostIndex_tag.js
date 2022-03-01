import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/postList"
import Pagination from "../components/pagination"

const TagIndexTemplate = ({ data, location, pageContext}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges.map((edge) => {
      return edge.node
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={`${pageContext.tag} tag`}
      />

      <div className="card mb-4">
        <h1>Posts with {pageContext.tag} tag</h1>
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

export default TagIndexTemplate

export const pageQuery = graphql`
  query TagIndexPageQuery($ids: [String]!, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { id: { in: $ids } }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
      ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
            description
          }
          fields {
            slug
            category
          }
        }
      }
    }
  }
`
