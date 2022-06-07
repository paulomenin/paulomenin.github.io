import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PaginatedIndex from "../components/paginatedIndex"

function TagIndexTemplate({ data, location, pageContext }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const pageTitle = `During: ${pageContext.year}`
  const posts = data.allMdx.edges.map(edge => {
    return edge.node
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={pageTitle} />
      <PaginatedIndex
        title={pageTitle}
        posts={posts}
        pageContext={pageContext}
      />
    </Layout>
  )
}

export default TagIndexTemplate

export const pageQuery = graphql`
  query YearIndexPageQuery($ids: [String]!, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
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
            published
          }
        }
      }
    }
  }
`
