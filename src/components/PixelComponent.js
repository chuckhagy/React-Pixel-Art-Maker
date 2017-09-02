import React from 'react';

export default function PixelComponent({
  style,
  id,
  colorClicker,
  mouseDown,
  mouseUp,
  mouseOver,
  mouseState
}){

  
  function handleClick(event){
    let thisId = event.target.id
    colorClicker(thisId)
  }
  
  function handleMouseDown(){
    mouseDown()
  }
  
  function handleMouseUp(){
    mouseUp()
  }
  
  function handleMouseOver(event){
      let thisId = event.target.id
      mouseOver(thisId)
  }
  
  return(
    <div
      className="myLittlePixel"
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      style={style}
      id={id}
      onMouseOver={handleMouseOver}
      onMouseUp={handleMouseUp}
      
      ></div>
  )
}