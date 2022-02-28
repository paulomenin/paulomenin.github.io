import * as React from "react"
import PostCard from "./postCard" 

const PostList = ({posts}) => {
    return (
        <div className="flex flex-col gap-2">
        {
            posts.map( (post) => { return (
            <PostCard key={post.fields.slug} post={post} />
          )})
        }
      </div>
  )
}

export default PostList
