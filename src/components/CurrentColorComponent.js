import React from 'react';

export default function CurrentColorComponent({currentColor}){

  
  return(
    <div className="currentBox">
      <div className="myCurrentColor" style={{backgroundColor: currentColor}}></div>
    </div>
  )
}