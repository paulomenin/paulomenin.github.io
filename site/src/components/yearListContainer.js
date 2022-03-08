import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import TagList from "./tagList"

const computeYearList = groups => {
  const yearList = groups.map(group => group.fieldValue)

  return yearList.sort().reverse()
}

const YearListContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { visible: { eq: true } } }) {
        group(field: fields___year) {
          fieldValue
        }
      }
    }
  `)

  const tagList = computeYearList(data.allMarkdownRemark.group)

  return <TagList tags={tagList} prefix="year" />
}

export default YearListContainer
