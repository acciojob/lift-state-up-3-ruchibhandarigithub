
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [select,setSelect]=useState();
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="child-1">
        <h2>Child Component 1</h2> 
        <button onClick={()=> setSelect("Option 1")}>Option 1</button>
      </div>
      <div className="child-2">
         <h2>Child Component 2</h2> 
         <button onClick={()=> setSelect("Option 2")}>Option 2</button>
      </div>
      <p>Selected Option : {select}</p>
    </div>
  )
}

export default App
