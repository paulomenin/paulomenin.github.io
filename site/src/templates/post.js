import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TagList from "../components/tagList"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      {console.log(post.fields.draft)}
      <div className="card flex justify-center">
        <article
          className="prose prose-neutral font-serif prose-headings:font-sans"
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
            <TagList tags={post.frontmatter.tags} />
            <div className="flex gap-2 justify-between">
              <div>{post.frontmatter.date}</div>
              <div className="mr-2">{post.fields.readingTime.text}</div>
            </div>
          </header>

          <section
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>

      {(previous || next) && (
        <nav className="card mt-4">
          <ul className="flex justify-evenly">
            <li>
              {previous && (
                <Link className="nav-link" to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link className="nav-link" to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
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
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
