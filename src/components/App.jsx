import React, { useState } from "react";
import ToDoItems from "./ToDoItems"


function App() {
  const [text, setText]  = useState("");
  const [items, setitems] = useState([]);

  function inputText(e) {
    const value = e.target.value;
    setText(value)
  }

  function addItem(){
    setitems([...items, text])
    setText("")
    
  }

  function deleteItem(id) {
    setitems(items => {return items.filter((item, index) =>{
      return index !== id
    })})

    console.log(id)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={text} onChange={inputText} onKeyDown={e => {if (e.key === "Enter") { addItem() }}} type="text" />
   
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todo, index) => {
            return <ToDoItems onChecked={deleteItem} key={index} id={index} item={todo}/>
          })}
        </ul>
      </div>
    </div>
  );

}

export default App;

