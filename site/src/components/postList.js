import * as React from "react"
import PostCard from "./postCard"

function PostList({ posts }) {
  const hasPosts = posts.length > 0
  return (
    <>
      {!hasPosts && (
        <p className="ml-2">Nothing here at the moment. Come back later!</p>
      )}
      {hasPosts && (
        <div className="flex flex-col gap-2">
          {posts.map(post => {
            return <PostCard key={post.fields.slug} post={post} />
          })}
        </div>
      )}
    </>
  )
}

export default PostList
