import React from 'react'

export default function ShowTrueResults({aufgabenArray}) {
  return (
    <ul style={{
      display: 'flex',
      flexDirection: 'column-reverse'
    }}>
      {aufgabenArray.map((aufgabe,index)=>{
        return <li 
        key={'aufgabe'+index}
        style={{display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40vw'}}>
                 
      <p>{aufgabe.firstNumber && aufgabe.firstNumber}</p><p>*</p><p> {aufgabe.secoundNumber && aufgabe.secoundNumber} </p><p> = {aufgabe.result && aufgabe.result}</p></li>
   
      })}
    </ul>
  )
}
