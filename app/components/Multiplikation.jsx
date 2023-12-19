'use client'
import { useEffect, useState, useRef } from 'react'
import React from 'react'
import ShowTrueResults from './ShowTrueResults'
import Keyboard from './Keyboard'

export default function Multiplikation() {

   // const [ alleAufgaben, setAlleAufgaben ] = useState([])
    const [ aufgabe, setAufgabe ] = useState({
        firstNumber: null,
        secoundNumber: null,
        result: null
    })
    const [ result, setResult ] = useState(null)
    const [ neueAufgabe, setNeueAufgabe ] = useState(true)
    
    let alleAufgaben = useRef([])
    useEffect(()=>{
        const randomA = Math.floor(Math.random()*8)+2
        const randomB = Math.floor(Math.random()*10)+2
        const res = randomA * randomB
        if(neueAufgabe){
            setAufgabe((rev)=>{
               return {...rev,
            firstNumber: randomA,
            secoundNumber: randomB,
            result: res
            }
            })   
            setNeueAufgabe(false)
        }
    },[neueAufgabe,setNeueAufgabe,setAufgabe])


  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
           <div 
           style={{
            display:'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '50vw'}}>
<p>{aufgabe.firstNumber && aufgabe.firstNumber}</p><p>*</p><p> {aufgabe.secoundNumber && aufgabe.secoundNumber} </p><p> = {result && result}</p>
    </div>

      <input id='input' onChange={e => setResult(e.target.value)} 
      type="number" 
      style={{
        border: '1px solid black',
        margin: '2rem 0'
      }}/>
<Keyboard result={result} setResult={setResult} />
      <button onClick={(e)=>{
        if(result==aufgabe.result){
e.target.style.background='green'
e.target.style.color='white'
setNeueAufgabe(true)
setResult(null)
document.getElementById('input').value=''
alleAufgaben.current.push(aufgabe)
console.log(alleAufgaben)
setTimeout(()=>{
    e.target.style.background='transparent'
    e.target.style.color='black'
    e.target.style.border='1px solid black'
},1000)
        } else {
    e.target.style.background='red'
    e.target.style.color='white'
setResult(null)
document.getElementById('input').value=''
setTimeout(()=>{
    e.target.style.background='transparent'
    e.target.style.color='black'
    e.target.style.border='1px solid black'
},1000)
        }
      }}>ok</button>
<ShowTrueResults aufgabenArray={alleAufgaben.current}/>
    </div>
  )
}
