import React from 'react';

export default function PageLayout(props){
  return(
    <div className="myPageLayout">
      <div>{props.children[0]}</div>
      <div>{props.children[1]}</div>
      <div>{props.children[2]}</div>
      <div>{props.children[4]}
      </div>
    </div>
  )
}