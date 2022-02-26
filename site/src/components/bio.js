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
        <div className="flex gap-2 items-center">
            <StaticImage
                className="rounded-full"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/profile-pic.jpg"
                width={60}
                height={60}
                quality={95}
                alt="Profile picture"
            />
            <div>
              <p className="font-bold text-xl">
                  {author?.name || null}
              </p>
              <p>
                  {author?.summary || null}
              </p>
            </div>
        </div>
    )
}

export default Bio
