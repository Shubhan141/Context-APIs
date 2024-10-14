import React, { useState } from 'react';
// Import the child components.
import ChildComp from './Child.js';
import GrandChild from './Grand_child.js'
// Import the Context file
import { ColorContext } from './Context.js';

export default function Parents() {
  const [color, setColor] = useState("#000000"); // Initialized color to a default value
  
  return (
   <>
    <div>
       <p>Select a color</p>
       {/* Correct spelling from 'from' to 'form' */}
       <form>
         <input 
           type='color'
           value={color}
           onChange={(e) => setColor(e.target.value)} // Update color on change
         />
       </form>
       {/* Display the selected color's hex code */}
       <p style={{color: color}}>Color Hex code is {color}</p>
    </div>
    
    {/* Wrap the components under the context.provider */}
    <ColorContext.Provider value={color}>
      {/* ChildComp and GrandChild can now consume the context */}
      <ChildComp />
      <GrandChild />
    </ColorContext.Provider>
   </>
  )
}
