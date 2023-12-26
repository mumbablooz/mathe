import React from 'react'
import styles from './styles.module.css'

export default function ShowTrueResults({aufgabenArray}) {
  return (
    <ul className={styles.trueResultsContainer}>

      {aufgabenArray.map((aufgabe,index)=>{
        return <li 
        key={'aufgabe'+index}>
                 
      <p>{aufgabe.firstNumber && aufgabe.firstNumber}</p><p>*</p><p> {aufgabe.secoundNumber && aufgabe.secoundNumber} </p><p> = {aufgabe.result && aufgabe.result}</p></li>
   
      })}

    </ul>
  )
}
