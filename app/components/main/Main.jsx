'use client'
import { useEffect, useState, useRef } from 'react'
import React from 'react'
import ShowTrueResults from '../showTrueResults/ShowTrueResults'
import Keyboard from '../Keyboard'
import Settings from '../Settings/Settings'
import styles from './styles.module.css'

export default function Main() {

  // States for Aufgabe
     const [ aufgabe, setAufgabe ] = useState({
        firstNumber: null,
        secoundNumber: null,
        result: null
    })
    const [ result, setResult ] = useState(null)
    const [ neueAufgabe, setNeueAufgabe ] = useState(true)
  // States for Settings
    const [ setting, setSetting ] = useState({
      zahlOne: 2,
      zahlTwo: 9
  })

  const [ openSetting, setOpenSetting ] = useState(false)
  const [ zahlOne, setZahlOne ] = useState('')
  const [ zahlTwo, setZahlTwo ] = useState('')
  const [ aktivInput, setAktivInput ] = useState('zahlOne')

    let alleAufgaben = useRef([])

    // Eine Neue Aufgabe
    useEffect(()=>{
        const randomA = Math.floor(Math.random()*setting.zahlTwo)+setting.zahlOne
        const randomB = Math.floor(Math.random()*setting.zahlTwo)+setting.zahlOne
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
    },[neueAufgabe,setNeueAufgabe,setAufgabe,zahlOne,zahlTwo,setting])

    // öffnen der Settings
    /*
useEffect(()=>{
  if(openSetting){

  } else {

  }
},[openSetting])*/

function handleClickOk(eTarget){
console.log(eTarget)
  if(result==aufgabe.result){
    
    eTarget.style.backgroundColor='green'
    eTarget.style.color='white'
    setNeueAufgabe(true)

    document.getElementById('resultInput').value=''
    alleAufgaben.current.push(aufgabe)

    setTimeout(()=>{
      setResult(null)
      eTarget.style.backgroundColor='transparent'
        eTarget.style.color='black'
        eTarget.style.border='1px solid black'

    },1000)
            } else {
              eTarget.style.backgroundColor='red'
        eTarget.style.color='white'
    setResult(null)
    document.getElementById('resultInput').value=''
    setTimeout(()=>{
      eTarget.style.backgroundColor='transparent'
      eTarget.style.color='black'
      eTarget.style.border='1px solid black'
    },1000)
            }
}

function handleKeyDown(e){
  const resultInputElement = document.getElementById('resultInput')
  console.log(e.key)
  switch(e.key){
    case 'Enter':
      if(e.target.value === 'ok'){
        const eTarget = e.target
        handleClickOk(eTarget)
      } else {
        handleClickOk(resultInputElement)
      }
      break
    case 'Backspace':
      setResult(result.substring(0, result.length))
      break
      case '7':
        handleClickOk(resultInputElement)
        break
        default:
          handleClickOk(resultInputElement)
  }

}

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem'
    }}>
      <Settings setting={setting} setSetting={setSetting} 
      openSetting={openSetting} setOpenSetting={setOpenSetting} 
      neueAufgabe={neueAufgabe} setNeueAufgabe={setNeueAufgabe}
      zahlOne={zahlOne} zahlTwo={zahlTwo} setZahlOne={setZahlOne} setZahlTwo={setZahlTwo} 
      aktivInput={aktivInput} setAktivInput={setAktivInput}  
      />      
           <div 
           className={styles.dieAufgabe}>
<p>{aufgabe.firstNumber && aufgabe.firstNumber}</p> 
<p>*</p> <p>{aufgabe.secoundNumber && aufgabe.secoundNumber} 
</p> <p>=</p> <p>{result && result}</p>
    </div>

      <input 
      id='resultInput' 
        onChange={e => setResult(e.target.value)} 
        onKeyDown={(e)=>handleKeyDown(e)}
      type="number" 
      style={{
        border: '1px solid black',
        borderRadius: '5rem',
        margin: '2rem 1rem',
        padding: '0.6rem',
        width: '10rem',
        fontSize: '4rem'
      }}
      value={result ? result : ''}/>
<Keyboard result={result} setResult={setResult}  
openSetting={openSetting} 
setSetting={setSetting} 
neueAufgabe={neueAufgabe} 
zahlOne={zahlOne} zahlTwo={zahlTwo} setZahlOne={setZahlOne} setZahlTwo={setZahlTwo} 
aktivInput={aktivInput} setAktivInput={setAktivInput}
handleKeyDown={handleKeyDown}/>

      <button
      id='resultInputButton'
      style={{width: '100%', margin: '1rem 0'}} 
      onClick={(e)=>handleClickOk(e.target)}>ok</button>

<ShowTrueResults aufgabenArray={alleAufgaben.current}/>
    </div>
  )
}
