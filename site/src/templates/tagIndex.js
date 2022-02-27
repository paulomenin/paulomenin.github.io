import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TagIndexTemplate = ({ data, location, pageContext: { tag }}) => {
  const allMarkdownRemark = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={`Tag ${tag}`}
      />

      <div className="rounded-lg bg-white p-3">
      <h1>{tag}</h1>

      <ul>
      {allMarkdownRemark.edges.map(({ node }) => {
        return (
          <li key={node.frontmatter.title}>
            <Link to={`${node.fields.slug}`}>
              {node.frontmatter.title}
            </Link>
            <div>
              <time>{node.frontmatter.date}</time>
            </div>
          </li>
        )
      })}
      </ul>  

      </div>

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
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
