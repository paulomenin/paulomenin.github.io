import * as React from "react"
import { Helmet } from "react-helmet"
import useDarkMode from "use-dark-mode"
import { MDXProvider } from "@mdx-js/react"
import Header from "./header"
import Footer from "./footer"

import Link from "./link"
import RevealJsSlides from "./revealJsSlides"

const mdxComponents = { RevealJsSlides, a: Link }

function Layout({ location, children }) {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  const darkMode = useDarkMode(false, {
    onChange: () => {}, // Avoid hook to add unwanted class on body element.
  })

  return (
    <>
      <Helmet>
        <html className={`${darkMode.value ? "dark" : "light"}`} />
      </Helmet>

      <div className="flex flex-col h-full" data-is-root-path={isRootPath}>
        <Header />
        <MDXProvider components={mdxComponents}>
          <main className="mb-auto mx-4 relative">{children}</main>
        </MDXProvider>
        <Footer />
      </div>
    </>
  )
}

export default Layout
