import React from 'react';
import { useContext } from 'react';
import { nameContext } from './Context';

export default function Grand_child() {
 
  const object=useContext(nameContext);
  console.log("Context is:", object);
  // either we can dereference the object
  // const {name SetData, Data, setName}= object

  function handleAdddata(){
     object.SetData((preData)=> [...preData, object.name])
    //  return newArray;
  }
  return (
    <div>
      <h3> I am Grand child Components</h3>
      <p> name is : {object.name}</p>
      <button onClick={()=>{object.setName("Mohammad")}}> ChangeName</button>
      <p> after chainging the name is what {object.name}</p>
      <button onClick={handleAdddata}>Add Data</button>
      <h4> Data is visible Here</h4>
      {
        object.Data.map( (cureEle, index)=>{
          return (<li key={index}>{cureEle}</li>)
        })
      }
    </div>
  )
}
