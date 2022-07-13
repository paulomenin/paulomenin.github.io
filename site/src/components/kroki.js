import * as React from "react"

function Kroki({ files, src, alt }) {
  const file = files?.find(element => {
    return element.basename === src
  })

  return <img src={file?.url} alt={alt}></img>
}

export default Kroki
