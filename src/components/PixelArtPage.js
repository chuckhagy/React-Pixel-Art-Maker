import React from 'react';
import CanvasComponent from './CanvasComponent';
import PalletComponent from './PalletComponent';
import CurrentColorComponent from './CurrentColorComponent';
import PageLayoutComponent from './PageLayoutComponent';

export default function PixelArtPage({
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
    <div>
      <PageLayoutComponent>
        <CanvasComponent
          currentColor={currentColor}
          colorClicker={colorClicker}
          colorBlind={colorBlind}
          mouseDown={mouseDown}
          mouseUp={mouseUp}
          mouseOver={mouseOver}
          mouseState={mouseState}
        />
        <CurrentColorComponent
          currentColor={currentColor}
        />
        <PalletComponent
          recentColors={recentColors}
          setNewColor={setNewColor}
        />
      </PageLayoutComponent>
    </div>
  )
  
  
}