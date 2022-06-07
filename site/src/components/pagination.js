import * as React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"
import Link from "./link"

function Pagination({ pageContext }) {
  return (
    <nav className="flex justify-center w-full">
      <ul className="flex flex-wrap justify-between gap-4 w-full max-w-[700px]">
        <li className="nav-link">
          {pageContext.previousPagePath && (
            <Link
              href={pageContext.previousPagePath}
              rel="prev"
              className="flex items-center gap-1"
            >
              <ArrowLeftIcon className="pagination-arrow" />
              Previous
            </Link>
          )}
        </li>

        <li>
          {pageContext.humanPageNumber} / {pageContext.numberOfPages}
        </li>

        <li className="nav-link">
          {pageContext.nextPagePath && (
            <Link
              href={pageContext.nextPagePath}
              rel="next"
              className="flex items-center gap-1"
            >
              Next
              <ArrowRightIcon className="pagination-arrow" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
