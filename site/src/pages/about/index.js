import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TechIcons from "./techIcons"
import Accordion from "./accordion"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <div className="flex flex-col gap-4">
        <div className="w-full card p-4">
          <h2 className="mb-3">Hi, I'm Paulo Menin</h2>
          <p>
            I'm a software engineer, architect and lifelong learner from Brazil.
          </p>
          <p>I help teams grow high-quality software solutions.</p>

          <h2 className="mb-2 mt-2">What I write about</h2>
          <p>This site is divided into two main categories:</p>
          <ul className="list-disc list-inside">
            <li>
              Articles: where I write about technology, tips, how-tos, anything
              related to technology.
            </li>
            <li>
              Blog: where I write about my hobbies, daily-life and other
              subjects.
            </li>
          </ul>

          <div className="mt-4">
            <Accordion id="tech-stack" label="Tech Stack">
              <TechIcons />
            </Accordion>
          </div>
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
  }
`
