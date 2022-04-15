import * as React from "react"

const RevealJsSlides = ({ src, children }) => {
  return (
    <>
      <div className="w-full h-96">
        {src && <iframe className="w-full h-full" src={src}></iframe>}
        {!src && (
          <>
            <h1>internal</h1>
            {children}
          </>
        )}
      </div>
    </>
  )
}

export default RevealJsSlides
