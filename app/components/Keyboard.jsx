import React from 'react'

export default function Keyboard({result,setResult}) {

function handleClick(e){

        if(result){
            if(result.length<3){
            setResult(result+e.target.innerText)
            }
        } else {
            setResult(e.target.innerText)
        }
    

}

  return (
    <div>
      <div style={{
        display: 'flex'
      }}><button onClick={(e)=>handleClick(e)}>7</button><button onClick={(e)=>handleClick(e)}>8</button><button onClick={(e)=>handleClick(e)}>9</button></div>
      <div style={{
        display: 'flex'
      }}><button onClick={(e)=>handleClick(e)}>4</button><button onClick={(e)=>handleClick(e)}>5</button><button onClick={(e)=>handleClick(e)}>6</button></div>
      <div style={{
        display: 'flex'
      }}><button onClick={(e)=>handleClick(e)}>1</button><button onClick={(e)=>handleClick(e)}>2</button><button onClick={(e)=>handleClick(e)}>3</button></div>
      <div><button onClick={(e)=>handleClick(e)}>0</button></div>
    </div>
  )
}
