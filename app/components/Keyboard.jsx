import React, { useState,useEffect,useRef,useCallback } from 'react'

export default function Keyboard({result,setResult,openSetting,setSetting,neueAufgabe,zahlOne,zahlTwo,setZahlOne,setZahlTwo,aktivInput,setAktivInput,handleKeyDown}) {

  const [ handleClickFunction, setHandleClickFunction ] = useState(() => (e) => handleClickAufgabe(e ))

let resultRef = useRef(null)
let zahlOneSettingRef = useRef(null)
let zahlTwoSettingRef = useRef(null)
let aktivInputRef = useRef(null)

const handleClickAufgabe =  useCallback((e)=>{

    if(result || resultRef.current){

        if(resultRef.current.length<3){
        setResult(resultRef.current+e.target.innerText)
        resultRef.current = resultRef.current+e.target.innerText            
        }
    } else {
        setResult(e.target.innerText)
        resultRef.current = e.target.innerText
    }  

},[result,setResult])

const handleClickSetting = useCallback((e)=>{


  switch(aktivInputRef.current ? aktivInputRef.current : aktivInput){
    case 'zahlOne':
      if(zahlOne || zahlOneSettingRef.current) {
        if(zahlOneSettingRef.current.length<2){
          setZahlOne(zahlOneSettingRef.current+e.target.innerText)
          zahlOneSettingRef.current = zahlOneSettingRef.current+e.target.innerText
        } 
      } else {
        setZahlOne(e.target.innerText)
        zahlOneSettingRef.current = e.target.innerText  
      }
    break
    case 'zahlTwo':
      if(zahlTwo || zahlTwoSettingRef.current) {
   
        if(zahlTwoSettingRef.current.length<5){
          setZahlTwo(zahlTwoSettingRef.current+e.target.innerText)
          zahlTwoSettingRef.current = zahlTwoSettingRef.current+e.target.innerText
        } 
      } else {
        setZahlTwo(e.target.innerText)
        zahlTwoSettingRef.current = e.target.innerText  
      }
    break
    default:
      if(zahlOne || zahlOneSettingRef.current) {
        if(zahlOneSettingRef.current.length<2){
          setZahlOne(zahlOneSettingRef.current+e.target.innerText)
          zahlOneSettingRef.current = zahlOneSettingRef.current+e.target.innerText
        } 
      } else {
        setZahlOne(e.target.innerText)
        zahlOneSettingRef.current = e.target.innerText  
      }
  }
  
},[aktivInput, setZahlOne, setZahlTwo, zahlOne, zahlTwo])

  useEffect(()=>{
    if(openSetting){

        setHandleClickFunction(() => (e) => handleClickSetting(e ))
    
    } else {
      
      setHandleClickFunction(() => (e) => handleClickAufgabe(e ))
    }
  },[openSetting,setHandleClickFunction,handleClickSetting,handleClickAufgabe])


  useEffect((neueAufgabe)=>{
    resultRef.current = null
  },[neueAufgabe,resultRef])

  useEffect(()=>{
if(aktivInput){
  aktivInputRef.current = aktivInput
}
  },[aktivInput,aktivInputRef])



const handleClick = (e) => {
  handleClickFunction(e);
};

  return (
    <div style={{
      padding: '0 1rem'
    }}>
      <div style={{
        display: 'flex'
      }}>
        <button 
      onClick={handleClick} onKeyDown={(e)=>handleKeyDown(e)}>7</button>
      
      <button onClick={handleClick} onKeyDown={(e)=>handleKeyDown(e)}>8</button>
      <button onClick={handleClick} onKeyDown={(e)=>handleKeyDown(e)}>9</button></div>
      <div style={{
        display: 'flex'
      }}><button onClick={handleClick} onKeyDown={(e)=>handleKeyDown(e)}>4</button><button onClick={handleClick} onKeyDown={(e)=>handleKeyDown(e)}>5</button><button onClick={handleClick} onKeyDown={(e)=>handleKeyDown(e)}>6</button></div>
      <div style={{
        display: 'flex'
      }}><button onClick={handleClick} onKeyDown={(e)=>handleKeyDown(e)}>1</button><button onClick={handleClick} onKeyDown={(e)=>handleKeyDown(e)}>2</button><button onClick={handleClick} onKeyDown={(e)=>handleKeyDown(e)}>3</button></div>
      <div style={{
        display: 'flex'
      }}><button onClick={handleClick} onKeyDown={(e)=>handleKeyDown(e)}>0</button><button onClick={()=>{
        if(!openSetting){
          setResult(null)
          resultRef.current = null
          document.getElementById('resultInput').value=''     
        } else {
          setSetting({
              zahlOne: 2,
              zahlTwo: 10
            }
          )
        }
   
        }}>clear</button></div>
    </div>
  )
}
