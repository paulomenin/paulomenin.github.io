import * as React from "react"
import simpleIcons from "simple-icons"

function SimpleIcon({ slug, label, fillColor }) {
  const icon = simpleIcons.Get(slug)
  return (
    <div className="flex flex-col items-center justify-start font-sans min-w-[88px] max-w-[88px]">
      <div
        className="w-10 h-10 justify-self-center p-1
      dark:bg-white dark:rounded-md"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: fillColor }}
        >
          <path d={icon.path}></path>
        </svg>
      </div>
      <div className="text-center leading-tight">{label}</div>
    </div>
  )
}

export default SimpleIcon
