import React from 'react';
import GrandChild from './GrandChild';

export default function Child({color}) {
  return (
    <div>
       <div style={{border:'2px solid red', backgroundColor:'lightblue'}}>
      <h1> i am Child componetns</h1>
      <p> Hex code that we get from the Parenst componets {color}</p>
      <span style={{color:color}}> the Text color is</span>
    </div>
    <GrandChild color={color}/>
    </div>
  )
}
