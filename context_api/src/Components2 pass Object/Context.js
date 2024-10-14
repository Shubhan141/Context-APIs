// creating Context
import { createContext } from "react";
 export const ColorContext = createContext();// call  create context and save into the variable for the futher use
 // name of context should be relatable
 // (2) what ever values is return by the context we have to use it somewhere 
 // let's export it's value where  is required  use it.



//  // Create the context
// const SecretDataContext = React.createContext(null);

// // Component A (Provider)
// function ComponentA({ children }) {
//   const secretData = "Secret Info";

//   return (
//     <SecretDataContext.Provider value={secretData}>
//       {children}
//     </SecretDataContext.Provider>
//   );
// }

// // Component D (Consumer)
// function ComponentD() {
//   const secretData = React.useContext(SecretDataContext);
//   return <div>{secretData}</div>;
// }