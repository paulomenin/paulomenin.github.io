import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="flex flex-col" data-is-root-path={isRootPath}>
      <Header />
      <main className="mb-auto mx-4 relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
