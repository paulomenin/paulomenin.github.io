import * as React from "react"

import { ChevronDownIcon } from "@heroicons/react/outline"

const Accordion = ({ id, label, children }) => {
  const tabId = `${id}-input`
  return (
    <div className="relative box-border w-full border-[1px] rounded-lg overflow-hidden">
      <input id={tabId} type="checkbox" className="group peer hidden"></input>
      <label
        for={tabId}
        className="relative block p-4 cursor-pointer
        transition-all duration-300
        bg-white font-bold hover:text-purple-800
        peer-checked:bg-purple-800 peer-checked:text-white "
      >
        {label}
      </label>
      <ChevronDownIcon
        className="w-6 h-6 block absolute right-4 top-4
        transition-all duration-300
        peer-checked:rotate-[-180deg] peer-checked:text-white"
      />
      <div
        className="border-box overflow-hidden h-0
          peer-checked:h-auto"
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export default Accordion
