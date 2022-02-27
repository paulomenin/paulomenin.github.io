import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"

const LandingPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Recent Posts" />

      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <div className="rounded-lg p-2 bg-white" >
            <Bio />
          </div>
          <div className="rounded-lg p-2 bg-white text-center" >
            <p className="font-bold">Categories</p>
          </div>
        </div>
        <div className="items-end flex-grow bg-blue-400">
          <div className="rounded-lg p-2 bg-white">
            <h1 className="font-bold text-xl">Recent Posts</h1>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
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
