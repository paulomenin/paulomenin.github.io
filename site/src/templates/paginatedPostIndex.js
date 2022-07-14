import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PaginatedIndex from "../components/paginatedIndex"

function PaginatedPostIndex({ data, location, pageContext }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={pageContext.pageTitle} />
      <PaginatedIndex
        title={pageContext.pageTitle}
        posts={posts}
        pageContext={pageContext}
      />
    </Layout>
  )
}

export default PaginatedPostIndex

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!, $category: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fields: { category: { eq: $category }, visible: { eq: true } } }
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
