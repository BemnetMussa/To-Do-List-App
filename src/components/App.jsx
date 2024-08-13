import React, { useState } from "react";

function App() {
  const [text, setText]  = useState("");
  const [items, setitems] = useState([]);

  function inputText(e) {
    const value = e.target.value;
    setText(value)
  }

  function urrItems(){
    setitems([...items, text])
    setText("")
    
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={text} onChange={inputText} onKeyDown={e => {if (e.key === "Enter") { urrItems() }}} type="text" />
   
        <button onClick={urrItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(val => { return <li>{val}</li>})}
        </ul>
      </div>
    </div>
  );
}

export default App;
