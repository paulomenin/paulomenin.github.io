import * as React from "react"
import { Link } from "gatsby"

const PostCard = ({ post }) => {
  return (
    <div className="card group">
      <Link to={post.fields.slug}>
        <div className="flex justify-between">
          <h3
            className="font-bold text-neutral-700
            group-hover:text-purple-800
            transition-all duration-300"
          >
            {post.frontmatter.title}
          </h3>
          {!post.fields.published && (
            <div className="not-published-tag">Not Published</div>
          )}
        </div>
        <p className="font-serif text-base text-[#404040]">
          {post.frontmatter.description || post.excerpt}
        </p>
        <p className="text-xs text-gray-500">{post.frontmatter.date}</p>
      </Link>
    </div>
  )
}

export default PostCard
