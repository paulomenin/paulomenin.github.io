import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/postList"

const TagIndexTemplate = ({ data, location, pageContext: { tag }}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges.map((edge) => {
      return edge.node
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={`${tag} tag`}
      />

      <div className="card mb-4">
        <h1>Posts with {tag} tag</h1>
      </div>

      <PostList posts={posts} />

    </Layout>
  )
}

export default TagIndexTemplate

export const pageQuery = graphql`
  query TagIndexPageQuery($ids: [String]!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { id: { in: $ids } }) {
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
