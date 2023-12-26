import styles from './styles.module.css'

export default function Settings({setting,setSetting,openSetting,setOpenSetting,neueAufgabe,setNeueAufgabe,zahlOne,zahlTwo,setZahlOne,setZahlTwo,aktivInput,setAktivInput}) {

function handleClick(){
  setSetting({
 zahlOne: zahlOne,
 zahlTwo: zahlTwo,
 })  
 setOpenSetting(!openSetting)
 setNeueAufgabe(true)
}

function handleInputClick(e){
  e.target.style.backgroundColor='green'
  document.getElementById(e.target.id).style.backgroundColor='lightgreen'
  setAktivInput(e.target.id)
}

  return (
    <div>
      {!openSetting && <div 
    className={styles.settingButtonClosed}
    onClick={()=>setOpenSetting(!openSetting)}>
            </div>}

      {openSetting && 
    <div 
    className={styles.settingContainer}>   

      <div 
      style={{
        display: 'flex'
      }}>
        
      <p>Zahlenraum von:</p>
<div className={styles.inputWrapper}>
<input 
      id='zahlOne'
      type="number" 
      placeholder={setting.zahlOne}
      value={zahlOne}
      onChange={e => setZahlOne(e.target.value)} 
      onClick={(e)=>handleInputClick(e)}
      />

<div className={styles.chooseThisInput}
      id='zahlOneButton'
      onClick={(e)=>handleInputClick(e)}
      ></div>
</div>     

      <p>bis </p>

<div className={styles.inputWrapper}>
<input 
      id='zahlTwo'
      type="number" 
      placeholder={setting.zahlTwo+1}
      value={zahlTwo}
      onChange={e => setZahlTwo(e.target.value)} 
      onClick={(e)=>handleInputClick(e)}      
      />

      <div className={styles.chooseThisInput}
            id='zahlTwoButton'
      onClick={(e)=>handleInputClick(e)}
      ></div>

</div>
<button onClick={handleClick}>ok</button>
      </div>
      
      <div 
    className={styles.settingButtonOpen}
    onClick={()=>setOpenSetting(!openSetting)}>
            </div>

      </div>}
    </div>
  )
}
