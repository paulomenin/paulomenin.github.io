import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TechIcons from "./_techIcons"
import Accordion from "./_accordion"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <div className="card flex justify-center">
        <article
          className="lg:min-w-[700px] max-w-[700px] prose prose-neutral dark:prose-invert font-serif prose-headings:font-sans"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">About</h1>
          </header>

          <section
            className="hover:prose-a:text-purple-800 dark:hover:prose-a:text-purple-600"
            itemProp="articleBody"
          >
            <StaticImage
              className="rounded-full drop-shadow-md float-right"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../../images/profile-pic.jpg"
              width={160}
              height={160}
              quality={95}
              alt="Profile picture"
            />

            <h2>Hi, I'm Paulo Menin</h2>
            <p>
              A software engineer, architect and lifelong learner from Brazil.
            </p>
            <p>I help teams grow high-quality software solutions.</p>
            <p>
              I have over {new Date().getFullYear() - 2010} years of experience
              working in technology/research companies, which has enabled me to
              gain knowledge in different areas and programming languages.
            </p>
            <p>
              I have experience on frontend/backend development, machine
              learning with research and training of custom deep neural
              networks, embedded systems with FreeRTOS, communication protocols
              and distributed systems.
            </p>

            <h2 className="mb-2 mt-2">What I write about</h2>
            <p>This site is divided into two main categories:</p>
            <ul className="list-disc list-inside">
              <li>
                Articles: where I write about technology, tips, how-tos and
                anything related to technology.
              </li>
              <li>
                Blog: where I write about my hobbies, daily-life and other
                subjects.
              </li>
            </ul>
          </section>

          <section className="mt-4 font-sans">
            <Accordion id="tech-stack" label="Tech Stack">
              <p>
                These are some of the technologies that I have been working with
                in my career.
              </p>
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
