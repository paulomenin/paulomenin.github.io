import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import TagList from "./tagList"

const computeTagList = nodes => {
  const uniqueTags = new Set()

  nodes.forEach(({ frontmatter }) => {
    frontmatter.tags.forEach(tag => {
      uniqueTags.add(tag)
    })
  })

  return Array.from(uniqueTags).sort()
}

const TagListContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { visible: { eq: true } } }) {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `)

  const tagList = computeTagList(data.allMarkdownRemark.nodes)

  return <TagList tags={tagList} />
}

export default TagListContainer
