import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Tag from "../../components/tag"

const computeTagList = (nodes) => {
  const uniqueTags = new Set()

  nodes.forEach(({frontmatter}) => {
      frontmatter.tags.forEach(tag => {
          uniqueTags.add(tag)
      })
  })

  return Array.from(uniqueTags).sort()
}

const TagsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const tagList = computeTagList(data.allMarkdownRemark.nodes)

  return (
  <Layout location={location} title={siteTitle}>
    <Seo title="All Tags" />

    <div className="
    flex flex-col
    rounded-lg bg-white m-0 p-5">

      <h1 className="font-bold text-xl mb-3">Tag List</h1>
      <div className="flex gap-2 flex-wrap">
        {
          tagList.map( (tag) => { return (
            <Link key={tag} to={`/tag/${tag}`}>
              <Tag name={tag}/>
            </Link>
          )})
        }
      </div>
    </div>


  </Layout>
  )
}

export default TagsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`
