import React from 'react';
import PageLayoutComponent from 'PageLayoutComponent';
import CanvasComponent from 'CanvasComponent';
import CurrentColorComponent from 'CurrentColorComponent';
import PalletComponent from 'PalletComponent';

export default function PixelArtMakerPage(){
  return(
    <PageLayoutComponent>
      <CanvasComponent />
      <CurrentColorComponent />
      <PalletComponent />
    </PageLayoutComponent>
  )  
}
