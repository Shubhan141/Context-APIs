import React, { useState } from 'react';
import ChildComponents from './ChildComponents';

export default function ParentsComponents() {
  const [color, setColor] = useState("#000000"); // Create state variable in parent

  return (
    <div>
      <h1>Pick a color in Parents components</h1>
      <input 
        type="color"
        onChange={(e) => setColor(e.target.value)} // Update color state on input change
        value={color}  
      />
      <ChildComponents color={color} /> {/* Pass color to the child component */}
    </div>
  );
}
