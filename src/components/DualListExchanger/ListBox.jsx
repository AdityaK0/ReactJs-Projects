import React from 'react'

function ListBox({title,items,onToggle,onSelectAll}) {
  return (
    <div className="flex-1 border rounded-lg p-4">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-medium text-lg text-gray-700">{title}</h3>
      {items.length > 0 && (
        <button
          onClick={onSelectAll}
          className="text-xs border  py-1 px-2 rounded font-medium cursor-pointer text-white bg-blue-600 hover:bg-blue-700"
        >
          Select All
        </button>
      )}
    </div>
    
    <div className="min-h-48 mb-2">
      {items.length > 0 ? (
        items.map((element, index) => (
          <div 
            key={index} 
            className={`flex items-center p-2 my-1 rounded hover:bg-gray-50 ${element.selected ? 'bg-blue-50' : ''}`}
          >
            <input 
              type="checkbox" 
              checked={element.selected} 
              onChange={() => onToggle(element)}
              className="mr-3 h-4 w-4 text-blue-600"
            />
            <span className="text-gray-800">{element.name}</span>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center h-full">
          <span className="text-gray-400 italic">No items</span>
        </div>
      )}
    </div>
    
    <div className="text-sm text-gray-500 mt-2 font-medium">
      {items.length} item{items.length !== 1 ? 's' : ''}
    </div>
  </div>
  )
}

export default ListBox