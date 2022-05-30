import * as React from "react"
import Link from "./link"
import Tag from "./tag"

function TagList({ tags, prefix }) {
  const urlPrefix = prefix || "tag"
  return (
    <div className="flex gap-2 flex-wrap content-center">
      {tags.map(tag => {
        const tagKey = tag.toLowerCase()
        return (
          <Link
            className="no-underline"
            key={tagKey}
            href={`/${urlPrefix}/${tagKey}`}
          >
            <Tag name={tag} />
          </Link>
        )
      })}
    </div>
  )
}

export default TagList
