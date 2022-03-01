import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TechIcons from "./techIcons"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <div className="flex flex-col gap-4">
        <div className="w-full card p-4">
          <h2 className="mb-3">About me</h2>
          <p>Description</p>
        </div>

        <div className="w-full card p-4">
          <h2>Tech Stack</h2>
          <p className="mb-3 mt-3">
            These are some of the technologies that I had worked with in my
            carrer.
          </p>
          <TechIcons />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

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
