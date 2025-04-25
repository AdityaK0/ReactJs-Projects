import React from 'react'

function Tab({title,handleTab,isActive}) {
  return (
    <div className='flex rounded justify-center cursor-pointer shadow-black shadow-xs min-h-10 min-w-52 ' style={{background:isActive?"gray":""}} onClick={handleTab}>
      <span className='text-center m-auto'>{title}</span>
    </div>
  )
}

export default Tab