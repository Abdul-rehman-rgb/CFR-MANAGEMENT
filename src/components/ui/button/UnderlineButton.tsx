import React from 'react'

const UnderlineButton = ({ Children = "text", onClick, className = "" }) => {
  return (
    <button onClick={onClick} className="pb-2 font-semibold text-[#23235F] border-b-2 border-[#5D5FEF] dark:text-white">
            {Children}
          </button>
  )
}

export default UnderlineButton