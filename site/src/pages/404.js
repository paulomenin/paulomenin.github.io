import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function NotFoundPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  React.useEffect(() => {
    setTimeout(() => {
      document.location.href = "/"
    }, 8000)
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <div className="card w-full flex justify-center align-middle">
        <div>
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist...</p>
          <p>Redirecting to home page...</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
