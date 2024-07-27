import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutContent from "../../content/aboutPage/aboutContent"

function AboutPage({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <div className="card flex justify-center">
        <article
          className="lg:min-w-[700px] max-w-[700px] font-sans
          theme-prose"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">About</h1>
          </header>

          <section className="" itemProp="articleBody">
            <AboutContent />
          </section>
        </article>
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
  }
`
