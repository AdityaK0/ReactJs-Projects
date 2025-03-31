import React from 'react'
import { useState,useEffect,useCallback } from 'react'
import './pwd.css'


function Password() {
  const [inputPwd,setInputPwd] = useState("")
  const [rangeVal,setRangeVal] = useState(8)  
  const [checkBoxNumber,setCheckBoxNumber] = useState(false)
  const [checkBoxSpecialCharacter,setCheckBoxSpecialCharacter] = useState(false)
  const [list,setList] = useState([])
  const [show,setShow] = useState(false)
  
  
  
  const smallCharacter = Array.from({"length":26}).map((_,i)=> String.fromCharCode(65+i))
  const capitalCharacter = Array.from({"length":26}).map((_,i)=> String.fromCharCode(97+i))
  const numbers = Array.from({"length":9}).map((_,i)=>i)
  const specialCharacters = [
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
    "{", "}", "[", "]", "|", "\\", ":", ";", "\"", "'", "<", ">", ",", ".", 
    "?", "/"
  ];


  useEffect(()=>{
    
    let newList = [...smallCharacter,...capitalCharacter]
    if(checkBoxNumber) newList = [...newList,...numbers]
    if(checkBoxSpecialCharacter) newList = [...newList,...specialCharacters]
    
    setList(newList)
    return ()=>{}
  },[checkBoxSpecialCharacter,checkBoxNumber])


  useEffect(()=>{
   passWordGenerator(list);

   return ()=>{}
   
  },[rangeVal,list])

  function passWordGenerator(dataList){
   let generatedPassword = ""
   for (let index = 0; index < rangeVal; index++) { 
    let element = dataList[Math.floor(Math.random()*dataList.length)]
    generatedPassword+=element
   }
   setInputPwd(generatedPassword)
   return generatedPassword
   
   
  }

  function resetValue(){
    setCheckBoxNumber(false)
    setCheckBoxSpecialCharacter(false)
  }
  function copyAndShow(){
   navigator.clipboard.writeText(inputPwd)
   setShow(true)
   setTimeout(() => {
    setShow(false)
   }, 800);
  }

  return (
    <div className='container'>
        <h2> Password  Generator</h2>
        <div className='action' style={{width:"80%",justifyContent:"center"}}>
            <input type="text" value={inputPwd} onChange={()=>{}} className='input-box' />
            <button onClick={() =>  copyAndShow()} >  Copy</button>
            <button onClick={resetValue} >Reset</button>
            <div style={{width:"110px",alignContent:"center"}}>
            {show?
            <span style={{backgroundColor:"rgb(14, 169, 14)",textAlign:"center",padding:"7px 14px",borderRadius:"5px",fontWeight:"600",marginT:"2rem"}}>Copied !</span>
            :null}
            </div>
        </div>    
        <div className='action-container'>
            <div className='action'>
            <input type="range" value={rangeVal} 
                   onChange={({target})=>setRangeVal( target.value)}
                   className='input-box'
            /> 
            <span>{rangeVal}</span>
            </div>
            <div>
            <input type="checkbox" onChange={()=>setCheckBoxNumber(!checkBoxNumber)} checked={checkBoxNumber}  /> <span>Number</span>
            </div>
            <div>
            <input type="checkbox" onChange={()=>setCheckBoxSpecialCharacter(!checkBoxSpecialCharacter)} value={checkBoxSpecialCharacter} checked={checkBoxSpecialCharacter}/> <span>Special Character</span>
            </div>
         
        </div>
        
    </div>
  )
}

export default Password