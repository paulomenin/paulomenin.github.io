import * as React from "react"
import { Link, graphql } from "gatsby"

import Seo from "../components/seo"
import RevealJsSlides from "../components/revealJsSlides"

const SlideShowTemplate = ({ data, location }) => {
  const post = data.mdx

  return (
    <div>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <RevealJsSlides src={post.frontmatter.slide_url} fullscreen />
    </div>
  )
}

export default SlideShowTemplate

export const pageQuery = graphql`
  query SlideShowBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        slide_url
      }
      fields {
        published
      }
    }
  }
`
