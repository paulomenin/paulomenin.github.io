import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/postList"
import Pagination from "../components/pagination"

function TagIndexTemplate({ data, location, pageContext }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.edges.map(edge => {
    return edge.node
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`During ${pageContext.year}`} />
      <div className="card flex justify-center">
        <div className="lg:min-w-[700px] max-w-[700px]">
          <div className="flex justify-between mb-4 ml-2">
            <h1>During: {pageContext.year}</h1>
          </div>

          <PostList posts={posts} />
        </div>
      </div>

      {pageContext.numberOfPages > 1 && (
        <div className="flex justify-between card mt-4">
          <Pagination pageContext={pageContext} />
        </div>
      )}
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
