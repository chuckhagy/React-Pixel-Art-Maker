import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PageLayoutComponent from './components/PageLayoutComponent'
import PixelArtPage from './components/PixelArtPage'

let currentColor = 'black';
let recentColors = ['white', 'black', 'blue', 'red', 'yellow', 'green', 'orange', 'purple', 'saddlebrown', 'firebrick', 'grey', 'indigo', 'deeppink', 'gold', 'lawngreen', 'lemonchiffon'];

let colorBlind = [];
for(let i = 0; i< 1914; i++){
  colorBlind.push('white');
}

function setNewColor(newColor){
  currentColor=newColor;
  render()
}

function colorClicker(id){
  colorBlind[id] = currentColor;
  render()
}


let mouseState = 0;

function mouseDown(){
  mouseState = 1;
  render();
}

function mouseUp(){
  mouseState = 0;
  render();

}

function mouseOver(id){
  if(mouseState){
    colorBlind[id] = currentColor;
  }
}


function render(){
  ReactDOM.render(<PixelArtPage
    recentColors={recentColors}
    currentColor={currentColor}
    setNewColor={setNewColor}
    colorClicker={colorClicker}
    colorBlind={colorBlind}
    mouseDown={mouseDown}
    mouseUp={mouseUp}
    mouseOver={mouseOver}
    mouseState={mouseState}
  />, document.getElementById('root'));
  registerServiceWorker();  
}

render()
