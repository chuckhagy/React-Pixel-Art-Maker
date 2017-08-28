import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PageLayoutComponent from './components/PageLayoutComponent'

let currentColor = 'black';
let recentColors = ['white', 'blue', 'red', 'yellow', 'green', 'orange', 'purple', 'saddlebrown', 'firebrick', 'grey', 'indigo', 'darkmagenta', 'deeppink', 'gold', 'lawngreen', 'lemonchiffon'];

function setNewColor(newColor){
  currentColor=newColor;
  render()
}

function render(){
  ReactDOM.render(<PageLayoutComponent
    recentColors={recentColors}
    currentColor={currentColor}
    setNewColor={setNewColor}
  />, document.getElementById('root'));
  registerServiceWorker();  
}

render()
