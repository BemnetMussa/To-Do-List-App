import React, { useState } from "react";
import ToDoItems from "./ToDoItems"
import Input from "./Input";


function App() {
  const [items, setitems] = useState([]);

  function addItem(text){
    console.log(text)
    setitems([...items, text])
 
    
  } 

  function deleteItem(id) {
    setitems(items => {return items.filter((item, index) =>{
      return index !== id
    })})
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <Input onAdd={addItem} />
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

