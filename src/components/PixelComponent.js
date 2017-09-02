import React from 'react';

export default class PixelComponent extends React.Component{
  state={
    thisBgColor: '#ffffff',
    thisBorderColor: '#C0C0C0'
  }
  
  _handleClick = event =>{
    let thisId = event.target.id
    this.setState({thisBgColor: this.props.currentColor, thisBorderColor: this.props.currentColor})
    this.props.colorClicker(thisId)
  }
  
  _handleMouseDown = () =>{
    this.props.mouseDown()
  }
  
  _handleMouseUp = () =>{
    this.props.mouseUp()
  }
  
  _handleMouseOver = event =>{
    let thisId = event.target.id
    if(this.props.mouseState != 0){
      console.log(this.props.mouseState)
      this.setState({thisBgColor: this.props.currentColor, thisBorderColor: this.props.currentColor})
    }
    this.props.mouseOver(thisId)
  }
  render(){
    return(
      <div
        id={this.props.id}
        style={{backgroundColor: this.state.thisBgColor, border: `1px solid ${this.state.thisBorderColor}`}}
        className="myLittlePixel"
        onClick={this._handleClick}
        onMouseDown={this._handleMouseDown}
        onMouseOver={this._handleMouseOver}
        onMouseUp={this._handleMouseUp}        
        ></div>
    )  
  }
}