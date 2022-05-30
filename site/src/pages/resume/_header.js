import * as React from "react"

function Header({ name, title }) {
  return (
    <div className={`card h-20`}>
      <div className="h-full text-center">
        <h1 className="text-3xl uppercase">{name}</h1>
        <h3 className="uppercase mt-2">{title}</h3>
      </div>
    </div>
  )
}

export default Header
