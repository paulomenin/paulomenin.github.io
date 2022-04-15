import * as React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <nav
      className="
          flex
          flex-col xsm:flex-row
          space-y-1 xsm:space-y-0
          xsm:space-x-2"
    >
      {[
        ["/article", "Articles"],
        ["/blog", "Blog"],
        ["/slidedeck", "Slide Decks"],
        ["/tags", "Tags"],
        ["/about", "About"],
      ].map(([url, label]) => (
        <Link key={url} className="menu-link" to={url}>
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default Menu
