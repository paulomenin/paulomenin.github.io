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
        <Link className="flex items-center ml-2" to="/">
          <StaticImage
            src="../images/profile_logo_src.svg"
            alt="Logo"
            className="mr-3 w-[54px]"
            placeholder="none"
            backgroundColor="#ffffff"
          />
          <span className="font-sans font-bold text-2xl">{title}</span>
        </Link>

        <div className="items-end">
          <Link to="/rss.xml" title="RSS">
            <div className="hover:rounded-md hover:bg-neutral-200">
              <RssIcon className="h-7 w-7" />
            </div>
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
