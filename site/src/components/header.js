import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RssIcon } from "@heroicons/react/solid"
import Menu from "./menu"

const Header = ({ title }) => {
  return (
    <header
      className="
        card
        flex flex-col
        m-4 gap-2
    "
    >
      <div className="flex flex-row justify-between">
        <Link className="font-sans font-bold text-2xl ml-2" to="/">
          <StaticImage
            src="../images/logo.svg"
            alt="Logo"
            className="mr-3 w-[65px]"
            placeholder="none"
            backgroundColor="#ffffff"
          />
          {title}
        </Link>

        <div className="items-end text-gray-700 hover:text-black">
          <Link to="/rss.xml" title="RSS">
            <RssIcon className="h-7 w-7" />
          </Link>
        </div>
      </div>

      <div className="">
        <Menu />
      </div>
    </header>
  )
}

export default Header
