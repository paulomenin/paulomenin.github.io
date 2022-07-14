import * as React from "react"
import { noFlashScript } from "./src/scripts/noflash"

export function onRenderBody({ setPreBodyComponents }) {
  setPreBodyComponents([
    <script
      key="no-flash-script-for-dark-mode"
      dangerouslySetInnerHTML={{ __html: noFlashScript }}
    />,
  ])
}
