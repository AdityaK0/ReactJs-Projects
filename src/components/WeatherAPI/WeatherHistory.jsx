import React, { useEffect, useState } from 'react'

function WeatherHistory({history,onSelect}) {

  return (
    <div className='flex flex-col gap-2 rounded border rounder p-2 w-42 min-h-62 max-h-62 overflow-y-auto'>
    
    <h3>WeatherHistory</h3>
    {
        history.length>0 ?
        <ul className='flex flex-col gap-1'>
           {
            history.map((el)=> (<li className='bg-black text-white p-1 rounded cursor-pointer' onClick={()=>onSelect(el)}>{el}</li>))
           }
        </ul>
        :
        <span>No History</span>
    }


    </div>
  )
}

export default WeatherHistory