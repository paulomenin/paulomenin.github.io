import * as React from "react"
import { Link as GatsbyLink } from "gatsby"

function Link({ href, children, forceExternal = false, ...rest }) {
  const isInternal = href.startsWith("/")

  if (isInternal && !forceExternal) {
    return (
      <GatsbyLink to={href} {...rest}>
        {children}
      </GatsbyLink>
    )
  }

  const isSamePage = href.startsWith("#")
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={href}
      target={isSamePage ? null : "_blank"}
      rel={isSamePage ? null : "noopener noreferrer nofollow"}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link
