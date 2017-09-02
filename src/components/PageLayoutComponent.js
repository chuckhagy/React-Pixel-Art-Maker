import React from 'react';
import CanvasComponent from './CanvasComponent';
import PalletComponent from './PalletComponent';
import CurrentColorComponent from './CurrentColorComponent';

export default function PageLayoutComponent({
  recentColors,
  currentColor,
  setNewColor,
  colorClicker,
  colorBlind,
  mouseDown,
  mouseOver,
  mouseState,
  mouseUp
}){
  return(
    <div className="myPageLayout">
      <h1 className="topTitle">Show Me What You Got!</h1>
      <div>
        <CanvasComponent
          currentColor={currentColor}
          colorClicker={colorClicker}
          colorBlind={colorBlind}
          mouseDown={mouseDown}
          mouseUp={mouseUp}
          mouseOver={mouseOver}
          mouseState={mouseState}
        />
      </div>
      <div>
          <CurrentColorComponent
            currentColor={currentColor}
          />
          <PalletComponent
            recentColors={recentColors}
            setNewColor={setNewColor}

          />
        </div>
    </div>
  )
}