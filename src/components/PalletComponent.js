import React from 'react';
import PalletColorComponent from './PalletColorComponent';

export default function PalletComponent({recentColors, setNewColor}){
  
  return(
    <div className="myPallet">
      {recentColors.map((thisColor, index) => <PalletColorComponent key={index} color={thisColor} setNewColor={setNewColor}/>)}
    </div>
  )
}
