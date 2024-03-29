import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  CalendarIcon,
  ClockIcon,
  PencilAltIcon,
} from "@heroicons/react/outline"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"

import Layout from "../components/layout"
import Link from "../components/link"
import Seo from "../components/seo"
import TagList from "../components/tagList"
import InlineBio from "../components/inlineBio"

function BlogPostTemplate({ data, location }) {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const krokiFiles = data.kroki.nodes.map(node => {
    return {
      basename: node.parent.base,
      url: node.childrenFile?.at(0)?.publicURL,
    }
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="card flex justify-center">
        <article
          className="theme-prose lg:min-w-[700px] max-w-[700px] "
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            {!post.fields.published && (
              <div className="not-published-tag">
                Not Published
                {post.frontmatter.draft && <span> marked as DRAFT</span>}
              </div>
            )}

            <h1 itemProp="headline">{post.frontmatter.title}</h1>

            <div className="flex gap-1 justify-between mb-4">
              <InlineBio />
              <div className="flex flex-col justify-evenly font-sans text-sm">
                <div className="m-0 p-0 flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  Posted on {post.frontmatter.date}
                </div>
                {post.frontmatter.updated && (
                  <div className="m-0 p-0 flex items-center gap-1">
                    <PencilAltIcon className="h-4 w-4" />
                    Edited on {post.frontmatter.updated}
                  </div>
                )}
                <div className="m-0 p-0 flex items-center gap-1">
                  <ClockIcon className="h-4 w-4" />
                  {post.fields.readingTime.text}
                </div>
              </div>
            </div>

            <TagList tags={post.frontmatter.tags} />
          </header>

          <section className="mt-4" itemProp="articleBody">
            <MDXRenderer krokiFiles={krokiFiles}>{post.body}</MDXRenderer>
          </section>
        </article>
      </div>

      {(previous || next) && (
        <nav className="flex justify-center card mt-4">
          <ul className="flex flex-wrap justify-between gap-4 w-full max-w-[700px]">
            <li className="nav-link">
              {previous && (
                <Link
                  href={previous.fields.slug}
                  rel="prev"
                  className="flex items-center gap-1"
                >
                  <ArrowLeftIcon className="pagination-arrow" />
                  {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className="nav-link">
              {next && (
                <Link
                  href={next.fields.slug}
                  rel="next"
                  className="flex items-center gap-1"
                >
                  {next.frontmatter.title}
                  <ArrowRightIcon className="pagination-arrow" />
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $pathGlob: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        description
        tags
        draft
      }
      fields {
        readingTime {
          text
        }
        published
      }
    }
    kroki: allKroki(filter: { fileAbsolutePath: { glob: $pathGlob } }) {
      nodes {
        childrenFile {
          publicURL
        }
        parent {
          ... on File {
            base
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
