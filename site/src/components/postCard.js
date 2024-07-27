import * as React from "react"
import Link from "./link"

function PostCard({ post }) {
  return (
    <div className="group p-2 rounded-md duration-300">
      <Link href={post.fields.slug}>
        <div className="flex justify-between">
          <h3
            className="font-bold 
            text-neutral-700
            group-hover:text-purple-900
            transition-colors duration-300"
          >
            {post.frontmatter.title}
          </h3>
          {!post.fields.published && (
            <div className="not-published-tag">Not Published</div>
          )}
        </div>
        <p className="font-sans text-base text-neutral-700">
          {post.excerpt || post.frontmatter.description}
        </p>
        <p className="text-xs text-gray-500">{post.frontmatter.date}</p>
      </Link>
    </div>
  )
}

export default PostCard
