import React from 'react'
import MouseTracker from './MouseTracker'

function Mouse() {
  return (
    <div className=''>
      <MouseTracker render={({x,y})=>(<p>The mouse is at ({x},{y})</p>)}/>
    </div>
  )
}

export default Mouse