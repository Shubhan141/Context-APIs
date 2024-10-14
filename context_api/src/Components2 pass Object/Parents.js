import React from "react";
import { useState } from "react";
// import it's child components.
import ChildComp from "./Child.js";
import Grand_child from "./Grand_child.js";

// import the Context
import { ColorContext } from "./Context.js";
console.log("color context is what :", ColorContext);

export default function Parents() {
  const [color, setColor] = useState("red");
  const [name, setName] = useState("Shubhan");
  const [age, setAge] = useState("24");
  return (
    <>
      <div>i am parents Componetns</div>

      {/* Wrapping at a higher level (e.g., CompA):
     Makes the context available to all nested components. */}
      <ColorContext.Provider value={{ color, name, age }}>
        <ChildComp />
      </ColorContext.Provider>
    </>
  );
}
