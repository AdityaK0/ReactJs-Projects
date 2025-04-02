import React, { useState } from 'react'

function MouseTracker({render}) {
  const [position,setPosition]= useState({"x":0,"y":0})

  const handleMouseMoving = (event)=>{
     setPosition({x:event.clientX,y:event.clientY});
  }

  return (
    <div className=' h-screen flex-col flex font-semibold text-2xl text-white bg-amber-400 justify-center items-center' onMouseMove={handleMouseMoving} >
          <h1> MousTracker</h1>   
          <h3>Move the mouse inside this DIV</h3>
      
      {render(position)}
    </div>

  )
}

export default MouseTracker