import React from 'react'

function Square({value,onClick,disable,won}) {
  function handleClick()
  {
    if(!disable){
     if(!won){
      onClick()
     }
    }
  
    
  } 
  return (
    <div className='border h-30 w-30 text-4xl flex justify-center items-center cursor-pointer' onClick={handleClick} >
        { value }
    </div>
  )
}

export default Square