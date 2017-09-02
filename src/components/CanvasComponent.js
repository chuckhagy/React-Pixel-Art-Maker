import React from 'react';
import PixelComponent from './PixelComponent'

export default function CanvasComponent({
  currentColor,
  setNewColor,
  colorClicker,
  colorBlind,
  mouseDown,
  mouseUp,
  mouseOver,
  mouseState
})
{  
    return(
    <div className="myCanvas">
      {colorBlind.map((thisColor, index) => <PixelComponent
        key={index}
        id={index}
        style={{backgroundColor: thisColor, border: `1px solid ${thisColor}`}}
        colorClicker={colorClicker}
        mouseDown={mouseDown}
        mouseUp={mouseUp}
        mouseOver={mouseOver}
        mouseState={mouseState}


/>)}
    </div>
  )
}