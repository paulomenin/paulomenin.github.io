import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import TagList from "./tagList"

function computeTagList(nodes) {
  const uniqueTags = new Set()

  nodes.forEach(({ frontmatter }) => {
    frontmatter.tags.forEach(tag => {
      uniqueTags.add(tag)
    })
  })

  return Array.from(uniqueTags).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  )
}

function TagListContainer() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fields: { visible: { eq: true } } }) {
        nodes {
          frontmatter {
            tags
          }
        }
      }
    }
  `)

  const tagList = computeTagList(data.allMdx.nodes)

  return <TagList tags={tagList} />
}

export default TagListContainer
