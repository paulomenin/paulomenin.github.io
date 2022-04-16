import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
    <div className="flex flex-col gap-2 items-center">
      <StaticImage
        className="rounded-full shadow-md shadow-black/60"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={90}
        height={90}
        quality={95}
        alt="Profile picture"
      />
      <div className="text-center">
        <p className="font-bold text-lg text-neutral-800 dark:text-neutral-200">
          {author?.name || null}
        </p>
        <p>{author?.summary || null}</p>
      </div>
    </div>
  )
}

export default Bio
