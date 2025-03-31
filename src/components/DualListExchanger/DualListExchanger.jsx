import React from 'react';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import ListBox from './ListBox';
import ExchangeButtons from './ExchangeButtons';

function DualListExchanger() {
  const [list1, setList1] = useState([
    { name: "HTML", selected: false },
    { name: "CSS", selected: false },
    { name: "JavaScript", selected: false },
    { name: "React", selected: false }
  ]);
  
  const [list2, setList2] = useState([
    { name: "Node.js", selected: false },
    { name: "Python", selected: false },
    { name: "Django", selected: false },
    { name: "TypeScript", selected: false }
  ]);
      
    const canMoveRight = list1.length > 0; 
    const canMoveLeft = list2.length > 0;        

  function handleCheckedList1(element) {
    setList1(prevlist =>
      prevlist.map(el => element.name === el.name ? {...el, selected: !el.selected} : el)
    );
  }
    
  function handleCheckedList2(element) {
    setList2(prevlist =>
      prevlist.map(el => element.name === el.name ? {...el, selected: !el.selected} : el)
    );
  }
  
  function moveItemToList2() {
    let selectedItem = list1.filter(item => item.selected);
    let remainingItem = list1.filter(item => !item.selected);
    setList1(remainingItem);
    setList2([...list2, ...selectedItem.map((el) => ({...el, selected: false}))]); 
  }
  
  function moveItemToList1() {
    let selectedItem = list2.filter(item => item.selected);
    let remainingItem = list2.filter(item => !item.selected);
    setList2(remainingItem);
    setList1([...list1, ...selectedItem.map((el) => ({...el, selected: false}))]); 
  }

  function moveAllToList2() {
    setList2([...list2, ...list1.map(item => ({ ...item, selected: false }))]);
    setList1([]);
  }
  
  function moveAllToList1() {
    setList1([...list1, ...list2.map(item => ({ ...item, selected: false }))]);
    setList2([]);
  }
   
  function selectAllList1() {
    setList1(prevList => prevList.map(item => ({...item, selected: true})));
  }

  function UnselectAllList1() {
    setList1(prevList => prevList.map(item => ({...item, selected: false})));
  }

  function selectAllList2() {
    setList2(prevList => prevList.map(item => ({...item, selected: true})));
  }

  return (
    <div className="flex h-screen justify-center flex-col items-center bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dual Listbox with Item Exchange</h2>

      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-4 max-w-3xl w-full">
        {/* <div className="flex-1 border rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-lg text-gray-700">Frontend</h3>
            {list1.length > 0 && (
              <button
                onClick={selectAllList1}
                className="text-xs border  py-1 px-2 rounded font-medium cursor-pointer text-white bg-blue-600 hover:bg-blue-700"
              >
                Select All
              </button>
            )}
          </div>
          
          <div className="min-h-48 mb-2">
            {list1.length > 0 ? (
              list1.map((element, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-2 my-1 rounded hover:bg-gray-50 ${element.selected ? 'bg-blue-50' : ''}`}
                >
                  <input 
                    type="checkbox" 
                    checked={element.selected} 
                    onChange={() => handleCheckedList1(element)}
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
            {list1.length} item{list1.length !== 1 ? 's' : ''}
          </div>
        </div> */}
        <ListBox title={"Frontend"} items={list1} onToggle={handleCheckedList1} onSelectAll={selectAllList1}/>
        {/* <div className="flex md:flex-col justify-center items-center gap-2 py-4">
          <button 
            className={`p-2 rounded-full ${list1.length > 0 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            onClick={moveAllToList2}
            disabled={list1.length === 0}
            title="Move all to right"
          >
            <ChevronsRight size={18} />
          </button>
          
          <button  
            className={`p-2 rounded-full ${anyList1Checked ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            onClick={moveItemToList2} 
            disabled={!anyList1Checked}
            title="Move selected to right"
          >
            <ArrowRight size={18} />
          </button>
          
          <button  
            className={`p-2 rounded-full ${anyList2Checked ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            onClick={moveItemToList1} 
            disabled={!anyList2Checked}
            title="Move selected to left"
          >
            <ArrowLeft size={18} />
          </button>
          
          <button 
            className={`p-2 rounded-full ${list2.length > 0 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            onClick={moveAllToList1}
            disabled={list2.length === 0}
            title="Move all to left"
          >
            <ChevronsLeft size={18} />
          </button>
        </div> */}
        <ExchangeButtons
        moveAllToRight={moveAllToList2}
        moveSelectedToRight={moveItemToList2}
        moveSelectedToLeft={moveItemToList1}
        moveAllToLeft={moveAllToList1}
        list1={list1}
        list2={list2}
        />

        
        {/* <div className="flex-1 border rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-lg text-gray-700">Backend</h3>
            {list2.length > 0 && (
              <button
                onClick={selectAllList2}
                className="text-xs border  py-1 px-2 rounded font-medium cursor-pointer text-white bg-blue-600 hover:bg-blue-700"


              >
                Select All
              </button>
            )}
          </div>
          
          <div className="min-h-48 mb-2">
            {list2.length > 0 ? (
              list2.map((element, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-2 my-1 rounded hover:bg-gray-50 ${element.selected ? 'bg-blue-50' : ''}`}
                >
                  <input 
                    type="checkbox" 
                    checked={element.selected}  
                    onChange={() => handleCheckedList2(element)}
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
            {list2.length} item{list2.length !== 1 ? 's' : ''}
          </div>
        </div> */}
        <ListBox title={"Backend"} items={list2} onToggle={handleCheckedList2} onSelectAll={selectAllList2}/>
      </div>
    </div>
  );
}

export default DualListExchanger;