import * as React from "react"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  return (
    <div className="rounded-lg bg-white p-2">
      <Link to={post.fields.slug}>
        <h3>{post.frontmatter.title}</h3>
        <p className="font-serif text-base text-[#404040]">
          {post.frontmatter.description || post.excerpt}
        </p>
        <p className="text-xs text-gray-500">{post.frontmatter.date}</p>
      </Link>
    </div>
  )
}

export default PostCard
