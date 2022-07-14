import * as React from "react"
import Pagination from "./pagination"
import PostList from "./postList"

function PaginatedIndex({ title, pageContext, posts }) {
  return (
    <>
      <div className="card flex justify-center">
        <div className="lg:min-w-[700px] max-w-[700px]">
          <div className="flex justify-between mb-4 ml-2">
            <h1>{title}</h1>
          </div>

          <PostList posts={posts} />
        </div>
      </div>

      {pageContext.numberOfPages > 1 && (
        <div className="flex justify-between card mt-4">
          <Pagination pageContext={pageContext} />
        </div>
      )}
    </>
  )
}

export default PaginatedIndex
