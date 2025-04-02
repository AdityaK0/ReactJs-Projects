import React from 'react'
import { useId } from 'react';

function DropList({options,title,onSelect}) {
  let id = useId()
  return (
    <div>
        <select className='border outline-none min-w-56 px-3 py-1 rounded shadow-xs shadow-black' onChange={onSelect}>
        <option value={""} disabled={true}>{`Select ${title}`}</option>     
        {options.map((el)=>(<option key={id} value={el} >{el}</option>))}
        </select>
    </div>
  )
}

export default DropList