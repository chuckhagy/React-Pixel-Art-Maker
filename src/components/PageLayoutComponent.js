import React from 'react';

export default function PageLayoutComponent(props){
  return(
    <div className="myPageLayout">
      <h1 className="topTitle">Show Me What You Got!</h1>
      <div>{props.children[0]}</div>
      <div>
        {props.children[1]}
        {props.children[2]}
      </div>
    </div>
  )
}