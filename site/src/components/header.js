import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RssIcon } from '@heroicons/react/solid'

const Menu = () => {
    return (
        <nav className="
            flex
            flex-col xsm:flex-row
            space-y-1 xsm:space-y-0
            xsm:space-x-2">
            {[
                ["/articles", "Articles"],
                ["/blog", "Blog"],
                ["/tags", "Tags"],
                ["/about", "About"]
            ].map(([url, label]) => (
                <Link key={url} className="
                    font-bold px-2 rounded-full
                    hover:bg-neutral-200"
                    to={url}>
                    {label}
                </Link>
            ))}
        </nav>
    )
}

const Header = ({ title }) => {
  return (
    <header className="
        card
        flex flex-col
        m-4 gap-2
    ">
        <div className="flex flex-row justify-between">
            <Link className="font-serif font-bold text-2xl" to="/">
                <StaticImage src="../../static/favicon-32x32.png" alt="logo" className="mr-3"/>
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
