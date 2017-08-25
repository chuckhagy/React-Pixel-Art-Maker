import React from 'react';

export default function PalletColorComponent({color}){
  return(
    <div className="myPalletColor" style={{backgroundColor: color}}></div>
  )
}