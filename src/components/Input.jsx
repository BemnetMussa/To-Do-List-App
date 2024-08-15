import React, { useState } from "react";

function Input(props){
    const [text, setText]  = useState("");

    
    function inputText(e) {
        const value = e.target.value;
        setText(value)
       
    }




    return (<div className="form">
        <input value={text} onChange={inputText} onKeyDown={e => {if (e.key === "Enter") { props.onAdd(text); setText("") }}} type="text" />
   
        <button onClick={() => {
            props.onAdd(text);
            setText("")
        }}>
          <span>Add</span>
        </button>
      </div>)
}


export default Input;