import React from 'react';
import PixelComponent from './PixelComponent'

export default function CanvasComponent(props){
  let colorBlind = {};
  for(let i = 0; i< 1914; i++){
    colorBlind[i] = 'fff';
  }
  return(
    <div className="myCanvas">
      {Object.keys(colorBlind).map(thisOne => <PixelComponent key={thisOne}/>)}
    </div>
  )
}