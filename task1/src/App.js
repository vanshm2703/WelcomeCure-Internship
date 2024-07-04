import React, { useState } from "react";
import Button from "./components/button";

function App() {
  const [message, setMessage] = useState("");
  const handleClick = (e) => {
    const variable1 = e.currentTarget.textContent
    if(variable1 === "click me"){
      setMessage("yo");
    }
    else{
      setMessage("hii");
    }
  };

  return (
    <div className="app">
      <header className="appheader">
        <h1>'My name is button'</h1>
        <Button label="click me" onClick={(e)=>{handleClick(e)}}></Button>
        {message && (
          <div className="mt-4 p-4 bg-gray-200 rounded">{message}</div>
        )}

        <Button label="hi" onClick={(e)=>{handleClick(e)}}></Button>
      </header>
    </div>
  );
}
export default App;
