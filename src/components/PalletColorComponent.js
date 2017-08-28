import React from 'react';

export default function PalletColorComponent({color, setNewColor}){
  
  function handleColorClick(){
    setNewColor(color);
  }
  
  return(
    <div className="myPalletColor" style={{backgroundColor: color}} onClick={handleColorClick}></div>
  )
}