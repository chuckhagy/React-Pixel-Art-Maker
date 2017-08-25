import React from 'react';
import PalletColorComponent from './PalletColorComponent';

let recentColors = ['white', 'blue', 'red', 'yellow', 'green', 'orange', 'purple', 'saddlebrown', 'firebrick', 'grey', 'indigo', 'darkmagenta', 'deeppink', 'gold', 'lawngreen', 'lemonchiffon'];

export default function PalletComponent(props){
  return(
    <div className="myPallet">
      {recentColors.map((thisColor, index) => <PalletColorComponent key={index} color={thisColor}/>)}
    </div>
  )
}
