import React from 'react'
import { useContext } from 'react' // for access the value 
import { ColorContext } from './Context' // for teh consume the values

export default function Grand_child() {
  
 const colorContext = useContext(ColorContext);
 if(!colorContext){
  console.log(colorContext);
  return null;
 }
 const {color, name,age}=colorContext;
  console.log("color ,name, age", color,name,age);
  return (
    <div >
       <h1> name age and colr is : </h1>
        <p> name:{name}</p>
        <p> color: {color}</p>
        <p> age :{age}</p>
    </div>
  )
}
