import * as React from "react"
import { Link } from "gatsby"

const Pagination = ({ pageContext }) => {
  return (
    <div className="flex justify-evenly w-full">
      <div className="min-w-[100px]">
        {pageContext.previousPagePath && (
          <Link
            className="nav-link"
            to={pageContext.previousPagePath}
            rel="next"
          >
            ← Previous
          </Link>
        )}
      </div>

      <div>
        {pageContext.humanPageNumber} / {pageContext.numberOfPages}
      </div>

      <div className="min-w-[100px]">
        {pageContext.nextPagePath && (
          <Link className="nav-link" to={pageContext.nextPagePath} rel="next">
            Next →
          </Link>
        )}
      </div>
    </div>
  )
}

export default Pagination
