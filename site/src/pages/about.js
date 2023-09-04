import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Accordion from "../components/accordion"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutContent from "../../content/aboutPage/aboutContent"
import AboutHistory from "../../content/aboutPage/aboutHistory"
import TechIcons from "../../content/aboutPage/techIcons"

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
            <div className="float-right text-center">
              <StaticImage
                className="rounded-full shadow-md shadow-black/60"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../../images/profile-pic.jpg"
                width={160}
                height={160}
                quality={95}
                alt="Profile picture"
              />
            </div>
            <AboutContent />
          </section>

          <section className="pt-8 pb-2 font-sans flex flex-col gap-4">
            <Accordion id="my-history" label="My History">
              <AboutHistory />
            </Accordion>

            <Accordion id="tech-stack" label="Tech Stack">
              <TechIcons />
            </Accordion>
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
