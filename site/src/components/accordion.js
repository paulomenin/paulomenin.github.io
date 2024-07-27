import * as React from "react"

import { ChevronDownIcon } from "@heroicons/react/outline"

function Accordion({ id, label, children }) {
  const tabId = `${id}-input`

  const [opened, setOpened] = React.useState(false)

  const toggle = () => {
    setOpened(!opened)
  }

  return (
    <div
      className="relative w-full rounded-lg overflow-hidden p-0
      border-[1px] border-neutral-200
      bg-neutral-200"
    >
      <input
        id={tabId}
        type="checkbox"
        className="peer hidden"
        checked={opened}
        readOnly
      />
      <label
        className="relative block p-4 m-0 cursor-pointer
        transition-all duration-300
        font-bold
        bg-neutral-200 text-neutral-800 hover:text-purple-900
        peer-checked:bg-purple-800 peer-checked:text-neutral-200 peer-checked:hover:text-neutral-200"
        onClick={toggle}
      >
        {label}
      </label>
      <ChevronDownIcon
        className="w-6 h-6 block absolute right-4 top-4 cursor-pointer
        transition-all duration-300
        peer-checked:rotate-[-180deg] 
        text-neutral-800 peer-checked:text-neutral-200"
        onClick={toggle}
      />
      <div
        className="border-box overflow-hidden h-0
          peer-checked:h-auto
          bg-white"
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export default Accordion
