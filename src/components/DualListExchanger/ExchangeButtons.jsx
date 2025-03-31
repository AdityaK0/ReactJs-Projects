import React from "react";
import { ArrowLeft, ArrowRight, ChevronsLeft, ChevronsRight } from "lucide-react";

function ExchangeButtons({ moveAllToRight, moveSelectedToRight, moveSelectedToLeft, moveAllToLeft, list1, list2 }) {
  const anyList1Checked = list1.some(item => item.selected);
  const anyList2Checked = list2.some(item => item.selected);
  
  return (
    <div className="flex md:flex-col justify-center items-center gap-2 py-4">
      <button 
        className={`p-2 rounded-full ${list1.length > 0 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
        onClick={moveAllToRight}
        disabled={list1.length === 0}
        title="Move all to right"
      >
        <ChevronsRight size={18} />
      </button>
      
      <button 
        className={`p-2 rounded-full ${anyList1Checked ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
        onClick={moveSelectedToRight} 
        disabled={!anyList1Checked}
        title="Move selected to right"
      >
        <ArrowRight size={18} />
      </button>
      
      <button 
        className={`p-2 rounded-full ${anyList2Checked ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
        onClick={moveSelectedToLeft} 
        disabled={!anyList2Checked}
        title="Move selected to left"
      >
        <ArrowLeft size={18} />
      </button>
      
      <button 
        className={`p-2 rounded-full ${list2.length > 0 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
        onClick={moveAllToLeft}
        disabled={list2.length === 0}
        title="Move all to left"
      >
        <ChevronsLeft size={18} />
      </button>
    </div>
  );
}

export default ExchangeButtons;