import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TagListContainer from "../../components/tagListContainer"

const TagsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
  <Layout location={location} title={siteTitle}>
    <Seo title="All Tags" />
    <div className="
    flex flex-col
    rounded-lg bg-white m-0 p-5">
      <h1 className="mb-3">Tag List</h1>
      <TagListContainer />
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
  }
`
