import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/postList"
import Pagination from "../components/pagination"

const PaginatedPostIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={pageContext.pageTitle} />

      <div className="card flex justify-center">
        <div className="lg:min-w-[700px] max-w-[700px]">
          <div className="flex justify-between mb-4 ml-2">
            <h1>{pageContext.pageTitle}</h1>
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
