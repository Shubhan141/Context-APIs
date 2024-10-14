import React from 'react'
import { useContext } from 'react'
import { ColorContext } from './Context'

export default function Grand_child() {
  const color= useContext(ColorContext);
  return (
    <div style={{border:'2px solid green'}}>
       <p> i am Grand child and get color throught the props </p>
       <p style={{color:color}}> color is in hex code {color}</p>
       <div style={{width:'200px', height:'200px'}}>
           <p> color is that passed from the parent to grand child componets is {color}</p>
       </div>
    </div>
  )
}
