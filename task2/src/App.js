import React, { useCallback, useState } from "react";
import "./App.css";
import Button from "./component/button";
import Contents from "./contents";

function App() {
  const [message, setMessage] = useState("");
  const handleClick = useCallback((msg) => {
  
    setMessage(msg);
  }, []);

  return (
    <div className="app">
      <Button label="Click Me" onClick={() => handleClick("yo")} />
      <Button label="Click Bro" onClick={() => handleClick("hello")} />
      {message && <Contents data={message} />}
    </div>
  );
}

export default App;
