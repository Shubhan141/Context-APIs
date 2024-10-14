import React, { useState } from 'react';
import { useContext } from 'react';
import { nameContext } from './Context';
import Child from './Child.js';


export default function Parents() {
  const [name, setName]=useState("Shubhan");
  // create an array and pass it into the provider
  const [Data,  SetData] =useState([1,2,3]);// initial  array is empty
  return (
    <div>
      <h1> I am parents Components</h1>
     {/*  from child comp and under child all com can access the name and setName variale and function  */}
       <nameContext.Provider value={{ Data,SetData,name, setName} } >
       <Child/>
       </nameContext.Provider>
    </div>
  )
}
