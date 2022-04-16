import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TagListContainer from "../../components/tagListContainer"
import YearListContainer from "../../components/yearListContainer"

const TagsIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All Tags" />

      <div className="card flex justify-center">
        <div className="lg:min-w-[700px] max-w-[700px]">
          <div className="flex justify-between mb-4">
            <h1 className="mb-3">All Tags</h1>
          </div>

          <TagListContainer />
          <div className="h-4" />
          <YearListContainer />
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
  }
`
