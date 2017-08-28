import React from 'react';
import CanvasComponent from './CanvasComponent';
import PalletComponent from './PalletComponent';
import CurrentColorComponent from './CurrentColorComponent';

export default function PageLayoutComponent({recentColors, currentColor, setNewColor}){
  return(
    <div className="myPageLayout">
      <h1 className="topTitle">Let there be pixles!</h1>
      <div>  <CanvasComponent /></div>
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