import React, { useState } from 'react'
import Square from './Square'
import { FunnelX, SquareActivity } from 'lucide-react'

function Board() {
  let [state,setState]  = useState(Array(9).fill(null))
  let [isXturn,setIsXturn]  = useState(true)
  let [winner,setWinner] = useState(null)
  let [disAll,setDisAll] = useState(false)
  let winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];


  function checkWinner(updatedState){
    for (let combo of winningCombos) {
        let [a,b,c] = combo 
        console.log("Update State",a,b,c,updatedState);

        console.log(updatedState[a],updatedState[b],updatedState[c]);
        
        if (updatedState[a] && updatedState[a] === updatedState[b] && updatedState[a] === updatedState[c]) {
            return updatedState[a]; 
          }
    }
    return null
  }

  
  function handleClick(index){
    let newState = [...state];
    newState[index] = isXturn?`X`:`O`

    let win = checkWinner(newState);
    if (win) {
      setWinner(win);
      setDisAll(true)
    } else if (!newState.includes(null)) {
      setWinner('Draw'); 
    }

    setState(newState);
    setIsXturn(!isXturn);
  }

  function resetGame(){
    setState(Array(9).fill(null)) 
    setWinner(null)
    setDisAll(false)
  }

  return (
    <div className='flex flex-col justify-center items-center m-2'>
        {/* <div className='flex justify-center items-center w-102 ' >
           <Square onClick = {()=>handleClick(0)} value={state[0]}/>
           <Square onClick = {()=>handleClick(1)} value={state[1]}/>
           <Square onClick = {()=>handleClick(2)} value={state[2]}/>
        </div>
        <div className='flex justify-center items-center w-102 ' >
           <Square onClick = {()=>handleClick(3)} value={state[3]}/>
           <Square onClick = {()=>handleClick(4)} value={state[4]}/>
           <Square onClick = {()=>handleClick(5)} value={state[5]}/>
        </div>
        <div className='flex justify-center items-center w-102 ' >
           <Square onClick = {()=>handleClick(6)} value={state[6]}/>
           <Square onClick = {()=>handleClick(7)} value={state[7]}/>
           <Square onClick = {()=>handleClick(8)} value={state[8]}/>
        </div> */}
      <h2 className="text-xl font-bold mb-4">
      {winner 
            ? (winner === 'Draw' ? 'Game Draw!' : `Winner: ${winner}`) 
            : `Next Player: ${isXturn ? 'X' : 'O'}`
      }
      </h2>
        <div className='grid grid-cols-3 gap-2 '>
          {
            state.map((el,i)=><Square onClick={()=>handleClick(i)} value={el} disable={el?true:false} won={disAll}/>)
          }
        </div> 

        {winner && <button className="mt-4 p-2 bg-blue-500 text-white" onClick={() => resetGame()}>Restart</button>}

    </div>
  )
}

export default Board