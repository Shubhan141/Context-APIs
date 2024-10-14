import React from 'react';


export default function GrandChild({color}) {
  return (
   <div style={{border:'2px solid red',backgroundColor:'lightgreen'}}>
    <h1> i am GrandChild componets</h1>
     <>p of the color is that we get fromt the child componets</>
     <span style={{color:color}}> the text color</span>
     <p> color is {color}</p>
   </div>
  )
}
