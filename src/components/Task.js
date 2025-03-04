import React from "react";

function Task({text, category}) {

  function handleDeleteItem(event){
    event.target.parentElement.remove()
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteItem} className="delete">X</button>
    </div>
  );
}


export default Task;
