import * as React from "react"

const Tag = ({name}) => {
  return (
    <div className={`
      rounded-md px-1 font-bold no-underline font-sans text-sm
      bg-neutral-200 text-neutral-800
      hover:bg-yellow-200 hover:text-black`}>
      {name}
    </div>
  )
}

export default Tag
