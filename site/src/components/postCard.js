import * as React from "react"
import { Link } from "gatsby"

const PostCard = ({post}) => {
  return (
    <div className="rounded-lg bg-white p-2">
        <Link to={post.fields.slug}>
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.description || post.excerpt}</p>
          <p className="text-xs text-gray-500">{post.frontmatter.date}</p>
        </Link>
    </div>
  )
}

export default PostCard
