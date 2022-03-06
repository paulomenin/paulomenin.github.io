import * as React from "react"
import { Link } from "gatsby"
import Tag from "./tag"

const TagList = ({ tags }) => {
  return (
    <div className="flex gap-2 flex-wrap content-center">
      {tags.map(tag => {
        return (
          <Link className="no-underline" key={tag} to={`/tag/${tag}`}>
            <Tag name={tag} />
          </Link>
        )
      })}
    </div>
  )
}

export default TagList
