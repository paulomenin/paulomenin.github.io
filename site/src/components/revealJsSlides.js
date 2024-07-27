import * as React from "react"
import { useLocation } from "@reach/router"
import { PlayIcon } from "@heroicons/react/outline"
import Link from "../components/link"

function RevealJsSlides({ src, title, fullscreen }) {
  const location = useLocation()
  const heightClass = fullscreen ? "h-screen" : "h-96"
  const borderClass = fullscreen
    ? "outline-none"
    : "outline outline-purple-800 rounded p-1"
  return (
    <div className={`${borderClass}`}>
      <div className={`w-full ${heightClass}`}>
        <iframe className="w-full h-full" src={src}></iframe>
      </div>
      {!fullscreen && (
        <div className="flex justify-between items-center mt-1">
          <span className="block italic">{title}</span>
          <Link href={`${location.pathname}show`} forceExternal>
            <div className="tag-link py-1">
              <PlayIcon className="h-5 w-5" />
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default RevealJsSlides
