import * as React from "react"

// Hue color values of the tags
const hueValues = [
  "0", "20", "40", "60", "80",
  "100", "120", "140", "160", "180",
  "200", "220", "240", "260", "280",
  "300", "320", "340", "360",
]

const getHSLColors = (hue) => {
  return {
    text: `hsl(${hue}, 100%, 20%)`,
    bg: `hsl(${hue}, 100%, 80%)`
  }
}

const getTagColors = (tagName) => {
  const colorIndex = tagName.split('').reduce((prev, curr) => prev + curr.charCodeAt(0), 0) % hueValues.length
  return getHSLColors(hueValues[colorIndex])
}

const Tag = ({name}) => {
  const {text, bg} = getTagColors(name)
  return (
    <>
    <div className={`rounded-md px-1 font-bold`}
         style={{color: text, backgroundColor: bg}}>
      {name}
    </div>
    </>
  )
}

export default Tag
