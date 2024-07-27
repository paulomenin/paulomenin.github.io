import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Link from "./link"

function InlineBio() {
  const data = useStaticQuery(graphql`
    query InlineBioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)
  const author = data.site.siteMetadata?.author

  return (
    <Link className="no-underline" href="/about">
      <div className="flex flex-nowrap gap-2 h-16 items-center">
        <StaticImage
          className="rounded-full shadow-md shadow-black/60"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../images/profile-pic.jpg"
          width={52}
          height={52}
          quality={95}
          alt="Profile picture"
        />
        <div
          className="flex flex-col justify-evenly h-16
          font-sans text-base text-neutral-600"
        >
          <p className="font-bold text-sm p-0 m-0">{author?.name || null}</p>
          <p className="p-0 m-0 text-sm">{author?.summary || null}</p>
        </div>
      </div>
    </Link>
  )
}

export default InlineBio
