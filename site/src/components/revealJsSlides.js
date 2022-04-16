import * as React from "react"

const RevealJsSlides = ({ src, fullscreen }) => {
  const heightClass = fullscreen ? "h-screen" : "h-96"
  return (
    <>
      <div className={`w-full ${heightClass}`}>
        <iframe className="w-full h-full" src={src}></iframe>
      </div>
    </>
  )
}

export default RevealJsSlides
