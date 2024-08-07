import * as React from "react"
import { Helmet } from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import Header from "./header"
import Footer from "./footer"
import Link from "./link"
import Kroki from "./kroki"
import RevealJsSlides from "./revealJsSlides"
import TeX from "@matejmazur/react-katex"

const mdxComponents = { a: Link, Kroki, TeX, RevealJsSlides }

function Layout({ location, children }) {
  const rootPath = `/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Helmet>
        <html className={"light"} />
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
