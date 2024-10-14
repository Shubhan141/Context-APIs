import React from 'react';
import GrandChild from './Grand_child.js';
//  import useContext for the functional components 
import { useContext } from 'react';
import { ColorContext } from './Context.js';

export default function Child() {
  // save it into the varialbe ans see in the console
  const color =useContext(ColorContext);
  console.log("useContext is :", color);
  return (
    <div style={{border:'2px solid red', margin:'5px'}}>
       <p> Hi i am child components </p>
       <p> color get from parent through props is {color}</p>
       <GrandChild />
    </div>
  )
}

